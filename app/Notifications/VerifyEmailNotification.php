<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\User;

class VerifyEmailNotification extends Notification
{
    protected $user;

    /**
     * Create a new notification instance.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail']; // Usamos solo el canal de correo
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $verificationUrl = route('verification.verify', [
            'id' => $this->user->id, 
            'token' => $this->user->remember_token, 
        ]);
        

        return (new MailMessage)
                    ->subject('Verifica tu correo electrónico')
                    ->line('Gracias por registrarte en nuestra plataforma.')
                    ->line('Para completar tu registro, por favor haz clic en el botón siguiente para verificar tu cuenta.')
                    ->action('Verificar Cuenta', $verificationUrl)
                    ->line('Si no has solicitado este registro, puedes ignorar este mensaje.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => 'Por favor, verifica tu correo electrónico para completar el registro.'
        ];
    }
}
