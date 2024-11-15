<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';
    protected $primaryKey = 'id_project';

    protected $fillable = [
        'id_consultant',
        'area',
        'max_members',
        'required_knowledge',
        'description',
        'status',
        'creation_date',
        'photo',
        'project_name',
        'innovation_types'
    ];

    public function consultant(){
        return $this->belongsTo(Consultant::class, 'id_consultant');
    }

    public function tasks(){
        return $this->hasMany(Task::class, 'id_project');
    }

    public function meetings(){
        return $this->hasMany(Meeting::class, 'id_project');
    }

    public function notifications(){
        return $this->hasMany(Notification::class, 'id_project');
    }
}
