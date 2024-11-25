<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Consultant;
use App\Models\Course;
use App\Models\Laboratory;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use App\Models\Password_reset_token;
use App\Models\Student;
use App\Models\Type_user;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function showLogin(){
        $data=[
            'viewJsx'=> 'resources/jsx/Views/LoginComponent/Login.jsx'
        ];
        return view('base',$data);
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


        return redirect()->route('index')->with('message', 'Bienvenido, estás logueado correctamente!');
    }

    public function showRegister(){
        $initialData['users_type'] = Type_user::getUsersType();
        $initialData['courses'] = Course::getCourses();
        $initialData['laboratories'] = Laboratory::getLaboratories();
        $data=[
            'viewJsx'=> 'resources/jsx/Views/SignInComponent/SignIn.jsx',
            'initialData' => $initialData
        ];
        return view('base',$data);
    }


    public function register(Request $request){
        $validateData = $request->validate([
            'name'=> 'min:3|max:255|string|required',
            'surname1'=> 'min:3|max:255|string|required',
            'surname2'=> 'min:3|max:255|string|nullable',
            'email' => 'required|max:255|email|unique:users,email',
            'carrer'=> 'required|integer|exists:courses,id',
            'user-type'=> 'required|integer|exists:type_users,id',
            'laboratory'=> 'required|integer|exists:laboratories,id',
            'code'=>'required|integer|unique:students,id|unique:consultants,id',
            'password' => ['required','string','min:8','regex:/[a-z]/','regex:/[A-Z]/',
                            'regex:/[0-9]/','regex:/[@$!%*?&]/','confirmed'],
        ]);



        $user = User::create([
            'name' => $validateData['name'],
            'surname1'  => $validateData['surname1'],
            'surname2'  => $validateData['surname2'],
            'email'     => $request->email,
            'is_active' => true,
            'type'      => $validateData['user-type'],
            'password'  => bcrypt($request->password),
            'remember_token' => Str::random(60)
        ]);

        if($validateData['user-type'] == 1){
            $consultant = Consultant::create([
                'id'          => $validateData['code'],
                'id_user'     => $user->id,
            ]);
            $consultant->save();
        }
        if($validateData['user-type'] == 2){
            $student = Student::create([
                'id'          => $validateData['code'],
                'id_user'     => $user->id,
                'id_course'   => $validateData['carrer'],
                'current_lab' => $validateData['laboratory'],
            ]);
            $student->save();
        }
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

    public function showResetSol(Request $request){
        return view('test.password-reset');
    }


    public function sendResetLinkEmail(Request $request){

        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $response = Password::sendResetLink(
            $request->only('email')
        );

        if ($response == Password::RESET_LINK_SENT) {
            return redirect()->route('login')->with('message', 'Te hemos enviado un enlace para restablecer tu contraseña.');
        } else {
            return back()->withErrors(['email' => 'No pudimos encontrar un usuario con ese correo.']);
        }
    }

    public function resetPassword(Request $request){


        $validateData = $request->validate([
            'email' => 'max:255|email|exists:users,email',
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
        $initialData =[
            'email'=> $request->input('email'),
            'token'=> $token
        ];
        $data =[
            'viewJsx'=> 'resources/jsx/Views/PasswordResetComponent/PasswordReset.jsx',
            'initialData'=>$initialData
        ];
        return view('base',$data);
    }


}
