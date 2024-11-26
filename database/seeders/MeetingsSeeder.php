<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MeetingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
{
    DB::table('meetings')->insert([
        [
            'id_project' => 1,
            'is_active' => true,
            'schedule' => \Carbon\Carbon::createFromFormat('Y-m-d h:i a', '2024-11-29 12:00 p.m.')->format('Y-m-d H:i:s'),
            'description' => "Reunion con asesor"
        ],
        [
            'id_project' => 1,
            'is_active' => true,
            'schedule' => \Carbon\Carbon::createFromFormat('Y-m-d h:i a', '2024-12-01 2:00 p.m.')->format('Y-m-d H:i:s'),
            'description' => "Revision de avance y correciones."
        ],
        [
            'id_project' => 1,
            'is_active' => true,
            'schedule' => \Carbon\Carbon::createFromFormat('Y-m-d h:i a', '2024-12-05 2:00 p.m.')->format('Y-m-d H:i:s'),
            'description' => "Revision de diagramas de flujo."
        ],
    ]);
}

}
