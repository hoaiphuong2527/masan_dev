<?php

namespace App\Http\Controllers\Admin;

use App\Helper\Breadcrumb;
use App\Models\News;
use App\Repositories\NewsCategoryRepository;
use App\Repositories\NewsRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;

class NewsController extends Controller
{
    protected $news;
    protected $news_category;

    public function __construct(NewsRepository $news, NewsCategoryRepository $news_category)
    {
        $this->news = $news;
        $this->news_category = $news_category;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Breadcrumb::title(trans('admin_news.title'));

        return view('admin.news.index');
    }

    public function datatable()
    {
        $data = $this->news->datatable();
        return DataTables::of($data)
//            ->addColumn(
//                'category',
//                function ($data) {
//                    return $data->category->name;
//                }
//            )
            ->addColumn(
                'translations',
                function ($data) {
                    return $data->title;
                }
            )
            ->editColumn(
                'active',
                function ($data) {
                    return $data->active ? '<span class="label label-success">'.$data->label_active.'</span>' : '<span class="label label-warning">'.$data->label_active.'</span>';
                }
            )
            ->editColumn(
                'is_top',
                function ($data) {
                    return $data->is_top ? '<i class="material-icons col-pink">check</i>' : '<i class="material-icons">more_horiz</i>';
                }
            )
            ->editColumn(
                'publish_at',
                function ($data) {
                    return $data->publish_at_format;
                }
            )
            ->addColumn(
                'action',
                function ($data) {
                    return view('admin.layouts.partials.table_button')->with(
                        [
                        'link_edit' => route('admin.news.edit', $data->id),
                        'link_delete' => route('admin.news.destroy', $data->id),
                        'id_delete' => $data->id
                        ]
                    )->render();
                }
            )
            ->escapeColumns([])
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        Breadcrumb::title(trans('admin_news.create'));

        $categories = $this->news_category->datatable()->where('parent_id',0)->get();

        return view('admin.news.create_edit', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $news_id = $this->news->create($input);

        $locale = \App::getLocale();

        activity('Create News')->log(\Auth::user()->name.'('.\Auth::user()->email.') created news "'.$input[$locale]['title'].'" (id: '.$news_id->id.')');

        session()->flash('success', trans('admin_message.created_successful', ['attr' => trans('admin_news.news')]));

        return redirect()->route('admin.news.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        Breadcrumb::title(trans('admin_news.edit'));

        $news = $this->news->find($id);

        $categories = $this->news_category->datatable()->where('parent_id',0)->get();

        $metadata = $news->meta;

        return view('admin.news.create_edit', compact('news', 'categories', 'metadata'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int                      $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();

        $this->news->update($input, $id);

        $locale = \App::getLocale();

        activity('Update News')->log(\Auth::user()->name.'('.\Auth::user()->email.') updated news "'.$input[$locale]['title'].'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.updated_successful', ['attr' => trans('admin_news.news')]));

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $info_news = $this->news->find($id);

        $title = $info_news->title;

        $this->news->delete($id);

        activity('Delete News')->log(\Auth::user()->name.'('.\Auth::user()->email.') deleted news "'.$title.'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.deleted_successful', ['attr' => trans('admin_news.news')]));

        return redirect()->back();
    }
}
