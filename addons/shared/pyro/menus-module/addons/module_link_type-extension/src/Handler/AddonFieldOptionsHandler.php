<?php

namespace Pyro\ModuleLinkTypeExtension\Handler;

use Pyro\AdminTheme\Ui\ControlPanelNavigation;
use Pyro\Select2FieldType\Select2FieldType;

class AddonFieldOptionsHandler
{
    public function handle(Select2FieldType $fieldType, ControlPanelNavigation $navigation)
    {
        $options = [];
        $links   = $navigation->resolve();
        foreach ($links as $link) {
            $options[ $link->title ] = [];
            foreach ($link[ 'children' ] as $child) {
                $options[ $link->title ][ $link->slug . ':' . $child->slug ] = $child->title;
            }
        }

        $fieldType->setOptions($options);
        return [];
    }
}
