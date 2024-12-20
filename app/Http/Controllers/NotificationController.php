<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller {
    public function send(Request $request) { 
        $request->validate([
            'id_user_leader' => 'required|exists:users,id_user',
            'id_user_request' => 'required|exists:users,id_user',
            'id_project' => 'required|exists:projects,id_project',
            'content' => 'required|string'
        ]);

        $notification = Notification::create($request->all());

        return response()->json(['message' => 'Notificación enviada con éxito', 'notification' => $notification]);
    }

    public function confirm($id) { 
        $notification = Notification::findOrFail($id);
        $notification->status = 'confirmed'; // Cambiar el estado 
        $notification->save();

        return response()->json(['message' => 'Notificación confirmada', 'notification' => $notification]);
    }

    public function reject($id) { 
        $notification = Notification::findOrFail($id);
        $notification->status = 'rejected'; // Cambiar el estado 
        $notification->save();

        return response()->json(['message' => 'Notificación rechazada', 'notification' => $notification]);
    }
}

