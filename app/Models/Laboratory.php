<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laboratory extends Model
{
    protected $table = 'laboratories';
    use HasFactory;

    public static function getLaboratories(): array{
        return Laboratory::select('id','name')->get()->toArray();
    }

}
