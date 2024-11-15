<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $table = 'notifications';
    protected $primaryKey = 'id_notification';

    protected $fillable = [
        'id_user_leader',
        'id_user_request',
        'id_project',
        'content'
    ];

    public function leader(){
        return $this->belongsTo(User::class, 'id_user_leader');
    }

    public function requester(){
        return $this->belongsTo(User::class, 'id_user_request');
    }

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }
}
