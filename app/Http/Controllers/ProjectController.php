<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller {
    public function changeMaxMembers($id, Request $request) {
        $request->validate([
            'max_members' => 'required|integer|min:1'
        ]);

        $project = Project::findOrFail($id);
        $project->max_members = $request->max_members;
        $project->save();

        return response()->json(['message' => 'Número máximo de miembros actualizado', 'project' => $project]);
    }

    public function changeProjectStatus($id, Request $request) {
        $request->validate([
            'status' => 'required|string|in:active,inactive,cancelled,completed'
        ]);

        $project = Project::findOrFail($id);
        $project->status = $request->status;
        $project->save();

        return response()->json(['message' => 'Estado del proyecto actualizado', 'project' => $project]);
    }

    public function getMembers(Request $request){
        return json_encode(Project::getMembers($request->input('projectId')));
    }

    public function getInfo(Request $request){
        return json_encode(Project::getInfo(Auth::id()));
    }
    public function kickUser(Request $request){
        if($request->has('studentId')){
            Project::kickUser($request->input('studentId'));
            return redirect()->route('index')->with(['currentView' => 'perfil']);
        }
        return redirect()->route('index')->with(['currentView' => 'Proyecto']);
    }
    public function leave(Request $request){
        if($request->has('currentUserId')){
            Project::leave($request->input('currentUserId'));
            return redirect()->route('index')->with(['currentView' => 'perfil']);
        }
        return redirect()->route('index')->with(['currentView' => 'Proyecto']);
    }

    public function getAllProjects(){
        return json_encode(Project::getAllProjects());
    }
    public function joinRequest(Request $request){
        Notification::createJoinRequest(Auth::id(),$request->input('projectId'),$request->has('cancel'));
        return redirect()->route('index')->with(['currentView' => 'Proyectos']);
    }
    public function createProject(Request $request){
        $val =$request->validate([
            'name'=>'string|required',
            'description'=>'string|required',
            'knowledge'=>'string|required',
            'innovation'=>'string|required',
            'area'=>'string|required',
            'maxMembers'=>'integer|required|max:4|min:1',
            'assesorId'=>'integer|required|min:1',
        ]);
        $newProject = Project::create([
            'id_consultant'=>$val['assesorId'],
            'area'=>$val['area'],
            'max_members'=>$val['maxMembers'],
            'required_knowledge'=>$val['knowledge'],
            'description'=>$val['description'],
            'project_name'=>$val['name'],
            'innovation_types'=>$val['innovation'],
            'status'=>'active',
            'creation_date'=>now(),
            'leader'=> Auth::id()
        ]);

        if($newProject){
            DB::table('project_users')->insert([
                [
                    'project_id'=> $newProject->id,
                    'user_id'=> $newProject->leader,
                ]
            ]);
            return redirect()->route('index')->with(['currentView' => 'Perfil']);
        }else{
            return redirect()->route('index')->with(['currentView' => 'Proyectos']);
        }
    }

    public function getAllProjectConsultants(){
        return json_encode(Project::getAllProjectConsultants());
    }
}
