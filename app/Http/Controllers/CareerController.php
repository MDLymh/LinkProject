<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CareerController extends Controller{
    // Obtener una carrera por ID
    public function getCourse($id) {
        $career = Course::findOrFail($id); // Encuentra la carrera por ID, si no la encuentra lanza un error 404

        return response()->json(['career' => $career]);
    }

    public function getCourses() {
        return json_encode(Course::getCourses());
    }
}
