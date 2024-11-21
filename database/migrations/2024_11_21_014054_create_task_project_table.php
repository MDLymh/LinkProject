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
        Schema::create('task_project', function (Blueprint $table) {
            $table->unsignedBigInteger('id_task'); 
            $table->unsignedBigInteger('id_project');
            $table->foreign('id_task')->references('id_task')->on('tasks')->onDelete('cascade');
            $table->foreign('id_project')->references('id_project')->on('projects')->onDelete('cascade');
            $table->primary(['id_task', 'id_project']);
        });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_project');
    }
};