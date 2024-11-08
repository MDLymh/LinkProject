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
    Schema::create('users', function (Blueprint $table) {
        $table->id('id_user'); // PK, VARCHAR (ID will be auto-incremented)
        $table->string('code');
        $table->string('name');
        $table->boolean('is_active');
        $table->enum('user_type', ['advisor', 'student']);
        $table->string('profile_picture')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
