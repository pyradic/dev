<?php

namespace App;

use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Pyradic\IdeHelper\Command\GenerateCompletion;
use Pyradic\Platform\Command\GatherJavascriptData;
use Anomaly\Streams\Platform\Addon\AddonCollection;
use Anomaly\Streams\Platform\Application\Application;
use Pyradic\IdeHelper\Command\ProcessAddonServiceProvider;

class TestCommand extends Command
{
    use DispatchesJobs;
    protected $signature = 'test';

    public function handle(AddonCollection $collection, Application  $application)
    {

        $data = $this->dispatchNow(new GatherJavascriptData());
//        $this->dispatchNow(new ProcessAddonServiceProvider());
//        Request::isMethod('GET')
        $c = $this->dispatchNow(new GenerateCompletion('._pyro-completion.php'));

        return;
    }
}
