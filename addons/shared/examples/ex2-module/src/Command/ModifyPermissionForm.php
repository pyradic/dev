<?php

namespace Examples\Ex2Module\Command;

use Anomaly\Streams\Platform\Asset\Asset;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class ModifyPermissionForm
{
    /** @var \Anomaly\Streams\Platform\Ui\Form\FormBuilder */
    protected $builder;

    public function __construct($builder)
    {
        $this->builder = $builder;
    }

    /**
     * @param \Illuminate\Contracts\Container\Container $container
     * @param \Anomaly\Streams\Platform\Asset\Asset     $assets
     *
     * @return void
     * @throws \Exception
     */
    public function handle(Container $container, Asset $assets)
    {
        $this->builder->setFormOption('class', 'examples-module-ex2__permission-form');
        $this->builder->setFormOption('form_view', 'examples.module.ex2::permission-form');

        $data = collect($this->builder->getSections())->map(function ($section, $key) {
            $addon[ 'key' ]     = $key;
            $addon[ 'label' ]   = trans($section[ 'title' ]);
            $addon[ 'streams' ] = collect($section[ 'fields' ])->map(function ($fieldSlug) {
                $field       = $this->builder->getFormField($fieldSlug);
                $value       = Arr::wrap($field->getValue());
                $fieldKey    = str_replace('_', '.', $fieldSlug);
                $permissions = [];
                foreach ($field->config('options') as $key => $label) {
                    $label   = trans($label);
                    $enabled = in_array($key, $value, true);

                    $permission    = Str::replaceFirst($fieldKey . '.', '', $key);
                    $permissions[] = compact('label', 'enabled', 'key', 'permission');
                }

                return [ 'permissions' => $permissions, 'label' => $field->getLabel(), 'field' => $fieldSlug, 'key' => $fieldKey ];
            })->toArray();
            return $addon;
        })->values()->toArray();
        $assets->add('scripts.js', 'examples.module.ex2::js/addon.js', [ 'webpack:ex2:scripts' ]);
        app()->platform->addProvider('pyro.ex2.Ex2ServiceProvider');
        app()->platform->getData()->set('ex2.permissions', $data);
        $this->builder->addFormData('data', $data);
    }

}
