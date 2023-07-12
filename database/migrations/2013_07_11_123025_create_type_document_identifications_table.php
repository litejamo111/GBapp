<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('type_document_identifications', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->foreignId('created_id')->nullable()->constrained('users');
            $table->foreignId('updated_id')->nullable()->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('type_document_identifications');
    }
};
