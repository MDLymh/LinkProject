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
        Schema::create('projects', function (Blueprint $table) {
            $table->id('id_project');
            $table->unsignedBigInteger('id_consultant');
            $table->foreign('id_consultant')->references('id_consultant')->on('consultants')->onDelete('cascade');
            $table->string('area');
            $table->integer('max_members');
            $table->text('required_knowledge');
            $table->text('description');
            $table->enum('status', ['active', 'inactive']);
            $table->timestamp('creation_date');
            $table->string('photo')->nullable();
            $table->string('project_name');
            $table->string('innovation_types');
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
