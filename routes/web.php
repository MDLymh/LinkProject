<?php

use Illuminate\Support\Facades\Route;

Route::get('/plantilla', function () {
    $data = array(
        'moduloJSX'=> 'plantilla/plantilla.jsx',
        'initialData'=>[],
    );
    return view('base',$data);
});
