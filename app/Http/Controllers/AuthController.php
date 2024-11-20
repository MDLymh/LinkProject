<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use App\Models\Password_reset_token;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request){
        $validateData = $request->validate([
            'name'=> 'min:3|max:255|string',
            'surname1'=> 'min:3|max:255|string',
            'surname2'=> 'min:3|max:255|string|nullable',
            'email' => 'max:255|email|unique:users,email',
            'password' => ['required','string','min:8','regex:/[a-z]/','regex:/[A-Z]/',
                            'regex:/[0-9]/','regex:/[@$!%*?&]/','confirmed'],
        ]);


        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'remember_token' => Str::random(60)
        ]);
        
        event(new Registered($user));

        
        return redirect()->route('login')->with('message', 'Por favor, revisa tu correo para verificar tu cuenta.');
    }


    public function verify($id, $token){
        
        $user = User::find($id);
        
        
        if (!$user || $user->remember_token !== $token) {
            return redirect('/login')->with('error', 'Token de verificación inválido o expirado.');
        }

        
        if ($user->email_verified_at) {
            return redirect('/login')->with('message', 'Tu cuenta ya ha sido verificada.');
        }

        
        $user->email_verified_at = now();
        $user->remember_token = null;
        $user->save();

        
        return redirect()->route('login')->with('message', 'Tu cuenta ha sido verificada con éxito. Ahora puedes iniciar sesión.');
    }


    public function login(Request $request){
        
        
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        
        $user = User::where('email', $request->email)->first();
        
        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['No podemos encontrar un usuario con ese correo electrónico.'],
            ]);
        }

        
        if (!$user->email_verified_at) {
            throw ValidationException::withMessages([
                'email' => ['Por favor, verifica tu correo electrónico antes de iniciar sesión.'],
            ]);
        }

        
        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['La contraseña es incorrecta.'],
            ]);
        }

        
        Auth::login($user);

        
        return redirect()->route('login')->with('message', 'Bienvenido, estás logueado correctamente!');
    }


    public function sendResetLinkEmail(Request $request){

        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $response = Password::sendResetLink(
            $request->only('email')
        );

        if ($response == Password::RESET_LINK_SENT) {
            return back()->with('status', 'Te hemos enviado un enlace para restablecer tu contraseña.');
        } else {
            return back()->withErrors(['email' => 'No pudimos encontrar un usuario con ese correo.']);
        }
    }

    public function resetPassword(Request $request){
        
        
        $validateData = $request->validate([
            'email' => 'max:255|email',
            'password' => ['required','string','min:8','regex:/[a-z]/','regex:/[A-Z]/',
                            'regex:/[0-9]/','regex:/[@$!%*?&]/','confirmed'],
            'token' => 'required|string',
        ]);

        $token = Password_reset_token::where('email',$validateData['email'])->orderBy('created_at','DESC')->first();
        $expiration = config('auth.passwords.users.expire');
        
        
        if( !$token){
            return back()->withErrors(['token' => 'Token Invalido o ya expiro'])->withInput();
        }
        $isExpired = Carbon::parse($token->created_at)->addMinutes($expiration)->isPast();
        if($isExpired || !(Hash::check($validateData['token'],$token->token))){
            return back()->withErrors(['token' => 'Token Invalido o ya expiro'])->withInput();
        }
        
        $user = User::where('email',$validateData['email'])->first();
        $user->password = bcrypt($validateData['password']);
        $user->save();
        Password_reset_token::where('email',$validateData['email'])->delete();

        return redirect()->route('login')->with('status', '¡Tu contraseña ha sido actualizada correctamente!');


    }

    public function showReset(Request $request,$token) {
        $data =[
            'email'=> $request->input('email'),
            'token'=> $token
        ];
        return view('test.password-reset-form',$data);
    }

}
