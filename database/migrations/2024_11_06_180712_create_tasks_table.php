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
    Schema::create('tasks', function (Blueprint $table) {
        $table->id('id_task'); // PK, AUTO
        $table->unsignedBigInteger('id_project'); // FK to projects table
        $table->foreign('id_project')->references('id_project')->on('projects')->onDelete('cascade');
        $table->string('title');
        $table->text('description');
        $table->timestamp('start_date');
        $table->timestamp('end_date');
        $table->enum('status', ['pending', 'completed', 'in-progress']);
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
