@extends('frontend.layouts.master')

@section('style')
@endsection

@section('content')

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h3 class="titleHeading titleHeading--medium sus-title">H.C. Starck Tungsten Powders
                </h3>
            </div>
            <div class="col-md-2 text-right">
                <a class="text-gray" href="{{getPageUrlByCode('SUBSIDAIRY')}}">
                    ‹ Back
                    </a>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>

    <div class="homeSliderWrapper">
        <div class="homeSlider">
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/hcs/1.jpg')"><img
                        src="/assets/images/hcs/1.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/hcs/1.jpg')"><img
                        src="/assets/images/hcs/1.jpg" alt=""></div>
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/hcs/2.jpg')"><img
                        src="/assets/images/hcs/2.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/hcs/2.jpg')"><img
                        src="/assets/images/hcs/2.jpg" alt=""></div>
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/hcs/3.jpg')"><img
                        src="/assets/images/hcs/3.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/hcs/3.jpg')"><img
                        src="/assets/images/hcs/3.jpg" alt=""></div>
            </div>
        </div>
    </div>
    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{$block->name}}</h1> --}}
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}
                    {{-- <section id="subsidiary">


                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1><span style="color:#55ade2;">About us</span></h1>

                        <div>H.C. Starck Tungsten Powders is a company of the Masan High-Tech Materials Group and is one of
                            the world’s leading suppliers of tungsten products with tungsten powder plants in Germany,
                            China, and Canada. With 100 years of experience the company develops, produces, and distributes
                            high-performance powders of tungsten and its compounds. H.C. Starck Tungsten Powders offers the
                            entire range of products along the tungsten powder value chain, processing both primary and
                            secondary raw materials and turning them into high quality, customer-specific tungsten
                            chemicals, metal powders and carbides. They all meet the highest standards of quality and
                            performance.
                        </div>
                        <div>&nbsp;</div>

                        <div>Highly qualified teams in research & development and in application technology are dedicated to
                            the solutions of tomorrow. Tailor-made solutions with outstanding material properties are
                            developed in close cooperation with customers.
                        </div>
                        <div>&nbsp;</div>

                        <div>Sustainability is a significant part of the company strategy. A large proportion of used raw
                            materials are obtained through recycling. Security of supply is an important issue in today’s
                            world. H.C. Starck Tungsten Powders has access to primary and secondary raw materials and is
                            therefore independent of sources in China, for example.
                        </div>
                        <div>&nbsp;</div>
                        Find out more about us <a href="{{ getPageUrlByCode('ABOUT') }}">here</a>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </section> --}}
 
                </div>
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
