<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvestmentsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image')->nullable();
            $table->string('banner')->nullable();
            $table->integer('invest_category_id')->unsigned();
            $table->tinyInteger('active')->index()->default(0);
            $table->tinyInteger('is_top')->index()->default(0);
            $table->date('publish_at')->nullable();
            $table->timestamps();
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
        Schema::drop('investments');
    }

}
