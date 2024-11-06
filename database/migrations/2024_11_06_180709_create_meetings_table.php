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
        Schema::create('meetings', function (Blueprint $table) {
            $table->id('id_meeting'); // Auto-incremented PK
            $table->unsignedBigInteger('id_project'); // FK to projects table
            $table->foreign('id_project')->references('id_project')->on('projects')->onDelete('cascade');
            $table->timestamp('schedule');
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meetings');
    }
};
