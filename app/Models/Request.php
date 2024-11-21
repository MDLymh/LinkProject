<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model{
    use HasFactory;

    protected $table = 'requests';
    protected $primaryKey = 'id_request';

    protected $fillable = [
        'id_project',
        'id_user',
        'content',
        'status'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'id_project');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
