<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});


Route::get('./prueba', function()
{
    $data={
        'initialData' => "pepito"
        'viewJsx' => "jsx/SignInComponent/SingIn.jsx"
    }

    return view('base', $data);
});