<?php

use Anomaly\Streams\Platform\Database\Migration\Migration;

class PyradicModuleExamplesCreateExamplesFields extends Migration
{

    /**
     * The addon fields.
     *
     * @var array
     */
    protected $fields = [
        'name' => 'anomaly.field_type.text',
        'slug' => [
            'type' => 'anomaly.field_type.slug',
            'config' => [
                'slugify' => 'name',
                'type' => '_'
            ],
        ],
        'roles'                      => [
            'type'   => 'anomaly.field_type.multiple',
            'config' => [
                'related' => RoleModel::class,
            ],
        ],
    ];

}
