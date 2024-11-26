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
        'schedule',
        'is_active',
        'description',
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }

    public function consultants(){
        return $this->belongsToMany(Consultant::class, 'meeting_consultant', 'id_meeting', 'id_consultant');
    }

    public static function getMeetings($userId):array{
        $user = User::getInfo($userId);
        $meetings = Meeting::where('id_project',$user['id_project'])->get()->toArray();
        return $meetings;
    }
}
