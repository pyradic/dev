<?php namespace Pyradic\ExamplesModule;

use Pyradic\ExamplesModule\Department\DepartmentModel;
use Anomaly\Streams\Platform\Addon\AddonServiceProvider;
use Pyradic\ExamplesModule\Department\DepartmentRepository;
use Pyradic\ExamplesModule\Department\Contract\DepartmentRepositoryInterface;

class ExamplesModuleServiceProvider extends AddonServiceProvider
{
    protected $routes = [
        'admin/users/departments'           => 'Pyradic\ExamplesModule\Http\Controller\Admin\DepartmentsController@index',
        'admin/users/departments/create'    => 'Pyradic\ExamplesModule\Http\Controller\Admin\DepartmentsController@create',
        'admin/users/departments/edit/{id}' => 'Pyradic\ExamplesModule\Http\Controller\Admin\DepartmentsController@edit',
    ];

    protected $bindings = [
        ExamplesDepartmentsEntryModel::class => DepartmentModel::class,
    ];

    protected $singletons = [
        DepartmentRepositoryInterface::class => DepartmentRepository::class,
    ];


}
