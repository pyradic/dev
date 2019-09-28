<?php namespace Examples\Ex1Module;


use Illuminate\Support\Arr;
use Examples\Ex1Module\Department\DepartmentModel;
use Examples\Ex1Module\Department\DepartmentRepository;
use Anomaly\Streams\Platform\Addon\AddonServiceProvider;
use Anomaly\Streams\Platform\Addon\Module\ModuleCollection;
use Examples\Ex1Module\Department\Contract\DepartmentInterface;
use Examples\Ex1Module\Department\Contract\DepartmentRepositoryInterface;

class Ex1ModuleServiceProvider extends AddonServiceProvider
{
    protected $bindings = [
        DepartmentInterface::class => DepartmentModel::class,
    ];

    protected $singletons = [
        DepartmentRepositoryInterface::class => DepartmentRepository::class,
    ];

    protected $routes = [
        '/admin/users/departments'          => [
            'as'             => 'examples.module.ex1::departments.index',
            'uses'           => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentController@index',
            'streams::addon' => 'anomaly.module.users',
        ],
        'admin/users/departments/create'    => [
            'as'             => 'examples.module.ex1::departments.create',
            'uses'           => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentController@create',
            'streams::addon' => 'anomaly.module.users',
        ],
        'admin/users/departments/edit/{id}' => [
            'as'             => 'examples.module.ex1::departments.edit',
            'uses'           => 'Examples\Ex1Module\Http\Controller\Admin\DepartmentController@edit',
            'streams::addon' => 'anomaly.module.users',
        ],
    ];


    public function boot(ModuleCollection $modules)
    {
        /** @var \Anomaly\UsersModule\UsersModule $module */
        $module = $modules->get('anomaly.module.users');
        $module->addSection('departments', Arr::get($this->addon->getSections(), 'departments', []));
    }
}
