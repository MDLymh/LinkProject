<?php

namespace App\Http\Controllers;

use App\Models\Consultant;
use Illuminate\Http\Request;
use App\Models\Meeting;
use App\Models\Project;

class ConsultantController extends Controller{
    public function meetingCreate(Request $request) {
        $request->validate([
            'id_project' => 'required|exists:projects,id_project',
            'schedule' => 'required|date|after:now',
        ]);

        $meeting = Meeting::create([
            'id_project' => $request->id_project,
            'schedule' => $request->schedule,
        ]);

        return response()->json(['message' => 'Reunión creada correctamente', 'meeting' => $meeting]);
    }

    public function meetingCancel($id) {
        $meeting = Meeting::findOrFail($id);
        $meeting->status = 'cancelled'; // Cambiar el estado de la reunión a 'cancelada'
        $meeting->save();

        return response()->json(['message' => 'Reunión cancelada correctamente', 'meeting' => $meeting]);
    }

    public function redefineProjectLeader($projectId, $newLeaderId) {
        $project = Project::findOrFail($projectId);
        $project->id_consultant = $newLeaderId; // Cambia el líder del proyecto
        $project->save();

        return response()->json(['message' => 'Líder del proyecto redefinido correctamente', 'project' => $project]);
    }
    public function getAllConsultants(){
        return json_encode(Consultant::getAllConsultants());
    }
}
