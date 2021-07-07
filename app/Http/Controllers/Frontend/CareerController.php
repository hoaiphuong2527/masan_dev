<?php

namespace App\Http\Controllers\Frontend;

use App\Helper\TranslateUrl;
use App\Models\City;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\CareerRepository;
use App\Repositories\CareerCategoryRepository;
use App\Http\Requests\Frontend\CareerApplyRequest;
use App\Models\Career;
use App\Models\Slider;
use Breadcrumb;
use Mail;
use App\Models\Page;
use App\Repositories\PageRepository;

class CareerController extends Controller
{
	protected $career;
	protected $category;
    private $page;

	public function __construct(
        PageRepository $page,
		CareerRepository $career,
		CareerCategoryRepository $category)
	{
        $this->page = $page;
		$this->career = $career;
		$this->category = $category;

        Breadcrumb::add( trans('frontend.careers'), getPageUrlByCode('CAREER-CULTURE'));
        Breadcrumb::add(trans('frontend.current_opening'), route('career.opening.index'));
	}

    public function index(Request $request)
    {
        $cities = City::all();
        $categories = $this->category->all();
        $career = $this->career->datatable()->orderByDesc('created_at')->where('status','PUBLISH');

        if($department_id = $request->get('department_id')){
            $career->where('category_id',$department_id);
        }

        if($city_id = $request->get('city_id')){
            $career->whereHas('cities',function ($query) use ($city_id){
                $query->where('city.id',$city_id);
            });
        }

        if($q  = $request->get('q')){
            $career->whereTranslationLike('name',"%$q%");
        }

        $career = $career->get();

        $page = $this->page->findBySlug('career/current-opening');
        $metadata = $page->meta;
        
        foreach (getSupportedLocales() as $locale=>$value) {
            TranslateUrl::addWithLink($locale, \LaravelLocalization::getURLFromRouteNameTranslated($locale, 'routes.career_current_opening'));
        }

        return view('themes.career_opening', compact('cities','categories','career','metadata'));
    }

    public function show($slug)
    {
        $career = $this->career->findBySlug($slug);
        $other_career = $this->career->datatable()->where('id','!=',$career->id)->limit(15)->get();
        Breadcrumb::add($career->name, url()->current());

        foreach ($career->translations as $translation) {
            TranslateUrl::addWithLink($translation->locale, \LaravelLocalization::getURLFromRouteNameTranslated($translation->locale, 'routes.career_current_opening_detail', ['slug'=>$translation->slug]));
        }
        $metadata = $career->meta;
        return view('themes.career_opening_detail',compact('career','other_career','metadata'));
    }
}
