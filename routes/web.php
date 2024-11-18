<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});
Route::controller(AuthController::class)->group(function(){
    Route::post('/register','register');
});


Route::get('/prueba',function(){
    $data= [
        'pageData' => ['nombre'=> "pepito"],
        'viewJsx' => "resources/jsx/LoginComponent/Login.jsx"
    ];
    return view('app',$data);
    
});
