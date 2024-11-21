<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Inicio de sesión exitoso', 'user' => Auth::user()]);
        } else {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }
    }

    public function passwordChange(Request $request){
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'La contraseña actual es incorrecta'], 403);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json(['message' => 'Contraseña actualizada correctamente']);
    }

    public function passwordRecover(Request $request){

    }

    public function signIn(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Sign up
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'Usuario registrado correctamente', 'user' => $user]);
    }

    public function viewProjects($id){
        $user = User::findOrFail($id);
        $projects = $user->student->project ?? null;

        if ($projects){
            return response()->json(['projects' => $projects]);
        } else {
            return response()->json(['message' => 'El usuario no tiene proyectos asociados'], 404);
        }
    }
}

