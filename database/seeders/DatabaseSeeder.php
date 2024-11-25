<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(){
    $this->call([
        SkillsTableSeeder::class,
        CourseTableSeeder::class,
        InnovationsTableSeeder::class,
        Type_userSeeder::class,
        LaboratoriesSeeder::class,
    ]);
}
}



