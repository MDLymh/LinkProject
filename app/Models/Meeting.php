<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $table = 'meetings';

    protected $fillable = [
        'id_project',
        'schedule'
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }

    public function consultants(){
        return $this->belongsToMany(Consultant::class, 'meeting_consultant', 'id_meeting', 'id_consultant');
    }
}
