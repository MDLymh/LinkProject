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
        $table->id();
        $table->unsignedBigInteger('id_project');
        $table->foreign('id_project')->references('id')->on('projects')->onDelete('cascade');
        $table->foreignId('id_Asigned_User')->constrained('users')->onDelete('cascade');
        $table->string('title');
        $table->text('description');
        $table->timestamp('start_date');
        $table->timestamp('end_date')->nullable();;
        $table->integer('status');
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
