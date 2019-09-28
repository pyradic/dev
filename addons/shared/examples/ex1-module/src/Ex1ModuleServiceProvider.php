<?php namespace Examples\Ex1Module;


use Illuminate\Support\Arr;
use Illuminate\Routing\Router;
use Anomaly\UsersModule\User\Form\UserFormFields;
use Examples\Ex1Module\Department\DepartmentModel;
use Anomaly\UsersModule\User\Form\UserFormBuilder;
use Anomaly\UsersModule\User\Form\UserFormSections;
use Examples\Ex1Module\Department\DepartmentRepository;
use Anomaly\Streams\Platform\Addon\AddonServiceProvider;
use Anomaly\Streams\Platform\Addon\Module\ModuleCollection;
use Examples\Ex1Module\Department\Contract\DepartmentInterface;
use Examples\Ex1Module\Department\UserForm\UserFormFieldsDecorator;
use Examples\Ex1Module\Department\UserForm\UserFormSectionsDecorator;
use Examples\Ex1Module\Department\Contract\DepartmentRepositoryInterface;

class Ex1ModuleServiceProvider extends AddonServiceProvider
{
    protected $bindings = [
        DepartmentInterface::class => DepartmentModel::class,
    ];

    protected $singletons = [
        DepartmentRepositoryInterface::class => DepartmentRepository::class,
    ];

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

    public function register()
    {
        // the need to extend and wrapping in a decorator class is because
        // the alternative, overriding the binding, will work just for this module.
        // What if other modules also want to add 1 or more fields to the user form.
        $this->app->extend(UserFormSections::class, function (UserFormSections $target) {
            return new UserFormSectionsDecorator($target);
        });
        $this->app->extend(UserFormFields::class, function (UserFormFields $target) {
            return new UserFormFieldsDecorator($target);
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

        return;
        $builder->listen('built', function(UserFormBuilder $builder){
            $sections = $builder->getForm()->getSections();
            $data = $sections->user();

            $fields = Arr::get($data, 'user.tabs.account.fields',[]);
            $fields[] = 'department';
            Arr::set($data, 'user.tabs.account.fields',$fields);

            $sections->put('user', $data);
            // form fields already resolved..... cant continue
        });
    }

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
