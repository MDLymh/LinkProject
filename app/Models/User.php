<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey = 'id_user';
    
    protected $fillable = [
        'code',
        'name',
        'is_active',
        'user_type',
        'profile_picture'
    ];

    public function consultant(){
        return $this->hasMany(Consultant::class, 'id_user');
    }

    public function student(){
        return $this->hasMany(Student::class, 'id_user');
    }

    public function notificationsSent(){
        return $this->hasMany(Notification::class, 'id_user_request');
    }

    public function notificationsReceived(){
        return $this->hasMany(Notification::class, 'id_user_leader');
    }

    public function skills(){
        return $this->belongsToMany(Skill::class, 'student_skills', 'id_user', 'id_skill');
    }
}

