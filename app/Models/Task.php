<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $fillable = [
        'id_project',
        'title',
        'id_Asigned_User',
        'description',
        'start_date',
        'end_date',
        'status'
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }



    public static function getProjectTasks($userId) : array {
        $info =[];
        $user = User::getInfo($userId);
        $info = array_merge(Task::select('tasks.id','end_date as scheduled',
                                        'start_date as created','description as content','u.name as student')
                                  ->join('users as u','tasks.id_Asigned_User','=','u.id')
                                  ->where('id_project',$user['id_project'])
                                  ->get()
                                  ->toArray());
        return $info;
    }

    public static function registerProjectTask($userId, $task):bool{
        $user = User::getInfo($userId);
        $task =Task::create([
            'id_project'=> $user['id_project'],
            'id_Asigned_User'=>$task['asignedTo'],
            'title'=>$task['content'],
            'description'=>$task['content'],
            'start_date'=>now(),
            'end_date'=>$task['end_date'],
            'status'=>1
        ]);

        return $task?true:false;
    }
}
