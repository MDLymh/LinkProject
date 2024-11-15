<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $table = 'skills';
    protected $primaryKey = 'id_skill';

    protected $fillable = [
        'skill_name',
        'skill_type',
        'skill_description'
    ];

    public function students(){
        return $this->belongsToMany(User::class, 'student_skills', 'id_skill', 'id_user');
    }
}
