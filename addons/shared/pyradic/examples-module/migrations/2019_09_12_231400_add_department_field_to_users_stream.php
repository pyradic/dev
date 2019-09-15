<?php

use Pyradic\ExamplesModule\Department\DepartmentModel;
use Anomaly\Streams\Platform\Database\Migration\Migration;

class AddDepartmentFieldToUsersStream extends Migration
{
    protected $namespace = 'users';

    protected $stream = [
        'slug' => 'users',
    ];

    protected $delete = false;

    protected $assignments = [
        'available_departments',
        'current_department',
    ];

    /**
     * The addon fields.
     *
     * @var array
     */
    protected $fields = [
        'available_departments' => [
            'type'   => 'anomaly.field_type.multiple',
            'config' => [
                'related' => DepartmentModel::class,
            ],
        ],
        'current_department'    => [
            'type'   => 'anomaly.field_type.multiple',
            'config' => [
                'related' => DepartmentModel::class,
            ],
        ],
    ];

}
