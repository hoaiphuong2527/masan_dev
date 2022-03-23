@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('SUBSIDAIRY', 'title');
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/subsidiary-banner.png','text'=> $title ])

    <section class="mainContact">
        <div class="container">
                <div class="document" data-waypoint="100%">
                    <section id="subsidiary">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <article>
                            <div class="row ">
                                @if (!empty($blocks['SUBSIDIARY']) && ($operationBlock = $blocks->get('SUBSIDIARY')->first()))
                                @foreach ($operationBlock->children as $index => $conpany)
                                <div class="col-md-6 ">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg"><a href="{{$conpany->url}}"
                                                    style="background-image:url('{{$conpany->photo}}')"><img alt=""
                                                        src="{{$conpany->photo}}" /> </a></div>
                                        </div>

                                        <div class="info "><a class="title elisis-2-row" href="{{$conpany->url}}">{{$conpany->name}}</a>

                                            <div class="name">
                                                <p style="text-align: justify;">{!!$conpany->content!!}</p>
                                            </div>
                                            <a class="btn-link btn-gray" href="{{$conpany->url}}">
                                                {{ trans('button.read_more') }}</a>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            @endif
                            </div>
                        </article>

                        <div>&nbsp;</div>

                        <div>&nbsp;</div>
                    </section>
                </div>


        </div>
    </section>
@endsection

@section('script')
@endsection
