<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model{
    use HasFactory;

    protected $table = 'courses';
    protected $primaryKey = 'id_course';

    protected $fillable = [
        'name'
    ];

    public function students(){
        return $this->hasMany(Student::class, 'id_course');
    }
}
