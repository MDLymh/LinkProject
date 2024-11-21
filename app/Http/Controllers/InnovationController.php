<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Innovation;

class InnovationController extends Controller{
    // Listar innovaciones
    public function index() { 
        $innovations = Innovation::all(); // Obtiene todas las innovaciones

        return response()->json(['innovations' => $innovations]);
    }
}
