<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

class UserRegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_register_successfully()
    {

        $userData = [
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => 'Password123!',
            'password_confirmation' => 'Password123!',
        ];
        
        
        $response = $this->post(route('register'), $userData);

        $this->assertDatabaseHas('users', [
            'email' => 'johndoe@example.com',
        ]);

        $response->assertRedirect('/login');
    }


    public function test_user_registration_fails_with_invalid_data(){
        // Datos del usuario con errores
        $userData = [
            'name' => '', // Nombre vacío
            'email' => 'invalid-email', // Email inválido
            'password' => 'short', // Contraseña muy corta
            'password_confirmation' => 'different', // Confirmación incorrecta
        ];

        // Simular el envío del formulario
        $response = $this->post(route('register'), $userData);

        // Verificar que no se creó ningún usuario
        $this->assertDatabaseMissing('users', [
            'email' => 'invalid-email',
        ]);

        // Verificar que los errores de validación están presentes
        $response->assertSessionHasErrors([
            'name',
            'email',
            'password',
        ]);


    }


    public function test_user_registration_fails_with_duplicate_email(){
        // Crear un usuario existente
        User::factory()->create([
            'email' => 'johndoe@example.com',
        ]);

        // Intentar registrar un nuevo usuario con el mismo email
        $userData = [
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => 'Password123!',
            'password_confirmation' => 'Password123!',
        ];

        $response = $this->post(route('register'), $userData);

        // Verificar que no se creó un usuario duplicado
        $this->assertDatabaseCount('users', 1);

        // Verificar el error de validación para el email
        $response->assertSessionHasErrors(['email']);
    }
        

}

