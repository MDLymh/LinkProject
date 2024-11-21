<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
// Ayuda con fechas y horas
use Carbon\Carbon;

class TaskController extends Controller{
    public function changeStatusAutoDeadline(){
        $currentDate = Carbon::now();

        $tasks = Task::where('status', 'in-progress')
            ->where('end_date', '<', $currentDate)
            ->get();

        foreach ($tasks as $task) {
            $task->status = 'completed'; // Cambia el estado
            $task->save(); // Guarda 
        }

        return response()->json([
            'message' => 'Estados de las tareas actualizados correctamente',
            'tasks_updated' => $tasks->count()
        ]);
    }
}
