<?php

namespace App\Http\Controllers\Frontend;

use App\Helper\TranslateUrl;
use App\Models\City;
use App\Repositories\ProjectCategoryRepository;
use App\Repositories\ProjectRepository;
use App\Repositories\PartnerRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Breadcrumb;
use DB;
use App;

class PropertyLeasingController extends Controller
{
    private $category;
    private $project;
    private $partner;
    public function __construct(ProjectCategoryRepository $category, ProjectRepository $project, PartnerRepository $partner)
    {
        $this->category = $category;
        $this->project = $project;
        $this->partner = $partner;

        $slug = getPageUrlByCode('PROPERTY-FOR-LEASE');

        \Breadcrumb::add( getPageUrlByCode('PROPERTY-FOR-LEASE','title'), $slug );
    }

    public function getPropertyLeasing(Request $request)
    {
        $cities = City::has('branches')->get();
        $projects = $this->project->datatable();

        if($category_id = $request->get('category_id')){
            $projects->where('category_id',$category_id);
        }

        if($city_id = $request->get('city_id')){
            $projects->whereHas('branches',function ($query) use ($city_id){
                $query->where('branch.city_id',$city_id);
            });
        }

        $projects = $projects->paginate(9);

        foreach (getSupportedLocales() as $locale=>$value) {
            TranslateUrl::addWithLink($locale, \LaravelLocalization::getURLFromRouteNameTranslated($locale, 'routes.property_leasing_property_for_lease'));
        }

        $slug = getPageUrlByCode('PROPERTY-FOR-LEASE-SUB');
        \Breadcrumb::add(getPageUrlByCode('PROPERTY-FOR-LEASE-SUB','title'), $slug);
        return view('frontend.property_leasing.property_for_lease',compact('cities','projects'));
    }

    public function getPartnerDetail($slug)
    {
        $get_locale = App::getLocale();
        $partner = $this->partner->findBySlug($slug);
        $slug_customer = getPageUrlByCode('OUR-CUSTOMER');
        Breadcrumb::add(getPageUrlByCode('OUR-CUSTOMER','title'), $slug_customer);
        Breadcrumb::add($partner->name, url()->current());
        $metadata = DB::table('metadata')
            ->join('metadata_translations', 'metadata.id', '=', 'metadata_translations.metadata_id')
            ->where('metadata.object_id',$partner->id)
            ->where('meta_key', 'partner')
            ->where('metadata_translations.locale', $get_locale)
            ->first();
        foreach ($partner->translations as $translation) {
            TranslateUrl::addWithLink($translation->locale, \LaravelLocalization::getURLFromRouteNameTranslated($translation->locale, 'routes.property_customer', ['slug'=>$translation->slug]));
        }

        $related_partners = $this->partner->findRelatedById($partner->id);

        return view('frontend.property_leasing.property_partner_detail',compact('partner','metadata','related_partners'));
    }
}
