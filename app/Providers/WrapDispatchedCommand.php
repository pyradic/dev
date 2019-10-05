<?php

namespace App\Providers;

use Closure;
use Pyradic\Platform\Bus\CommandInspector;

class WrapDispatchedCommand
{
    /**
     * @param mixed $command
     * @param Closure $next
     * @return void
     */
    public function handle($command, $next)
    {
        return $next(new CommandInspector($command));
    }
}
