<?php

namespace Pyro\MenusModule\Http\Controller\Admin;

use Anomaly\Streams\Platform\Addon\Extension\ExtensionCollection;
use Anomaly\Streams\Platform\Asset\Asset;
use Anomaly\Streams\Platform\Http\Controller\AdminController;
use Pyro\MenusModule\Link\Contract\LinkInterface;
use Pyro\MenusModule\Link\Contract\LinkRepositoryInterface;
use Pyro\MenusModule\Link\Entry\EntryFormBuilder;
use Pyro\MenusModule\Link\Form\LinkFormBuilder;
use Pyro\MenusModule\Link\Tree\LinkTreeBuilder;
use Pyro\MenusModule\Menu\Contract\MenuInterface;
use Pyro\MenusModule\Menu\Contract\MenuRepositoryInterface;
use Pyro\MenusModule\Type\LinkTypeExtension;

class AjaxLinksController extends AdminController
{

    /**
     * Return an index of existing links.
     *
     * @param LinkTreeBuilder         $treeBuilder
     * @param MenuRepositoryInterface $menus
     * @param null                    $menu
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function index(MenuRepositoryInterface $menus, ExtensionCollection $extensions, $menu = null)
    {
        app('Anomaly\Streams\Platform\View\ViewTemplate')->set('module', app('module.collection')->get('pyro.module.menus'));

        if ( ! $menu) {

            $this->messages->warning('Please choose a menu first.');

            return $this->response->redirectTo('admin/navigation');
        }

        /** @var \Anomaly\Streams\Platform\Ui\Tree\TreeBuilder $treeBuilder */
        $treeBuilder = $this->call('renderTree', compact('menu'));
        $tree        = $treeBuilder->getTreeContent();

        $menu_types = $extensions->search('pyro.module.menus::link_type.*')->enabled();

        /** @var EntryFormBuilder $formBuilder */
        /** @var LinkTypeExtension $linkType */
        $type = $menu_types->first();

        $formBuilder = $this->call('create', compact('menu', 'type'));
        $formBuilder->render();
        $form = $formBuilder->getFormContent();

//        $asset = resolve(Asset::class);
//        $asset->add('menus.js', 'pyro.module.menus::js/menus.js');
//        $asset->add('menus.css', 'pyro.module.menus::css/menus.css');

//        $this->revertRebindAssets();

//        $asset->add('scripts.js', 'pyro.module.menus::js/addon.js', ['webpack:menus:scripts']);
//        app()->platform->addProvider('pyro.menus.MenusServiceProvider');

        resolve(Asset::class)->add('scripts.js', 'pyro.module.menus::js/addon.js', [ 'webpack:menus:scripts' ]);
        $this->setPlatformData($menu, $menu_types);
        return view('module::ajax_links', [ 'tree' => $tree, 'menu_types' => $menu_types, 'form' => $form, 'menu' => $menu ]);
    }

    protected function setPlatformData(string $menuSlug, ExtensionCollection $menuTypes)
    {
        $types = $menuTypes->map(function (LinkTypeExtension $type) {
            $name        = $type->getName();
            $description = $type->getDescription();
            $namespace   = $type->getNamespace();
            $title       = $type->getTitle();
            return array_map('trans', compact('name', 'description', 'namespace', 'title'));
        })->toArray();

        $urls = [
            'tree'   => $this->url->to("admin/menus/links/{$menuSlug}/tree"),
            'create' => $this->url->to("admin/menus/links/{$menuSlug}/form"),
            'edit'   => $this->url->to("admin/menus/links/{$menuSlug}/edit"),
        ];

        $platform = app()->platform;
        $platform->addProvider('pyro.menus.MenusServiceProvider');
        $platform->getData()->set('pyro.menus', compact('types', 'menuSlug', 'urls'));
    }

    protected function call($method, $params = [])
    {
        return app()->call([ $this, $method ], $params);
    }

    protected $originalAssets;

    protected function rebindAssetsForAjax()
    {
        $this->originalAssets = resolve(Asset::class);
        app()->singleton(Asset::class, AjaxAsset::class);
        $assets = resolve(Asset::class);
        $assets->setDirectory(public_path());
        return $assets;
    }

    protected function revertRebindAssets()
    {
        app()->singleton(Asset::class, Asset::class);
        app()->instance(Asset::class, $this->originalAssets);
        return $this->originalAssets;
    }

    public function renderTree(LinkTreeBuilder $treeBuilder, MenuRepositoryInterface $menus, $menu)
    {
        if ($menu instanceof MenuInterface === false) {
            $menu = $menus->findBySlug((string)$menu);
        }

        $treeBuilder->setMenu($menu);
        $treeBuilder->render();
        return $treeBuilder;
    }

    public function getTree($menu)
    {
        $assets = resolve(Asset::class);
        $assets->add('tree', 'streams::js/tree/tree.js');
        /** @var LinkTreeBuilder $treeBuilder */
        $treeBuilder = $this->call('renderTree', compact('menu'));
        $tree        = $treeBuilder->getTreeContent();
        $treeJs      = $assets->content('tree');

        $tree = "{$tree}<script>{$treeJs}</script>";

        return response($tree);
    }

    public function getForm(
        LinkFormBuilder $linkFormBuilder,
        EntryFormBuilder $formBuilder,
        LinkRepositoryInterface $links,
        MenuRepositoryInterface $menus,
        ExtensionCollection $extensions,
        $menu,
        $type,
        $parent = null
    )
    {
        $isPost = request()->method() === 'POST';

        if ($type instanceof LinkTypeExtension === false) {
            /* @var LinkTypeExtension $type */
            $type = $extensions->get($type); //$this->request->get('menu_type'));
        }
        if ($menu instanceof MenuInterface === false) {
            $menu = $menus->findBySlug($menu);
        }
        /* @var LinkInterface $parent */
        if ($parent = $links->find($parent)) {
            $linkFormBuilder->setParent($parent);
        }
        $typeBuilder = $type->builder();
        if ($isPost) {
            $formBuilder->setAjax(true);
            $typeBuilder->setAjax(true);
            $linkFormBuilder->setAjax(true);
        }

        $formBuilder->addForm('type', $typeBuilder);
        $formBuilder->addForm('link', $linkFormBuilder->setType($type)->setMenu($menu));
//        $formBuilder->setAjax(true);
//        $formBuilder->setOption('form_view', 'module::navigation.ajax_form');

        $formBuilder->setOption('wrapper_view', 'pyro.module.core::admin/form/wrapper_view');
        $this->rebindAssetsForAjax();

        if ($isPost) {
            $formBuilder->setAjax(true);
            $formBuilder->render();
            return $formBuilder->getFormResponse();
        }

        $formBuilder->render();
        $content = $formBuilder->getFormContent();
        $content = $this->addFormAssetsToContent($content);
        return $content;
    }

    public function addFormAssetsToContent($content)
    {
        $assets = resolve(Asset::class);
        $js     = $assets->has('scripts.js') ? $assets->content('scripts.js') : '';
        $css    = $assets->has('styles.css') ? $assets->content('styles.css') : '';
        return "
<style type='text/css'>{$css}</style>

{$content}

<script>
(function(){
    var module = {};
    
    {$js}
    ;

}.call());     
 </script>";
    }

    public function getEditForm(
        LinkFormBuilder $linkFormBuilder,
        EntryFormBuilder $formBuilder,
        LinkRepositoryInterface $links,
        MenuRepositoryInterface $menus,
        ExtensionCollection $extensions,
        $slug,
        $id
    )
    {
        $isPost = request()->method() === 'POST';

        /* @var LinkInterface $entry */
        $entry = $links->find($id);

        $type = $entry->getType();

        $formBuilder->addForm('type', $type->builder()->setEntry($entry->getEntry()->getId()));

        $formBuilder->addForm(
            'link',
            $linkFormBuilder->setEntry($id)->setType($entry->getType())->setMenu($menu = $menus->findBySlug($slug))
        );

        $this->rebindAssetsForAjax();

        if ($isPost) {
            $formBuilder->setAjax(true);
            $formBuilder->render();
            return $formBuilder->getFormResponse();
        }

        $formBuilder->render();
        $content = $formBuilder->getFormContent();
        $content = $this->addFormAssetsToContent($content);

        return $content;
    }


    public function create(
        LinkFormBuilder $link,
        EntryFormBuilder $form,
        LinkRepositoryInterface $links,
        MenuRepositoryInterface $menus,
        ExtensionCollection $extensions,
        $menu,
        $type
    )
    {
        if ($type instanceof LinkTypeExtension === false) {
            /* @var LinkTypeExtension $type */
            $type = $extensions->get($type); //$this->request->get('menu_type'));
        }
        if ($menu instanceof MenuInterface === false) {
            $menu = $menus->findBySlug($menu);
        }

        /* @var LinkInterface $parent */
        if ($parent = $links->find($this->request->get('parent'))) {
            $link->setParent($parent);
        }

        $form->addForm('type', $type->builder());
        $form->addForm('link', $link->setType($type)->setMenu($menu));

        $this->breadcrumbs->add($menu->getName(), 'admin/navigation/links/' . $menu->getSlug());

        return $form;
    }


    public function choose(ExtensionCollection $extensions, $menu)
    {
        return view(
            'module::ajax/choose_menu_type',
            [
                'menu_types' => $extensions
                    ->search('pyro.module.menus::link_type.*')
                    ->enabled(),
                'menu'       => $menu,
            ]
        );
    }

}
