<?php

namespace App\Providers;

use Anomaly\Streams\Platform\Asset\Asset;
use Anomaly\Streams\Platform\View\Event\TemplateDataIsLoading;
use App\Console\UserCommand;
use App\Pydoc\PydocServiceProvider;
use App\TestCommand;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Asset $asset)
    {
        $asset->addPath('app', __DIR__);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('command.user', UserCommand::class);
        $this->app->config->push('streams::addons.directories', base_path('examples/ex1-module'));
        $this->app->register(PydocServiceProvider::class);
        $this->app->singleton('command.test', TestCommand::class);
        $this->commands([ 'command.test', 'command.user' ]);

        $this->app->events->listen(TemplateDataIsLoading::class, function (TemplateDataIsLoading $event) {
            $t      = $event->getTemplate();
            $assets = $this->app->make('Anomaly\Streams\Platform\Asset\Asset');
            $assets->add('styles.css', 'app::fix.css');
            return;
        });
        $this->app->events->listen('composing:*', function ($name, $views) {
            $asset = $this->app->make('Anomaly\Streams\Platform\Asset\Asset');
            $a     = func_get_args();
            return;
        });
//
//        $this->app->afterResolving(Dispatcher::class, function(Dispatcher $dispatcher){
//            $dispatcher->pipeThrough([WrapDispatchedCommand::class]);
//            return $dispatcher;
//        });

    }
}
