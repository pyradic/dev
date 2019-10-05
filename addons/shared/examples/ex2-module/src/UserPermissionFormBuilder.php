<?php

namespace Examples\Ex2Module;

use Anomaly\Streams\Platform\Message\MessageBag;
use Anomaly\Streams\Platform\Ui\Breadcrumb\BreadcrumbCollection;
use Anomaly\UsersModule\Role\Contract\RoleRepositoryInterface;
use Anomaly\UsersModule\User\Contract\UserRepositoryInterface;
use Illuminate\Routing\Redirector;

class UserPermissionFormBuilder extends \Anomaly\UsersModule\User\Permission\PermissionFormBuilder
{
    public function onReady(UserRepositoryInterface $users, RoleRepositoryInterface $roles, BreadcrumbCollection $breadcrumbs, MessageBag $messages, Redirector $redirect)
    {
        return parent::onReady($users, $roles, $breadcrumbs, $messages, $redirect);
    }

}
