<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;
use App\Models\Request as StudentRequest;
use App\Models\Student;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller{
    public function projectCancel($projectId){
        $project = Project::findOrFail($projectId);
        $project->status = 'cancelled'; // Cambia el estado a 'cancelado'
        $project->save();

        return response()->json(['message' => 'Proyecto cancelado correctamente']);
    }

    public function projectCreate(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'area' => 'required|string',
        ]);

        $project = Project::create($request->all());

        return response()->json(['message' => 'Proyecto creado correctamente', 'project' => $project]);
    }

    public function taskCreate(Request $request){
        $request->validate([
            'id_project' => 'required|exists:projects,id_project',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $task = Task::create($request->all());

        return response()->json(['message' => 'Tarea creada correctamente', 'task' => $task]);
    }

    public function taskEdit(Request $request, $id){
        $task = Task::findOrFail($id);

        $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'start_date' => 'date',
            'end_date' => 'date|after:start_date',
        ]);

        $task->update($request->all());

        return response()->json(['message' => 'Tarea editada correctamente', 'task' => $task]);
    }

    public function taskView($studentId){
        $student = Student::findOrFail($studentId);
        $tasks = $student->project->tasks ?? [];

        return response()->json(['tasks' => $tasks]);
    }

    public function requestCancel($requestId){
        $request = StudentRequest::findOrFail($requestId);
        $request->status = 'cancelled'; // Cambia el estado
        $request->save();

        return response()->json(['message' => 'Solicitud cancelada correctamente']);
    }

    public function requestSend(Request $request){
        $request->validate([
            'id_project' => 'required|exists:projects,id_project',
            'content' => 'required|string',
        ]);

        $studentRequest = StudentRequest::create([
            'id_project' => $request->id_project,
            'id_user' => Auth::id(),
            'content' => $request->content,
            'status' => 'pending',
        ]);

        return response()->json(['message' => 'Solicitud enviada correctamente', 'request' => $studentRequest]);
    }

    public function requestApprove($requestId){
        $request = StudentRequest::findOrFail($requestId);
        $request->status = 'approved'; // Cambia el estado
        $request->save();

        return response()->json(['message' => 'Solicitud aprobada correctamente']);
    }

    public function abandonProject($id){
        $student = Auth::user()->student;
        if ($student->id_project != $id) {
            return response()->json(['message' => 'No estás en este proyecto'], 403);
        }

        $student->id_project = null; // Quitar la relación con el proyecto
        $student->save();

        return response()->json(['message' => 'Has abandonado correctamente el proyecto']);
    }

    public function kickFromProject($projectId, $studentId){
        $student = Student::findOrFail($studentId);

        if ($student->id_project != $projectId) {
            return response()->json(['message' => 'El estudiante no pertenece a este proyecto'], 404);
        }

        $student->id_project = null; // Quitar la relación con el proyecto
        $student->save();

        return response()->json(['message' => 'Estudiante expulsado correctamente del proyecto']);
    }

    public function approveMeeting($id){
        // !!! ¿Cómo podría modificar una tabla?
    }
}
