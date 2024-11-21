<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Innovation extends Model
{
    use HasFactory;

    protected $table = 'innovations';
    protected $primaryKey = 'id_innovation';

    protected $fillable = [
        'innovation_name'
    ];
}
