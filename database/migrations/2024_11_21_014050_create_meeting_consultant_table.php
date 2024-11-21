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
    Schema::create('meeting_consultant', function (Blueprint $table) {
        $table->unsignedBigInteger('id_consultant'); 
        $table->unsignedBigInteger('id_meeting');
        $table->foreign('id_consultant')->references('id_consultant')->on('consultants')->onDelete('cascade');
        $table->foreign('id_meeting')->references('id_meeting')->on('meetings')->onDelete('cascade');
        $table->primary(['id_consultant', 'id_meeting']);
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meeting_consultant');
    }
};