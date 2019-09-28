<?php

namespace App\Providers;

use App\TestCommand;
use App\Pydoc\PydocServiceProvider;
use Illuminate\Contracts\View\View;
use Illuminate\Support\ServiceProvider;
use Anomaly\Streams\Platform\Asset\Asset;
use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider;
use Anomaly\Streams\Platform\View\Event\TemplateDataIsLoading;

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
        $this->app->config->push('streams::addons.directories', base_path('examples/ex1-module'));
        $this->app->register(PydocServiceProvider::class);
        $this->app->register(IdeHelperServiceProvider::class);
        $this->app->singleton('command.test', TestCommand::class);
        $this->commands([ 'command.test' ]);

        $this->app->events->listen(TemplateDataIsLoading::class, function(TemplateDataIsLoading $event){
            $t = $event->getTemplate();
            $assets = $this->app->make('Anomaly\Streams\Platform\Asset\Asset');
            $assets->add('styles.css', 'app::fix.css');
            return ;
        });
        $this->app->events->listen('composing:*', function($name, $views){
            $asset = $this->app->make('Anomaly\Streams\Platform\Asset\Asset');
            $a = func_get_args();
            return;
        });
    }
}
