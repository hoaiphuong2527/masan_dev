<?php

namespace App\Http\Controllers\Admin;

use App\Repositories\ContactRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Breadcrumb;
use Yajra\DataTables\Facades\DataTables;

class ContactController extends Controller
{
    protected $contact;

    public function __construct(ContactRepository $contact)
    {
        $this->contact = $contact;
    }

    public function index()
    {
        Breadcrumb::title(trans('admin_contact.title'));
        return view('admin.contact.index');
    }

    public function datatable()
    {
        $data = $this->contact->datatable();
        return DataTables::of($data)
            ->editColumn(
                'created_at',
                function ($data) {
                    return cvDbTime($data->created_at, DB_TIME, PHP_DATE_TIME);
                }
            )
            ->addColumn(
                'action',
                function ($data) {
                    return view('admin.layouts.partials.table_button')->with(
                    [
                        'btn_view_datatable' => true,
                        'link_delete' => route('admin.contact.destroy', $data->id),
                        'id_delete' => $data->id
                    ]
                )->render();
                }
            )
            ->escapeColumns(['name',  'email', 'address', 'content'])
            ->make(true);
    }

    public function destroy($id)
    {
        $contact = $this->contact->find($id);

        $title = $contact->subject;

        $info = $title.' - '.$contact->name.' ('.$contact->email.')';

        $contact->delete();

        activity('Delete Contact')->log(\Auth::user()->name.'('.\Auth::user()->email.') deleted contact "'.$info.'" (id: '.$id.')');

        session()->flash('success', trans('admin_message.deleted_successful', ['attr' => trans('admin_contact.contact')]));

        return redirect()->back();
    }
}
