<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ConsultantController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\LaboratoriesController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\EnsureSessionIsValid;
use Illuminate\Support\Facades\Route;

Route::middleware([EnsureSessionIsValid::class])->group(function(){
    Route::controller(Dashboard::class)->group(function(){
        Route::get('/','index')->name('index');
    });
    Route::controller(UserController::class)->group(function(){
        Route::get('/getUserInfo','getInfo')->name('user.getInfo');
        Route::post('/getUserProfile','getProfile')->name('user.getProfile');
    });
    Route::controller(NotificationController::class)->group(function(){
        Route::post('/notifiactions/get','getNotifications')->name('notifications.get');
        Route::post('/notifiactions/update','updateC')->name('notifications.update');
    });
    Route::controller(TaskController::class)->group(function(){
        Route::post('/task/getProjectTasks','getProjectTasks')->name('task.get');
        Route::post('/task/register','registerTaskProject')->name('task.register');

    });
    Route::controller(ProjectController::class)->group(function(){
        Route::post('/project/getMembers','getMembers')->name('project.getMembers');
        Route::post('/project/getInfo','getInfo')->name('project.getInfo');
        Route::post('/project/getAll','getAllProjects')->name('project.getAll');
        Route::post('/project/kick','kickUser')->name('project.kickUser');
        Route::post('/project/leave','leave')->name('project.leave');
        Route::post('/project/joinRequest','joinRequest')->name('project.joinRequest');
        Route::post('/project/create','createProject')->name('project.create');
        Route::post('/project/getAllProjectConsultants','getAllProjectConsultants')->name('project.getAllProjectConsultants');
    });
    Route::controller(MeetingController::class)->group(function(){
        Route::post('/meeting/get','getMeetings')->name('meeting.get');
        Route::post('/meeting/create','createMeeting')->name('meeting.create');
        Route::post('/meeting/cancel','cancel')->name('meeting.cancel');
    });
    Route::controller(CareerController::class)->group(function(){
        Route::post('/course/get','getCourses')->name('course.get');
    });
    Route::controller(LaboratoriesController::class)->group(function(){
        Route::post('/laboratories/getAll','getAllLaboratories')->name('laboratories.getAll');
    });
    Route::controller(ConsultantController::class)->group(function(){
        Route::post('/consultant/getAll','getAllConsultants')->name('consultant.getAll');
    });

});





Route::controller(AuthController::class)->group(function(){
    Route::get('/login','showLogin')->name('login');
    Route::post('/login','login')->name('login.up');
    Route::get('/logout','logout')->name('logout');
    Route::post('/register','register')->name('register');
    Route::get('/register','showRegister')->name('register.show');
    Route::get('/email/verify/{id}/{token}','verify')->name('verification.verify');
    Route::get('/password/reset/{token}','showReset')->name('password.reset');
    Route::get('/password/reset','showResetSol')->name('password.solReset');
    Route::post('/password/reset','resetPassword')->name('password.update');
    Route::post('/password/email','sendResetLinkEmail')->name('password.emailReset');
});

