<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{

    public function getInfo(Request $request){
        return json_encode(User::getInfo(Auth::id()));
    }
    public function getProfile(Request $request){
        return json_encode(User::getProfile(Auth::id()));
    }

}

