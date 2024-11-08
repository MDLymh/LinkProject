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
    Schema::create('student_skills', function (Blueprint $table) {
        $table->unsignedBigInteger('id_user'); // FK to users
        $table->unsignedBigInteger('id_skill'); // FK to skills
        $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
        $table->foreign('id_skill')->references('id_skill')->on('skills')->onDelete('cascade');
        $table->primary(['id_user', 'id_skill']);
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_skills');
    }
};
