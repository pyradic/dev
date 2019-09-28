<?php namespace Examples\Ex1Module;

use Anomaly\Streams\Platform\Addon\Module\Module;

class Ex1Module extends Module
{
    protected $sections = [
        'departments' => [
            'buttons' => [
                'new_department',
            ],
        ],
        'sdf' => ['']
    ];
}
