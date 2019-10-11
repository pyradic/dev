<?php namespace Examples\Ex1Module;


use Anomaly\Streams\Platform\Addon\AddonServiceProvider;
use Anomaly\Streams\Platform\Addon\Module\ModuleCollection;
use Anomaly\Streams\Platform\Entry\Event\GatherParserData;
use Anomaly\UsersModule\User\Form\UserFormBuilder;
use Examples\Ex1Module\Department\Contract\DepartmentInterface;
use Examples\Ex1Module\Department\Contract\DepartmentRepositoryInterface;
use Examples\Ex1Module\Department\DepartmentModel;
use Examples\Ex1Module\Department\DepartmentRepository;
use Illuminate\Routing\Router;
use Pyro\Platform\Ui\Form\FormUtil;

class Ex1ModuleServiceProvider extends AddonServiceProvider
{
    protected $bindings = [
        DepartmentInterface::class => DepartmentModel::class,
    ];

    protected $singletons = [
        DepartmentRepositoryInterface::class => DepartmentRepository::class,
    ];

    public function register()
    {
        // stream compile entry model template
        $this->app->events->listen(GatherParserData::class, function (GatherParserData $event) {
            $data   = $event->getData();
            $stream = $event->getStream();
            $data->put('template', file_get_contents(__DIR__ . '/Entry/entry.stub'));
            $relations = $data->get('relations');

            if ($stream->getNamespace() === 'users' && $stream->getSlug() === 'users') {
                $with = str_replace('[', "['department'", $data->get('with', '[]'));
                $data->put('with', $with);
                return;
            }
            return;
        });
    }

    public function boot(ModuleCollection $modules, UserFormBuilder $builder)
    {
        /** @var \Anomaly\UsersModule\UsersModule $module */
        $modules->get('anomaly.module.users')->addSection('departments', [
            'title'   => 'examples.module.ex1::section.departments.title',
            'buttons' => [
                'new_department' => [
                    'text' => 'examples.module.ex1::button.new_department',
                ],
            ],
        ]);

        $builder->listen('built', function (UserFormBuilder $builder) {
            FormUtil::addFieldToSection($builder, 'user.tabs.account.fields', [ 'department' ]);
            FormUtil::addFieldToForm($builder, [ 'department' ]);
        });
    }

    // cannot declare routes like this, AddonProvider registerRoutes adds/overrides the 'streams:addon' to $addon->getNamespace()
    // this would result in empty control panel sections
//    protected $routes = [
//        '/admin/users/departments'           => [
//            'as'   => 'examples.module.ex1::departments.index',
//            'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@index',
//        ],
//        '/admin/users/departments/create'    => [
//            'as'   => 'examples.module.ex1::departments.create',
//            'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@create',
//        ],
//        '/admin/users/departments/edit/{id}' => [
//            'as'   => 'examples.module.ex1::departments.edit',
//            'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@edit',
//        ],
//    ];

    public function map(Router $router)
    {
        // need to declare routes like this, As this is not processed by AddonProvider registerRoutes, there will not be a hardcoded 'streams:addon' added
        // and this way the control panel sections for the users-module is shown
        $router->any('/admin/users/departments', [
            'as'   => 'examples.module.ex1::departments.index',
            'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@index',
//            'streams::addon' => 'anomaly.module.users',
        ]);
        $router->any('/admin/users/departments/create', [
            'as'   => 'examples.module.ex1::departments.create',
            'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@create',
//            'streams::addon' => 'anomaly.module.users',
        ]);
        $router->any('/admin/users/departments/edit/{id}', [
            'as'   => 'examples.module.ex1::departments.edit',
            'uses' => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentsController@edit',
//            'streams::addon' => 'anomaly.module.users',
        ]);
    }
}
