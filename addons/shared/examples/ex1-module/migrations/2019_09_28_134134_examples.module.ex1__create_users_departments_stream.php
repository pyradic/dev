<?php

use Anomaly\Streams\Platform\Database\Migration\Migration;

class ExamplesModuleEx1CreateUsersDepartmentsStream extends Migration
{
    protected $namespace = 'users';

    protected $delete = true;

    protected $stream = [
        'slug'         => 'department',
        'title_column' => 'name',
        'translatable' => true,
        'versionable'  => false,
        'trashable'    => true,
        'searchable'   => true,
        'sortable'     => false,
    ];

    protected $assignments = [
        'name'         => [
            'translatable' => true,
            'required'     => true,
        ],
        'slug'         => [
            'unique'   => true,
            'required' => true,
        ],
        'display_name' => [
            'translatable' => true,
        ],
        'description'  => [
            'translatable' => true,
        ],
        'enabled',
    ];

}
