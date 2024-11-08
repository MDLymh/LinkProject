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
    Schema::create('consultants', function (Blueprint $table) {
        $table->id('id_consultant'); // Auto-incremented PK
        $table->unsignedBigInteger('id_user'); // FK to users table
        $table->foreign('id_user')->references('id_user')->on('users')->onDelete('cascade');
        $table->string('school_division');
        $table->text('short_experience_description');
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultants');
    }
};
