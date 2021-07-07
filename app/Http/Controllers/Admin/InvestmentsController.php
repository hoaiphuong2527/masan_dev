<?php

namespace App\Http\Controllers\Admin;

use App\Helper\Breadcrumb;
use App\Models\Investments;
use App\Repositories\InvestCategoryRepository;
use App\Repositories\InvestmentsRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;

class InvestmentsController extends Controller
{
    protected $investments;
    protected $investments_category;

    public function __construct(InvestmentsRepository $investments, InvestCategoryRepository $investments_category)
    {
        $this->investments = $investments;
        $this->investments_category = $investments_category;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Breadcrumb::title(trans('admin_news.title'));

        return view('admin.investments.index');
    }

    public function datatable()
    {
        $data = $this->investments->datatable();
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
                        'link_edit' => route('admin.investments.edit', $data->id),
                        'link_delete' => route('admin.investments.destroy', $data->id),
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
        $categories = $this->investments_category->datatable()->where('parent_id',0)->get();
        return view('admin.investments.create_edit', compact('categories'));
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

        $investment_id = $this->investments->create($input);

        $locale = \App::getLocale();

        activity('Create Investments')->log(\Auth::user()->name.'('.\Auth::user()->email.') created investments "'.$input[$locale]['title'].'" (id: '.$investment_id->id.')');

        session()->flash('success', trans('admin_message.created_successful', ['attr' => trans('admin_news.news')]));

        return redirect()->route('admin.investments.index');
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

        $investments = $this->investments->find($id);

        $categories = $this->investments_category->datatable()->get();

        $metadata = $investments->meta;

        return view('admin.investments.create_edit', compact('investments', 'categories', 'metadata'));
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

        $this->investments->update($input, $id);

        $locale = \App::getLocale();

        activity('Update Investments')->log(\Auth::user()->name.'('.\Auth::user()->email.') updated investments "'.$input[$locale]['title'].'" (id: '.$id.')');

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
        $info_investments = $this->investments->find($id);

        $title = $info_investments->title;

        $this->investments->delete($id);

        activity('Delete Investments')->log(\Auth::user()->name.'('.\Auth::user()->email.') deleted investments "'.$title.'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.deleted_successful', ['attr' => trans('admin_news.news')]));

        return redirect()->back();
    }
}
