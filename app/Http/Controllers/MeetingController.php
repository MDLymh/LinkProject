<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Meeting;

class MeetingController extends Controller{
    public function cancelAuto($id) { 
        $meeting = Meeting::findOrFail($id);

        if ($meeting->schedule < now()) {
            return response()->json(['message' => 'La reunión ya sucedió y se puede cancelar']);
        }

        $meeting->status = 'cancelled'; // Cambiar el estado de la reunión a 'cancelada'
        $meeting->save();

        return response()->json(['message' => 'Reunión cancelada con éxito', 'meeting' => $meeting]);
    }
}
