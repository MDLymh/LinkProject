<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Laboratory;

class LaboratoriesController extends Controller
{
    //
    public function getAllLaboratories(){
        return json_encode(Laboratory::getLaboratories());
    }
}
