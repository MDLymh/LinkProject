<?php

namespace App\Models;

use App\Notifications\VerifyEmailNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\relations\Project_User;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\table;

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
        'about',
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
        if(!$info['isStudent']){
            $info['id_project']=Project::consultantProject();
        }
        return $info;
    }

    public static function getProfile($userId):array{
        $info = [];
        $user = User::getInfo($userId);
        if($user['isStudent']){
            $info = array_merge(User::select(DB::raw("CONCAT(name, ' ', surname1, ' ', surname2) as name")
                                            ,'email','about as about_me','profile_picture as profilePicture')
                                        ->where('id',$userId)->first()->toArray());
            $info = array_merge($info, Student::select('c.name as carrer','lab.name as laboratory')
                                                 ->join('courses as c','students.id_course','=','c.id')
                                                 ->join('laboratories as lab','students.laboratory_id','=','lab.id')
                                                 ->where('id_user',$userId)
                                                 ->first()->toArray());

            $info['skills'] = DB::table('student_skills as ss')
                                ->select('s.id','s.skill_name as skill')
                                ->join('skills as s','s.id','=','ss.id_skill')
                                ->where('id_user',$userId)->get()->toArray();
        }else{
            $info = array_merge(User::select(DB::raw("CONCAT(name, ' ', surname1, ' ', surname2) as name")
                                            ,'email','about as about_me','profile_picture as profilePicture')
                                        ->where('id',$userId)->first()->toArray());
            $info['carrer'] ='N/A';
            $info['laboratory'] ='N/A';

            $info['skills'] = [];
        }

        return $info;
    }
}

