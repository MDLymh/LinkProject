<?php

namespace App\Models\relations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project_User extends Model
{
    protected $table ='project_users';
    public $timestamps = false;
    use HasFactory;
}
