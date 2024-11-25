<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;




Route::controller(Dashboard::class)->group(function(){
    Route::get('/','index')->name('index');
});
Route::controller(UserController::class)->group(function(){
    Route::get('/getUserInfo','getInfo')->name('user.getInfo');
});



Route::controller(AuthController::class)->group(function(){
    Route::get('/login','showLogin')->name('login');
    Route::post('/login','login')->name('login.up');
    Route::post('/register','register')->name('register');
    Route::get('/register','showRegister')->name('register.show');
    Route::get('/email/verify/{id}/{token}','verify')->name('verification.verify');
    Route::get('/password/reset/{token}','showReset')->name('password.reset');
    Route::get('/password/reset','showResetSol')->name('password.solReset');
    Route::post('/password/reset','resetPassword')->name('password.update');
    Route::post('/password/email','sendResetLinkEmail')->name('password.emailReset');
});

