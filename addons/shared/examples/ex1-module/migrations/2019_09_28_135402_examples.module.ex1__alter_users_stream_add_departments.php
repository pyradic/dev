<?php

use Anomaly\Streams\Platform\Database\Migration\Migration;

class ExamplesModuleEx1AlterUsersStreamAddDepartments extends Migration
{

    protected $namespace = 'users';

    protected $stream = [
        'slug' => 'users',
    ];

    protected $delete = false;

    protected $assignments = [
        'department',
    ];

}
