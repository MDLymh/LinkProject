<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('courses')->insert([
            ['name' => 'Licenciatura en Física'],
            ['name' => 'Licenciatura en Matemáticas'],
            ['name' => 'Licenciatura en Química'],
            ['name' => 'Químico Farmacéutico Biólogo'],
            ['name' => 'Ingeniería en Ciencia de Materiales'],
            ['name' => 'Ingeniería Civil'],
            ['name' => 'Ingeniería en Alimentos y Biotecnología'],
            ['name' => 'Ingeniería en Topografía Geomática'],
            ['name' => 'Ingeniería Industrial'],
            ['name' => 'Ingeniería Mecánica Eléctrica'],
            ['name' => 'Ingeniería Química'],
            ['name' => 'Ingeniería en Logística y Transporte'],
            ['name' => 'Ingeniería Informática'],
            ['name' => 'Ingeniería Biomédica'],
            ['name' => 'Ingeniería en Computación'],
            ['name' => 'Ingeniería en Electromovilidad y Autotrónica'],
            ['name' => 'Ingeniería en Electrónica y Sistemas Inteligentes'],
            ['name' => 'Ingeniería Fotónica'],
            ['name' => 'Ingeniería en Mecatrónica Inteligente'],
            ['name' => 'Ingeniería Robótica']
        ]);
    }
}
