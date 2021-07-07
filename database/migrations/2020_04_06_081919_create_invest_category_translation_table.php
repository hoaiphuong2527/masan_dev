<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvestCategoryTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invest_category_translation', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('invest_category_id')->unsigned();
            $table->string('locale')->index();
            $table->string('slug')->nullable();
            $table->string('name')->nullable();
            $table->unique(['invest_category_id','locale']);
            $table->foreign('invest_category_id')->references('id')->on('invest_categories')->onDelete('cascade');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('invest_category_translation');
    }
}
