<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvestCategoriesTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('invest_categories', function(Blueprint $table) {
            $table->increments('id');
            $table->string('code', 50)->index()->nullable();
			$table->integer('position')->default(0);
			$table->string('banner', 255)->nullable();
            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('invest_categories');
	}

}
