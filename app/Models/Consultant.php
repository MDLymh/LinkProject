<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Consultant extends Model
{
    use HasFactory;

    protected $table = 'consultants';

    protected $fillable = [
        'id_user',
        'school_division',
        'short_experience_description'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'id_user');
    }

    public function meetings(){
        return $this->belongsToMany(Meeting::class, 'meeting_consultant', 'id_consultant', 'id_meeting');
    }
    // En caso de que tenga varios proyectos, de no ser el caso hasOne
    public function projects(){
        return $this->hasMany(Project::class, 'id_consultant');
    }

    public static function getAllConsultants(){
        return Consultant::join('users as u','consultants.id_user','=','u.id')
                            ->select('consultants.id',
                                    DB::raw("Concat('Prof. ',u.name,' ',u.surname1,' ',u.surname2) as assesor_name"))
                            ->get()
                            ->toArray();
    }
}