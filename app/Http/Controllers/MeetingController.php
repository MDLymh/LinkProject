<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meeting;
use App\Models\Notification;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class MeetingController extends Controller{
    public function cancelAuto($id) {
        $meeting = Meeting::findOrFail($id);

        if ($meeting->schedule < now()) {
            return response()->json(['message' => 'La reunión ya sucedió y se puede cancelar']);
        }

        $meeting->status = 'cancelled'; // Cambiar el estado de la reunión a 'cancelada'
        $meeting->save();

        return response()->json(['message' => 'Reunión cancelada con éxito', 'meeting' => $meeting]);
    }

    public function getMeetings(Request $reques){
        return json_encode(Meeting::getMeetings(Auth::id()));
    }
    public function createMeeting(Request $request){
        $val = $request->validate([
            'projectId'=> 'required|integer|exists:projects,id',
            'date'=>'required|date',
            'time'=>'required|date_format:H:i',
            'description'=> 'required|string',
        ]);

        Meeting::create([
            'id_project'=> $val['projectId'],
            'description'=> $val['description'],
            'schedule'=> "{$val['date']} {$val['time']}",
            'is_active'=> true,
        ]);
        return redirect()->route('index')->with(['currentView' => 'Perfil']);

    }

    public function cancel(Request $request){
        $meeting = Meeting::find($request->input('meetingId'));
        $user = User::find(Auth::id());
        $project = User::getInfo(Auth::id());

        if($meeting->id>0){
            Notification::create([
                'type'=>2,
                'id_user_leader'=>Project::getLeader($project['id_project']),
                'id_user_request'=>Auth::id(),
                'id_project'=>$project['id_project'],
                'content'=> "{$user->name} cancelo la junta del {$meeting->schedule} con asunto {$meeting->description}",
            ]);
            $meeting->delete();
        }
        return redirect()->route('index')->with(['currentView' => 'Reuniones']);
    }
}
