<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;

Route::get('/test-email', function () {
    Mail::to('test@example.com')->send(new TestEmail());
    return 'Correo enviado';
});

Route::get('/register',function(){
    return view('test.register');
});

Route::get('/reset',function(){
    return view('test.password-reset');
})->name('password.emaiñ');



Route::get('/', function () {
    return view('app');
});


Route::controller(AuthController::class)->group(function(){
    Route::post('/register','register')->name('register');
    Route::get('/email/verify/{id}/{token}','verify')->name('verification.verify');
    Route::post('/login','login')->name('login.up');
    Route::get('/password/reset/{token}','showReset')->name('password.reset');
    Route::post('/password/reset','resetPassword')->name('password.update');
    Route::post('/password/email','sendResetLinkEmail')->name('password.emailReset');
});




Route::get('/prueba',function(){
    $data= [
        'pageData' => ['nombre'=> "pepito"],
        'viewJsx' => "resources/jsx/LoginComponent/Login.jsx"
    ];
    return view('app',$data);
    
});

Route::get('/login',function(){
    
    return view('test.login');
    
})->name('login');
