<?php

namespace App;

use Anomaly\Streams\Platform\Addon\AddonCollection;
use Anomaly\Streams\Platform\Application\Application;
use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Laradic\Idea\CompletionGenerator;
use Pyro\IdeHelper\Completion\EntryDomainsCompletion;
use Pyro\Platform\Bus\Dispatcher;
use Pyro\Platform\Command\GatherJavascriptData;

class TestCommand extends Command
{
    use DispatchesJobs;

    protected $signature = 'test';

    public function handle(CompletionGenerator $generator)
    {
        $g=$generator->append(EntryDomainsCompletion::class)->generate();

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
        $c = $this->dispatchNow(new GenerateEntryDomainsCompletion('._pyro-completion.php'));

        $this->line('Generated <comment>._pyro-completion.php</comment>');
    }
}
