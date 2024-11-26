<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Dashboard extends Controller
{
    public function index(Request $request){
        $initialData=[
            'user' => User::getInfo(Auth::id()),
            'currentView'=> $request->session()->get('currentView')?$request->session()->get('currentView'):'Perfil',
        ];
        $data =[
            'viewJsx'=> 'resources/jsx/Views/ViewerComponent/ViewerComponent.jsx',
            'initialData' => $initialData,
        ];

        return view('base',$data);
    }
}
