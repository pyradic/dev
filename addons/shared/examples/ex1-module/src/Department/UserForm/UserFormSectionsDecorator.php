<?php namespace Examples\Ex1Module\Department\UserForm;

use Illuminate\Support\Arr;
use Anomaly\UsersModule\User\UserModel;
use Anomaly\UsersModule\User\Form\UserFormBuilder;
use Anomaly\UsersModule\User\Form\UserFormSections;

/**
 * Class UserFormSections
 *
 * @link          http://pyrocms.com/
 * @author        PyroCMS, Inc. <support@pyrocms.com>
 * @author        Ryan Thompson <ryan@pyrocms.com>
 */
class UserFormSectionsDecorator extends UserFormSections
{
    protected $target;

    public function __construct(UserFormSections $target)
    {
        $this->target = $target;
    }


    public function handle(UserFormBuilder $builder, UserModel $users)
    {
        call_user_func_array([ $this->target, 'handle' ], func_get_args());
        $sections = $builder->getSections();
        $fields   = Arr::get($sections, 'user.tabs.account.fields', []);
        $fields[] = 'department';
        Arr::set($sections, 'user.tabs.account.fields', $fields);
        $builder->setSections($sections);
    }
}
