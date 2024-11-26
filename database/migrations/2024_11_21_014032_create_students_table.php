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
            $table->id();
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('id_course');
            $table->integer('laboratory_id');
            $table->foreign('id_course')->references('id')->on('courses')->onDelete('cascade');
            $table->unsignedBigInteger('id_project')->nullable();
            $table->foreign('id_project')->references('id')->on('projects')->onDelete('cascade');
            $table->integer('external_contact')->nullable();
            $table->string('available_schedule')->nullable();
            $table->unsignedInteger('current_lab');
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
