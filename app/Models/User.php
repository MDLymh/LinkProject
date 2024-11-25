<?php

namespace App\Models;

use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\relations\Project_User;

class User extends Authenticatable implements MustVerifyEmail{

    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'surname1',
        'surname2',
        'code',
        'is_active',
        'type',
        'profile_picture',
        'email',
        'password',
        'remember_token',
        'profile_picture'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function sendEmailVerificationNotification(){
        $this->notify(new VerifyEmailNotification($this));
    }

    public static function getInfo($userId){
        $info = [];
        $info = array_merge(User::select('id','name as userName')->first()->toArray());
        $result = Project_User::select('project_id as id_project')
                    ->where('user_id', $userId)
                    ->first();
        $info = array_merge($info, $result ? $result->toArray() : ['id_project'=>-1]);
        if($info['id_project']>0){
            $info['isLeader'] = Project::getLeader($info['id_project']) == $userId;
        }else{
            $info['isLeader'] =false;
        }
        $info['isStudent'] = Student::isStudent($userId);
        return $info;
    }
}

