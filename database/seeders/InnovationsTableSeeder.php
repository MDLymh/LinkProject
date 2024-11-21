<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InnovationsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('innovations')->insert([
            ['innovation_name' => 'Innovación Radical'],
            ['innovation_name' => 'Innovación Incremental'],
            ['innovation_name' => 'Innovación Disruptiva'],
            ['innovation_name' => 'Innovación de Productos / Servicios'],
            ['innovation_name' => 'Innovación en los Procesos de Producción'],
            ['innovation_name' => 'Innovación Tecnológica']
        ]);
    }
}