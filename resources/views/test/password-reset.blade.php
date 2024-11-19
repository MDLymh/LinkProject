<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecer contraseña</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div style="max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2>Restablecer contraseña</h2>

        <!-- Mostrar mensajes de estado -->
        @if (session('status'))
            <div style="color: green; margin-bottom: 20px;">
                {{ session('status') }}
            </div>
        @endif

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

        <!-- Formulario para ingresar el correo y solicitar el restablecimiento -->
        <form method="POST" action="{{ route('password.emailReset') }}">
            @csrf
            <div style="margin-bottom: 15px;">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}" required style="width: 100%; padding: 8px; margin-top: 5px;">
            </div>

            <button type="submit" style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">Enviar enlace de restablecimiento</button>
        </form>
    </div>
</body>
</html>
