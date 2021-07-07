<?php

namespace App\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface ContactRepository
 * @package namespace App\Repositories;
 */
interface SubscribeRepository extends RepositoryInterface
{
    public function datatable();

    public function export_excel();
}
