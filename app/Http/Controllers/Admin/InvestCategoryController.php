<?php

namespace App\Http\Controllers\Admin;

use App\Helper\Breadcrumb;
use App\Repositories\InvestCategoryRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;

class InvestCategoryController extends Controller
{
    protected $invest_category;

    public function __construct(InvestCategoryRepository $invest_category)
    {
        $this->invest_category = $invest_category;
    }

    public function index()
    {
        Breadcrumb::title(trans('admin_invest_category.title'));

        return view('admin.invest_category.index');
    }

    public function datatable()
    {
        $data = $this->invest_category->datatable();

        return DataTables::of($data)
            ->addColumn(
                'code',
                function ($data) {
                    return $data->code;
                }
            )
            ->addColumn(
                'translations',
                function ($data) {
                    return $data->name;
                }
            )
            ->addColumn(
                'action',
                function ($data) {
                    return view('admin.layouts.partials.table_button')->with(
                        [
                            'link_edit' => route('admin.invest_category.edit', $data->id),
                            'link_delete' => route('admin.invest_category.destroy', $data->id),
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
        Breadcrumb::title(trans('admin_news_category.create'));
        $invest_category_parent = $this->invest_category->datatable()->where('parent_id',0)->get();
        return view('admin.invest_category.create_edit',compact('invest_category_parent'));
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

        $invest_category_id = $this->invest_category->create($input);

        $locale = \App::getLocale();

        activity('Create News Category')->log(\Auth::user()->name.'('.\Auth::user()->email.') created news category "'.$input[$locale]['name'].'" (id: '.$invest_category_id->id.')');

        session()->flash('success', trans('admin_message.created_successful', ['attr' => trans('admin_invest_category.invest_category')]));

        return redirect()->route('admin.invest_category.index');
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
        Breadcrumb::title(trans('admin_invest_category.edit'));
        $invest_category_parent = $this->invest_category->datatable()->where('parent_id',0)->get();
        $invest_category = $this->invest_category->find($id);
        $metadata = $invest_category->meta;
        return view(
            'admin.invest_category.create_edit',
            compact(
                'invest_category',
                'invest_category_parent',
                'metadata'
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();

        $this->invest_category->update($input, $id);

        $locale = \App::getLocale();

        activity('Update News Category')->log(\Auth::user()->name.'('.\Auth::user()->email.') updated news category "'.$input[$locale]['name'].'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.updated_successful', ['attr' => trans('admin_invest_category.invest_category')]));

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
        $info_invest_category = $this->invest_category->find($id);

        $title = $info_invest_category->name;

        $this->invest_category->delete($id);

        activity('Delete News Category')->log(\Auth::user()->name.'('.\Auth::user()->email.') deleted invest category"'.$title.'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.deleted_successful', ['attr' => trans('admin_invest_category.invest_category')]));

        return redirect()->back();
    }
}
