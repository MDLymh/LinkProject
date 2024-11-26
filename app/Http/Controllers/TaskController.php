<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
// Ayuda con fechas y horas
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Stmt\Return_;

class TaskController extends Controller{

    public function getProjectTasks(Request $request) {
        return json_encode(Task::getProjectTasks(Auth::id()));
    }
    public function registerTaskProject(Request $request){
        $task['content']=$request->input('content');
        $task['asignedTo'] = $request->input('memberId');
        $task['end_date'] = $request->input('scheduled');
        Task::registerProjectTask(Auth::id(),$task);
        return redirect()->route('index')->with(['currentView' => 'Tareas']);
    }

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
