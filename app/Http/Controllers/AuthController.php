<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\VerifyEmail;
use Illuminate\Http\Request;
USE Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request){
        $validateData = $request->validate([
            'name'=> 'min:3|max:255|string',
            'email' => 'max:255|email',
            'password' => ['required','string','min:8','regex:/[a-z]/','regex:/[A-Z]/',
                            'regex:/[0-9]/','regex:/[@$!%*?&]/','confirmed'],
        ]);
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'verification_token' => Str::random(60)
        ]);

        $user->sendEmailVerificationNotification();
        
        $user->notify(new VerifyEmail($user->verification_token));


        return redirect()->route('login')->with('message', 'Por favor, revisa tu correo para verificar tu cuenta.');
    }
}
