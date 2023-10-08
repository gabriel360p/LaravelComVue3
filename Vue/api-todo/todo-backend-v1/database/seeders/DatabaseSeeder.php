<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Task;
use App\Models\Categorie;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        
        $cat1 = Categorie::create([
            'name'=>"Escola"
        ]);

        $task1 = Task::create([
            'title'=>"Trabalho da Escola",
            'description'=>"Hugo pediu pra fazer um design",
            'categorie_name'=>$cat1->name,
        ]);

    }
}
