<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvestmentsTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investments_translation', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('investments_id')->unsigned();
            $table->string('locale')->index();

            $table->string('title')->nullable();
            $table->string('slug')->nullable();
            $table->string('description', 1024)->nullable();
            $table->longText('content')->nullable();

            $table->unique(['investments_id','locale']);
            $table->foreign('investments_id')->references('id')->on('investments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('investments_translation');
    }
}
