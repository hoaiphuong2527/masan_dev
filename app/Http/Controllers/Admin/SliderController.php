<?php

namespace App\Http\Controllers\Admin;

use App\Helper\Breadcrumb;
use App\Repositories\SliderRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Yajra\DataTables\Facades\DataTables;

class SliderController extends Controller
{
    protected $slider;

    public function __construct(SliderRepository $slider)
    {
        $this->slider = $slider;
    }

    public function index()
    {
        Breadcrumb::title(trans('admin_slider.title'));

        return view('admin.slider.index');
    }

    public function datatable()
    {
        $data = $this->slider->datatable();

        return DataTables::of($data)
            ->editColumn('image', function ($data) {
                return $data->image ? '<img height="70" src="'. $data->image .'" />' : '---';
            })
            ->addColumn(
                'translations', function ($data) {
                    return $data->name;
                }
            )
            ->addColumn(
                'action', function ($data) {
                    return view('admin.layouts.partials.table_button')->with(
                        [
                        'link_edit' => route('admin.slider.edit', $data->id),
                        'link_delete' => route('admin.slider.destroy', $data->id),
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
        Breadcrumb::title(trans('admin_slider.create'));

        return view('admin.slider.create_edit');
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

        $slider_id = $this->slider->create($input);

        $locale = \App::getLocale();

        activity('Create Slider')->log(\Auth::user()->name.'('.\Auth::user()->email.') created slider "'.$input[$locale]['name'].'" (id: '.$slider_id->id.')');

        session()->flash('success', trans('admin_message.created_successful', ['attr' => trans('admin_slider.slider')]));

        return redirect()->route('admin.slider.index');
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
        Breadcrumb::title(trans('admin_slider.edit'));

        $slider = $this->slider->find($id);

        return view(
            'admin.slider.create_edit', compact(
                'slider'
            )
        );
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

        $this->slider->update($input, $id);

        $locale = \App::getLocale();

        activity('Update Slider')->log(\Auth::user()->name.'('.\Auth::user()->email.') updated slider "'.$input[$locale]['name'].'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.updated_successful', ['attr' => trans('admin_slider.slider')]));

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
        $info_slider = $this->slider->find($id);

        $title = $info_slider->name;

        $this->slider->delete($id);

        activity('Delete Slider')->log(\Auth::user()->name.'('.\Auth::user()->email.') deleted slider "'.$title.'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.deleted_successful', ['attr' => trans('admin_slider.slider')]));

        return redirect()->back();
    }
}
