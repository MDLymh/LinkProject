<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

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
}
