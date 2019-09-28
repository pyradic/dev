<?php

namespace App\Providers;

use App\TestCommand;
use App\Pydoc\PydocServiceProvider;
use Illuminate\Support\ServiceProvider;
use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

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
    }
}
