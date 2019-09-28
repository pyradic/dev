<?php namespace Examples\Ex1Module\Department\UserForm;

use Anomaly\UsersModule\User\UserModel;
use Anomaly\UsersModule\User\Form\UserFormFields;
use Anomaly\UsersModule\User\Form\UserFormBuilder;

/**
 * Class UserFormFields
 *
 * @link          http://pyrocms.com/
 * @author        PyroCMS, Inc. <support@pyrocms.com>
 * @author        Ryan Thompson <ryan@pyrocms.com>
 */
class UserFormFieldsDecorator extends UserFormFields
{
    protected $target;

    public function __construct(UserFormFields $target)
    {

        $this->target = $target;
    }

    /**
     * Handle the form fields.
     *
     * @param UserFormBuilder $builder
     */
    public function handle(UserFormBuilder $builder, UserModel $users)
    {
        call_user_func_array([ $this->target, 'handle' ], func_get_args());
        $builder->addFields([ 'department' ]);
    }
}
