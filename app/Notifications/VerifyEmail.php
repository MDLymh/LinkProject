<?php
namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerifyEmail extends Notification
{
    public $token;

    public function __construct($token)
    {
        $this->token = $token;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        $verificationUrl = url("/verify-email?token={$this->token}");

        return (new MailMessage)
            ->subject('Verifica tu correo electrónico')
            ->greeting('¡Hola!')
            ->line('Por favor, haz clic en el botón de abajo para verificar tu correo electrónico.')
            ->action('Verificar correo', $verificationUrl)
            ->line('Si no creaste esta cuenta, ignora este mensaje.');
    }
}
