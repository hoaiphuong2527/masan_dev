@extends('frontend.layouts.master')

@section('style')
@endsection
@php
    $title = getPageUrlByCode('NUI-PHAO-MINING', 'title')
@endphp
@section('content')

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h3 class="titleHeading titleHeading--medium sus-title">{{$title}}</h3>
            </div>
            <div class="col-md-2 text-right">
                <a class="text-gray" href="{{ getPageUrlByCode('SUBSIDAIRY') }}">
                    {{trans('frontend.back')}}
                </a>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>

    <div class="homeSliderWrapper">
        <div class="homeSlider">
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/nuiphao/1.jpg')"><img
                        src="/assets/images/nuiphao/1.jpg" alt=""></div>
                
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/nuiphao/2.jpg')"><img
                        src="/assets/images/nuiphao/2.jpg" alt=""></div>
            
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/nuiphao/3.jpg')"><img
                        src="/assets/images/nuiphao/3.jpg" alt=""></div>
            </div>
        </div>
    </div>
    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}

                </div>
            @endif



            @if (count($block->children))
                <div class="listFund" data-waypoint="100%">
                    @foreach ($block->children as $item)
                        <div class="listFund__item">
                            <div class="row">
                                <div class="col-md-2 col-sm-3 col-4 break480">
                                    <a target="_blank" href="{{ $item->url }}">
                                        <img src="{{ $item->icon }}" alt="{{ $item->name }}">
                                    </a>
                                </div>
                                <div class="col-md-10 col-sm-9 col-8 break480">
                                    <h4>{{ $item->name }}</h4>
                                    {!! $item->content !!}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
    </section>

@endsection

@section('script')
@endsection
