<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';
    protected $primaryKey = 'id_student';

    protected $fillable = [
        'id_user',
        'id_course',
        'id_project',
        'external_contact',
        'is_leader',
        'available_schedule',
        'current_lab',
        'school_cycle'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'id_user');
    }

    public function course(){
        return $this->belongsTo(Course::class, 'id_course');
    }

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }

    public function skills(){
        return $this->belongsToMany(Skill::class, 'student_skills', 'id_user', 'id_skill');
    }
}
