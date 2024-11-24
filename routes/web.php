<?php
use App\Models\Skill;
use App\Models\Course;
use App\Models\Innovation;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;


Route::get('/', function () {
    // Obtiene los registros de las tablas
    $skills = Skill::all();
    $careers = Course::all();
    $innovations = Innovation::all();

    // Pasa los datos a la vista
    return view('welcome', compact('skills', 'careers', 'innovations'));
});


Route::get('/test-email', function () {
    Mail::to('test@example.com')->send(new TestEmail());
    return 'Correo enviado';
});

Route::get('/reset',function(){
    return view('test.password-reset');
})->name('password.email');



Route::controller(AuthController::class)->group(function(){
    Route::get('/login','showLogin')->name('login');
    Route::post('/login','login')->name('login.up');
    Route::post('/register','register')->name('register');
    Route::get('/register','showRegister')->name('register.show');
    Route::get('/email/verify/{id}/{token}','verify')->name('verification.verify');
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

