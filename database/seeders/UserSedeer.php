<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSedeer extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Luis yael',
                'surname1' => 'Hernandez',
                'surname2' => 'Hernandez',
                'is_active' => true,
                'type' => 2,
                'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate saepe laudantium harum dignissimos corporis rerum voluptas. Odit excepturi saepe.',
                'email' => "hluisyael@gmail.com",
                'email_verified_at' => "2024-11-25 20:10:55",
                'password'=>'$2y$12$yoJHqo6c73Dez3I83d92E.vlwGKnBibtTqB/oRE1oDffM1rXdbTLe',
                'remember_token' => null,
                'created_at'=> "2024-11-25 20:10:49",
                'updated_at'=> "2024-11-25 20:10:49",

            ],
            [
                'name' => 'Luis yael',
                'surname1' => 'Hernandez',
                'surname2' => 'Hernandez',
                'is_active' => true,
                'type' => 1,
                'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate saepe laudantium harum dignissimos corporis rerum voluptas. Odit excepturi saepe.',
                'email' => "correo@correo.com",
                'email_verified_at' => "2024-11-25 20:10:55",
                'password'=>'$2y$12$yoJHqo6c73Dez3I83d92E.vlwGKnBibtTqB/oRE1oDffM1rXdbTLe',
                'remember_token' => null,
                'created_at'=> "2024-11-25 20:10:49",
                'updated_at'=> "2024-11-25 20:10:49",

            ],
        ]);

        DB::table('consultants')->insert([
            [
                'id_user'=>2,
                'school_division'=>'Fisica',
                'short_experience_description'=>'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt a tenetur labore! Libero voluptas vitae assumenda fuga ',
            ]
        ]);


        DB::table('projects')->insert([
            [
                'id_consultant'=>1,
                'area' =>'lorem lorem',
                'max_members'=> 3,
                'required_knowledge'=> 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum exercitationem repellendus omnis accusantium voluptates non adipisci illum eos facere autem quasi tempora velit nihil hic optio',
                'description'=> 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum exercitationem repellendus omnis accusantium voluptates non adipisci illum eos facere autem quasi tempora velit nihil hic optio',
                'status'=>'active',
                'creation_date' => now(),
                'project_name' => 'Link Project',
                'innovation_types'=>'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum exercitationem repellendus omnis accusantium voluptates',
                'leader' => 1

            ]
        ]);

        DB::table('students')->insert([
            [
                'id' => '215408324',
                'id_user' => 1,
                'id_course' => 13,
                'laboratory_id' => 1,
                'id_project' => 1,
                'current_lab'=> 1,
                'created_at'=> "2024-11-25 20:10:49",
                'updated_at'=> "2024-11-25 20:10:49",

            ],
        ]);

        DB::table('student_skills')->insert([
            ["id_user"=>1,"id_skill"=>1],
            ["id_user"=>1,"id_skill"=>2],
            ["id_user"=>1,"id_skill"=>3],
            ["id_user"=>1,"id_skill"=>4],
            ["id_user"=>1,"id_skill"=>5],
        ]);

        DB::table('project_users')->insert([
            [
                'user_id'=>1,
                'project_id'=>1,
            ]
        ]);
    }
}
