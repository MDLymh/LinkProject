<?php

namespace App\Models;

<<<<<<< HEAD
use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
=======
>>>>>>> PalmaDB
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

<<<<<<< HEAD
class User extends Authenticatable implements MustVerifyEmail
=======
class User extends Model
>>>>>>> PalmaDB
{
    use HasFactory;

    protected $table = 'users';
    protected $primaryKey = 'id_user';
    
    protected $fillable = [
        'code',
        'name',
<<<<<<< HEAD
        'email',
        'password',
        'remember_token'
=======
        'is_active',
        'user_type',
        'profile_picture'
>>>>>>> PalmaDB
    ];

    public function consultant(){
        return $this->hasOne(Consultant::class, 'id_user');
    }

    public function student(){
        return $this->hasOne(Student::class, 'id_user');
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


    public function sendEmailVerificationNotification(){
        $this->notify(new VerifyEmailNotification($this));
    }
}

