<?php namespace Examples\Ex2Module;

use Pyradic\Platform\Addon\AddonServiceProvider;

class Ex2ModuleServiceProvider extends AddonServiceProvider
{

    protected $bindings = [
        \Anomaly\UsersModule\User\Permission\PermissionFormBuilder::class => UserPermissionFormBuilder::class,
        \Anomaly\UsersModule\Role\Permission\PermissionFormBuilder::class => RolePermissionFormBuilder::class,
    ];


}
