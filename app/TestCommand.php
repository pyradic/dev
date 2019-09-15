<?php

namespace App;

use Illuminate\Console\Command;

class TestCommand extends Command
{
    protected $signature = 'test';

    public function handle()
    {
        $globs = ['core/*/*', '!core/pyrocms/accelerant-theme'];
        $this->line('test');
        return;
    }

    protected function generateStreamDocs($addon, $stream)
    {
        app()->make();

    }
}
