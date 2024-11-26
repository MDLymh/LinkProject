<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'notifications';

    protected $fillable = [
        'type',
        'id_user_leader',
        'id_user_request',
        'id_project',
        'content'
    ];

    public function leader(){
        return $this->belongsTo(User::class, 'id_user_leader');
    }

    public function requester(){
        return $this->belongsTo(User::class, 'id_user_request');
    }

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }

    public static function getNotifications($isLeader,$userId,$projectId):array{
        if($isLeader){
            return Notification::select('id','content','type as notificationType',
                                        'id_user_request as studentId','created_at as created')
                                 ->where('id_user_leader',$userId)
                                 ->where('id_project',$projectId)
                                 ->get()
                                 ->toArray();
        }else{
            return Notification::select('id','content','type as notificationType',
                                        'id_user_request as studentId','created_at as created')
                                 ->where('id_user_request',$userId)
                                 ->where('id_project',$projectId)
                                 ->whereNot('type',1)
                                 ->get()
                                 ->toArray();
        }
    }
    public static function updateC($notificationId,$admited){
        $noti = Notification::find($notificationId);
        if($noti->id_user_leader == Auth::id() && Project::getLeader($noti->id_project)== Auth::id()){
            if($admited){
                DB::table('project_users')->insert([
                    [
                        'user_id'=> $noti->id_user_request,
                        'project_id'=> $noti->id_project,
                    ]
                ]);
                $user = User::find($noti->id_user_request);
                $project = Project::find($noti->id_project);
                Notification::where('id_user_request',$noti->id_user_request)
                                ->where('type',1)
                                ->delete();
                Notification::create([
                    'type'=>2,
                    'id_user_leader'=> $project->leader,
                    'id_user_request'=>$user->id,
                    'id_project' =>$project->id,
                    'content' => "Se acepto al usuario {$user->name} en el proyecto {$project->project_name}"

                ]);

            }else{
                $user = User::find($noti->id_user_request);
                $project = Project::find($noti->id_project);
                $noti->delete();
                Notification::create([
                    'type'=>2,
                    'id_user_leader'=> $project->leader,
                    'id_user_request'=>$user->id,
                    'id_project' =>$project->id,
                    'content' => "Se rechazo al usuario {$user->name} en el proyecto {$project->project_name}"

                ]);
            }
        }
    }

    public static function createJoinRequest($userId,$projectId,$cancel){
        if(!$cancel){
            $project = Project::find($projectId);
            $user = User::find($userId);
            Notification::create([
                'type'=>1,
                'id_user_leader'=>$project->leader,
                'id_user_request'=>$user->id,
                'id_project'=>$project->id,
                'content'=> "El usuario {$user->name} {$user->surname1} {$user->surname2} ha solisitado unirse a {$project->project_name}",
            ]);
        }else{
            Notification::where('id_user_request',$userId)
                          ->where('id_project',$projectId)
                          ->delete();
        }
    }
}
