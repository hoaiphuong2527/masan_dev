<?php

namespace App\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface FaqCategoryRepository
 * @package namespace App\Repositories;
 */
interface InvestCategoryRepository extends RepositoryInterface
{
    public function datatable();

    public function menuCategories();

    public function findBySlug($slug);

    /* public function findByParentSlug($parent_slug); */

    public function findCategoryByCode($code);
}
