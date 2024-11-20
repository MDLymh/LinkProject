<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}"> <!-- Si tienes CSS personalizado -->
</head>
<body>
    <div style="max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2>Iniciar sesión</h2>

        <!-- Mostrar errores de validación -->
        @if ($errors->any())
            <div style="color: red; margin-bottom: 20px;">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Mostrar mensaje de éxito o error después del login -->
        @if (session('message'))
            <div style="color: green; margin-bottom: 20px;">
                {{ session('message') }}
            </div>
        @endif

        <!-- Formulario de login -->
        <form method="POST" action="{{ route('login.up') }}">
            @csrf
            <div style="margin-bottom: 15px;">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}" required style="width: 100%; padding: 8px; margin-top: 5px;">
            </div>

            <div style="margin-bottom: 15px;">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required style="width: 100%; padding: 8px; margin-top: 5px;">
            </div>

            <button type="submit" style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Iniciar sesión</button>
        </form>

        
    </div>
</body>
</html>
