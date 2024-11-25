<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_user extends Model
{
    protected $table = "type_users";
    public $timestamps = false;
    use HasFactory;

    public static function getUsersType():array{
        return Type_user::all()->toArray();
    }
}
