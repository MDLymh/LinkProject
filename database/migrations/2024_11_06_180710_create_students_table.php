<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('students', function (Blueprint $table) {
        $table->id('id_student'); // PK, INT
        $table->unsignedBigInteger('id_user'); // FK to users table
        $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
        $table->unsignedBigInteger('id_course'); // FK to courses table
        $table->foreign('id_course')->references('id_course')->on('courses')->onDelete('cascade');
        $table->unsignedBigInteger('id_project'); // FK to projects table
        $table->foreign('id_project')->references('id_project')->on('projects')->onDelete('cascade');
        $table->integer('external_contact');
        $table->boolean('is_leader');
        $table->string('available_schedule');
        $table->string('current_lab');
        $table->enum('school_cycle', ['A', 'B']);
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
