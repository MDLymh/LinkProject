<?php

use App\Models\Skill;
use App\Models\Course;
use App\Models\Innovation;

Route::get('/', function () {
    // Obtiene los registros de las tablas
    $skills = Skill::all();
    $careers = Course::all();
    $innovations = Innovation::all();

    // Pasa los datos a la vista
    return view('welcome', compact('skills', 'careers', 'innovations'));
});
