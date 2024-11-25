<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'notifications';

    protected $fillable = [
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
            return Notification::select('id','content')
                                 ->where('id_user_leader',$userId)
                                 ->where('id_project',$projectId)
                                 ->get()
                                 ->toArray();
        }else{
            return Notification::select('id','content')
                                 ->where('id_user_request',$userId)
                                 ->where('id_project',$projectId)
                                 ->get()
                                 ->toArray();
        }
    }
}
