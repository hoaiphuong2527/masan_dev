@extends('frontend.layouts.master')

@section('style')
    <style>
        label.error {
            float: left;
            color: red;
            margin-bottom: 8px;
        }

    </style>
@endsection
@php
$title = getPageUrlByCode('CONTACT', 'title');
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/contact-banner.png','text'=> $title])
    <section class="mainContact pt-5">
        @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
            <div class="container">

                <div class="innerContact" data-waypoint="100%">
                    <div class="row">
                        <div class="col-md-8 col-12">
                            @include('frontend.layouts.partials.alert')
                            <h1 class="titleHeading titleHeading--medium text-blue" data-waypoint="100%">
                                {{ $block->name }}
                            </h1>
                            <h6 class="mb-4">
                                {{ $block->description }}
                            </h6>
                            <div class="formContact">
                                <form class="formValid" method="post" action="{{ route('page.storeContact') }}">
                                    {{ csrf_field() }}
                                    <div class="row">
                                        <div class="col-lg-4 col-12">
                                            <div class="form-group">
                                                <input class="form-control" value="{{ old('name') }}" type="text"
                                                    id="name" name="name" placeholder="{{ trans('contact.name') }}">
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-12">
                                            <div class="form-group">
                                                <input class="form-control" type="email" name="email"
                                                    value="{{ old('email') }}" id="email"
                                                    placeholder="{{ trans('contact.email') }}">
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-12">
                                            <div class="form-group">
                                                <input class="form-control" type="text" id="companyname"
                                                    value="{{ old('company') }}" name="company"
                                                    placeholder="{{ trans('contact.company') }}">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <textarea class="form-control" id="companyprofile" name="company_profile"
                                                    rows="4"
                                                    placeholder="{{ trans('contact.company_profile') }}">{{ old('company_profile') }}</textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <div class="form-group">
                                                <select name="department_contact" class="selectpicker show-tick "
                                                    title="{{ trans('frontend.department_contact') }}">
                                                    @foreach ($block->children as $index => $item)
                                                        <option value="{!! strip_tags($item->content) !!}">{{ $item->description }}
                                                        </option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-5 d-flex align-items-center ">
                                            <button class="btn btn-submit "
                                                type="submit">{{ trans('button.send') }}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-12">
                            <div class="formLocation" id="formLocationHD">
                                <h3 class="titleHeading titleHeading--medium text-blue">{{ trans('frontend.department_contact') }}
                                </h3>
                                @foreach ($block->children as $item)
                                    <div class="row my-2">
                                        <div class="col-md-12">
                                            <span>{{ $item->name }}</span>
                                            <span class="d-flex">
                                                <i class="fa fa-envelope mr-2 mt-1 "
                                                    aria-hidden="true"></i>{!! $item->content !!}
                                            </span>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <div class="row pt-lg-4">
                        @if (!empty($blocks['CONTACT-MAPS']) && ($blockMaps = $blocks->get('CONTACT-MAPS')->first()))
                            <div class="col-12">
                                <div class="nav-tabs-custom maps-tabs">
                                    <ul class="nav nav-tabs">
                                        @foreach ($blockMaps->children as $index => $maps)
                                            <li><a href="#tab_{{ $index }}"
                                                    class="{{ $index == 0 ? 'active' : '' }}"
                                                    data-toggle="tab">{{ $maps->name }}</a></li>
                                        @endforeach
                                    </ul>
                                    <div class="tab-content">
                                        @foreach ($blockMaps->children as $index => $maps)
                                            <div class="tab-pane {{ $index == 0 ? 'active' : '' }}"
                                                id="tab_{{ $index }}">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        {!! $maps->content !!}
                                                    </div>
                                                    <div class="col-md-4">
                                                        @if (!empty($blocks['CONTACT-ADDRESS']) && ($blockAddress = $blocks->get('CONTACT-ADDRESS')->first()))
                                                            @if (!empty($blockAddress->children[$index]))
                                                                <div class="row my-2">
                                                                    <div class="col-md-12">
                                                                        {!! $blockAddress->children[$index]->content !!}
                                                                    </div>
                                                                </div>
                                                            @endif
                                                        @endif 
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        @endif
    </section>
@endsection

@section('script')
    <script src="https://www.google.com/recaptcha/api.js?hl={{ $composer_locale }}"></script>
    <script src="assets/plugins/jquery-validation/jquery.validate.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $(".formValid").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },

                },
                messages: {
                    name: "{{ trans('home.r_name') }}",
                    email: {
                        required: "{{ trans('home.r_email') }}",
                        email: "{{ trans('home.e_valid') }}"
                    },

                }
            });
        });
    </script>
    <script>
        $('#formLocationHD ul li:first-child').prepend('<i class="icon_pin"></i>');
        $('#formLocationHD ul li:nth-child(2)').prepend('<i class="icon_phone"></i>');
        $('#formLocationHD ul li:nth-child(3):not(:last)').prepend('<i class="icon_phone"></i>');
        $('#formLocationHD ul li:last-child').prepend('<i class="icon_mail"></i>');
    </script>
@endsection
