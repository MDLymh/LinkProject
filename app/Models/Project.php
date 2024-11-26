<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'id_consultant',
        'area',
        'max_members',
        'required_knowledge',
        'description',
        'status',
        'leader',
        'creation_date',
        'photo',
        'project_name',
        'innovation_types'
    ];

    public function consultant(){
        return $this->belongsTo(Consultant::class, 'id_consultant');
    }

    public function tasks(){
        return $this->hasMany(Task::class, 'id_project');
    }

    public function meetings(){
        return $this->hasMany(Meeting::class, 'id_project');
    }

    public function notifications(){
        return $this->hasMany(Notification::class, 'id_project');
    }

    public static function getLeader($projectId):int{
        $result = Project::select('leader')->where('id',$projectId)->first();

        return $result?$result->leader:false;
    }
    public static function getMembers($projectId):array{
        $members = DB::table('project_users as ps')
                        ->join('users as u','ps.user_id','=','u.id')
                        ->join('students as s','s.id_user','=','u.id')
                        ->join('courses as c','c.id','=','s.id_course')
                        ->join('laboratories as lab','lab.id','=','s.laboratory_id')
                        ->select('u.id',DB::raw("CONCAT(u.name, ' ', surname1, ' ', surname2) as name"),
                                 DB::raw("CONCAT(u.name, ' ', surname1, ' ', surname2) as student_name"),
                                 'c.name as career','lab.name as lab','u.profile_picture as picture')
                        ->where('project_id',$projectId)
                        ->get()
                        ->toArray();
        return $members;
    }
    public static function getInfo($userId):array{
        $user = User::getInfo($userId);
        $project = Project::where('id',$user['id_project'])
                            ->select('id as id_project','project_name','id_consultant','description','innovation_types as innovation')
                            ->first()
                            ->toArray();
        $project['members']= Project::getMembers($user['id_project']);
        $consultant = Consultant::where('consultants.id',$project['id_consultant'])
                                    ->join('users as u', 'consultants.id_user', '=', 'u.id')
                                    ->select(DB::raw("CONCAT(u.name, ' ', surname1, ' ', surname2) as assesor"))
                                    ->first()
                                    ->toArray();
        return array_merge($project,$consultant);
    }
    public static function getNumOfMembers($projectId):int{
        return DB::table('project_users')->where('project_id',$projectId)
                                  ->count();
    }

    public static function leave($userId){
        $user = User::getInfo($userId);
        if($user['isLeader']){
            $project = Project::find($user['id_project']);
            if(Project::getNumOfMembers($user['id_project'])>1){
                $nextLeader = DB::table('project_users')->whereNot('user_id',$userId)
                    ->where('project_id',$user['id_project'])
                    ->select('user_id')
                    ->first();
                $project->leader = $nextLeader->user_id;
                $project->save();
            }else{
                $project->delete();
            }
        }

        if(Auth::id() ==$userId){
            DB::table('project_users')->where('user_id',$userId)
                    ->where('project_id',$user['id_project'])
                    ->delete();
        }
    }
    public static function kickUser($userId){
        $user = User::getInfo(Auth::id());
        if(Project::getLeader($user['id_project']) == Auth::id()){
            if(Auth::id()== $userId){
                DB::table('project_users')->where('user_id',$userId)
                    ->where('project_id',$user['id_project'])
                    ->delete();
            }else{
                Project::leave($userId);
            }
        }
    }

    public static function consultantProject(){

        $result = Project::join('consultants as c','projects.id_consultant','=','c.id')
                            ->select('projects.id')
                            ->where('c.id_user', 2)->first()->toArray();
        return $result?$result['id']:-1;
    }

    public static function getAllProjects(){
        $userId = Auth::id();
        $projects = Project::join('users as u', 'projects.leader', '=', 'u.id')
                            ->join('students as s', 'u.id', '=', 's.id_user')
                            ->join('laboratories as lab', 's.laboratory_id', '=', 'lab.id')
                            ->select(
                                'projects.id',
                                'projects.project_name',
                                'projects.description as project_description',
                                'lab.name as current_lab',
                                'projects.required_knowledge as request_knowledge',
                                'projects.max_members','projects.id as labId',
                                DB::raw('(select count(*) from project_users where project_users.project_id = projects.id) as members'),
                                DB::raw("(select count(*) > 0 from notifications where id_user_request = {$userId} and id_project = projects.id) as requested")
                            )
                            ->get()
                            ->toArray();
        return $projects;
    }

    public static function getAllProjectConsultants(){
        $consultant = Consultant::where('id_user',Auth::id())->first()->toArray();
        $projects = Project::where('id_consultant',$consultant['id'])
                            ->select('id as id_project','project_name')
                            ->get()
                            ->toArray();
        return $projects;
    }
}
