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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id('id_notification'); 
            $table->unsignedBigInteger('id_user_leader'); 
            $table->foreign('id_user_leader')->references('id_user')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('id_user_request'); 
            $table->foreign('id_user_request')->references('id_user')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('id_project');
            $table->foreign('id_project')->references('id_project')->on('projects')->onDelete('cascade');
            $table->text('content');
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};