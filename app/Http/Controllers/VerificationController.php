<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function verify(Request $request)
    {
        $request->validate([
            'token' => 'required',
        ]);

        $user = User::where('verification_token', $request->token)->first();

        if (!$user) {
            return redirect('/login')->with('error', 'El token es inválido o ha expirado.');
        }

        $user->update([
            'email_verified_at' => now(),
            'verification_token' => null
        ]);

        return redirect('/login')->with('message', '¡Tu correo ha sido verificado exitosamente!');
    }
}

