<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnToPartnerTranslationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('partner_translation', function (Blueprint $table) {
            $table->string('slug')->nullable();
            $table->string('description', 1024)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('partner_translation', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('description');  
        });
    }
}
