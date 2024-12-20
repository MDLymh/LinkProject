<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'tasks';
    protected $primaryKey = 'id_task';

    protected $fillable = [
        'id_project',
        'title',
        'description',
        'start_date',
        'end_date',
        'status'
    ];

    public function project(){
        return $this->belongsTo(Project::class, 'id_project');
    }
}
