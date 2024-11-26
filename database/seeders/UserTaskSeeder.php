<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tasks')->insert([
            [
                'id_project'      => 1,
                'id_Asigned_User' => 1,
                'title' => 'Diseño de vistas',
                'description' => 'Diseño de vistas',
                'start_date' => now(),
                'end_date' => now(),
                'status' => 1,
            ]
        ]);
    }
}
