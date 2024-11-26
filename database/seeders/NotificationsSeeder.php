<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotificationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('notifications')->insert([
            [
                'type'=>1,
                'id_user_leader'=>1,
                'id_user_request'=>1,
                'id_project'=>1,
                'content'=>'Alumno Pepito Carrera Ing. Computacion. \nSolicitar unirse a proyecto.',
                'created_at'=>now(),
            ],
            [
                'type'=>2,
                'id_user_leader'=>1,
                'id_user_request'=>1,
                'id_project'=>1,
                'content'=>'Reunion con asesor. Requiere ver la justificacion del proyecto.',
                'created_at'=>now(),
            ]
        ]);
    }
}
