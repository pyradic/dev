<?php namespace Examples\Ex2Module;

use Anomaly\Streams\Platform\Addon\Module\Module;

class Ex2Module extends Module
{

    /**
     * The navigation display flag.
     *
     * @var bool
     */
    protected $navigation = false;

    /**
     * The addon icon.
     *
     * @var string
     */
    protected $icon = 'fa fa-puzzle-piece';

    /**
     * The module sections.
     *
     * @var array
     */
    protected $sections = [];

}
