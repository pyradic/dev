<?php

namespace Examples\Ex2Module;

use Anomaly\Streams\Platform\Asset\Asset;
use Anomaly\Streams\Platform\Message\MessageBag;
use Anomaly\Streams\Platform\Ui\Breadcrumb\BreadcrumbCollection;
use Anomaly\UsersModule\Role\Contract\RoleRepositoryInterface;
use Anomaly\UsersModule\Role\Permission\PermissionFormBuilder;
use Anomaly\UsersModule\Role\Permission\PermissionFormFields;
use Anomaly\UsersModule\Role\Permission\PermissionFormHandler;
use Anomaly\UsersModule\Role\Permission\PermissionFormSections;
use Illuminate\Contracts\Container\Container;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Str;
use Laradic\Support\Dot;
use Pyradic\Platform\Ui\Form\FormUtil;

class RolePermissionFormBuilder extends PermissionFormBuilder
{
    protected $options = [
        'class'     => 'examples-module-ex2__permission-form',
        'form_view' => 'examples.module.ex2::permission-form'
//        'form_view' => 'examples.module.ex2::per'
    ];

    protected $fields = PermissionFormFields::class;

    protected $sections = PermissionFormSections::class;

    protected $handler = PermissionFormHandler::class;


    public function onReady(RoleRepositoryInterface $roles, BreadcrumbCollection $breadcrumbs, MessageBag $messages, Redirector $redirect)
    {

        return parent::onReady($roles, $breadcrumbs, $messages, $redirect);
    }

    public function onBuilt(RolePermissionFormBuilder $builder, Container $container, Asset $assets)
    {
//        FormUtil::modifySectionData($builder, function (Dot $sections) {
//            $sections->map(function ($section) {
//                $section[ 'view' ] = 'examples.module.ex2::permission-form-section';
//                return $section;
//            });
//        });
        $data = collect($this->getSections())->map(function ($section, $key) use ($builder) {
            $addon[ 'key' ] = $key;
            $addon[ 'label' ]     = trans($section[ 'title' ]);
            $addon[ 'streams' ]   = collect($section[ 'fields' ])->map(function ($fieldSlug) use ($builder) {
                $field       = $builder->getFormField($fieldSlug);
                $value       = $field->getValue();
                $fieldKey    = str_replace('_', '.', $fieldSlug);
                $permissions = [];
                foreach ($field->config('options') as $key => $label) {
                    $label   = trans($label);
                    $enabled = in_array($key, $value, true);

                    $permission    = Str::replaceFirst($fieldKey . '.', '', $key);
                    $permissions[] = compact('label', 'enabled', 'key', 'permission');
                }

                return [ 'permissions' => $permissions, 'label' => $field->getLabel(), 'field' => $fieldSlug, 'key' => $fieldKey ];
            })->toArray();
            return $addon;
        })->values()->toArray();
        $assets->add('scripts.js', 'examples.module.ex2::js/addon.js', [ 'webpack:ex2:scripts' ]);
        app()->platform->addProvider('pyro.ex2.PermissionFormServiceProvider');
        app()->platform->getData()->set('ex2.permissions', $data);
        $this->addFormData('data', $data);
    }

}
