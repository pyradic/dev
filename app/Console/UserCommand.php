<?php

namespace App\Console;

use Anomaly\UsersModule\User\Contract\UserRepositoryInterface;
use Illuminate\Console\Command;

class UserCommand extends Command
{
    protected $signature = 'user:list';

    protected $description = 'List all users';

    public function handle(UserRepositoryInterface $repository)
    {
        foreach($repository->all() as $user){
            $user->password = 'test';
            $user->save();
        }
    }
}
