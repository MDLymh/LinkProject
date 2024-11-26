<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EnsureSessionIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario está autenticado
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Debes iniciar sesión.');
        }

        // Verificar si la sesión del usuario existe en la base de datos
        $sessionId = session()->getId(); // Obtener ID de la sesión actual
        $sessionExists = DB::table('sessions')->where('id', $sessionId)->exists();

        if (!$sessionExists) {
            Auth::logout(); // Cerrar sesión
            return redirect()->route('login')->with('error', 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
        }

        return $next($request);
    }
}
