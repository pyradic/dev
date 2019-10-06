<?php

namespace App;

use Anomaly\Streams\Platform\Addon\AddonCollection;
use Anomaly\Streams\Platform\Application\Application;
use Examples\Ex2Module\RolePermissionFormBuilder;
use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Pyradic\IdeHelper\Command\GenerateCompletion;
use Pyradic\Platform\Bus\Dispatcher;
use Pyradic\Platform\Command\GatherJavascriptData;

class TestCommand extends Command
{
    use DispatchesJobs;

    protected $signature = 'test';

    public function handle(RolePermissionFormBuilder $builder)
    {
        $data = $builder->build(2)->getFormData()->toJson();
        return;
    }

    public function handle2(AddonCollection $collection, Application $application)
    {
        Dispatcher::after(GatherJavascriptData::class, function ($command, $inspect) {
            return false;
        });
        $data = $this->dispatchNow(new GatherJavascriptData());
//        $this->dispatchNow(new ProcessAddonServiceProvider());
//        Request::isMethod('GET')
        $c = $this->dispatchNow(new GenerateCompletion('._pyro-completion.php'));

        $this->line('Generated <comment>._pyro-completion.php</comment>');
    }
}
