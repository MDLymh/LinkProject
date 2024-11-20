<?php
namespace Tests\Feature;

use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class EmailTest extends TestCase
{
    public function test_email_can_be_sent()
    {
        // Fake the mail sending
        Mail::fake();

        // Enviar el correo
        Mail::to('test@example.com')->send(new TestEmail());

        // Verificar si el correo fue enviado
        Mail::assertSent(TestEmail::class, function ($mail) {
            return $mail->hasTo('test@example.com');
        });
    }
}
