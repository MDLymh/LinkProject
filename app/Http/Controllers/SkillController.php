<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;

class SkillController extends Controller{
    public function getSkill($id) { 
        $skill = Skill::findOrFail($id);

        return response()->json(['skill' => $skill]);
    }
}
