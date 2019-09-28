<?php

use Examples\Ex1Module\Department\DepartmentModel;
use Anomaly\Streams\Platform\Database\Migration\Migration;

class ExamplesModuleEx1CreateUsersFields extends Migration
{

    protected $namespace = 'users';

    /**
     * The addon fields.
     *
     * @var array
     */
    protected $fields = [
        'name'         => 'anomaly.field_type.text',
        'slug'         => [
            'type'   => 'anomaly.field_type.slug',
            'config' => [
                'slugify' => 'name',
                'type'    => '_',
            ],
        ],
        'description'  => 'anomaly.field_type.text',
        'display_name' => 'anomaly.field_type.text',
        'activated'    => 'anomaly.field_type.boolean',

        'department'    => [
            'type'   => 'anomaly.field_type.relationship',
            'config' => [
                'related' => DepartmentModel::class,
            ],
        ],
    ];

}
