@extends('frontend.layouts.master')

@section('style')
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <style>
        .partner-images img{
            max-width: 100%;
        }
        .partner-info{
            padding: 0;
        }
    </style>
@endsection

@section('content')
    <section class="ourLeasing">
        <div class="container">
            <br>
            <div class="partner-content">
                <div class="partner-info col-md-8 col-sm-7 col-xs-12 pull-right">
                    <h1 class="titleHeading" data-waypoint="100%">{{$partner->name}}</h1>
                    <div class="">
                        @if($partner->pictures)
                        @php
                            $pictures = json_decode($partner->pictures,true);
                        @endphp
                        <div class="partner-images innerourPresence" data-waypoint="90%">
                            @foreach($pictures as $media)
                                <div class="img">
                                    <div class="image" style="background-image:url('{{$media}}')"><img src="{{$media}}" alt=""></div>
                                </div>
                            @endforeach
                        </div>
                        @endif
                    </div>
                    <div class="document">
                        <p>{!!$partner->content!!}</p>
                    </div>
                </div>
                <div class="partner-block-left col-md-4 col-sm-5 col-xs-12 pull-left">
                    <div class="row">
                        <div class="partner-info innerourPresence">
                            <div class="side-navigation">
                                <div class="contact-info">
                                    <h3 class="titleHeading">{{trans('partner.OUR_CUSTOMERS')}} <span class="bt-collapse"><i class="fa fa-angle-down" aria-hidden="true"></i></span></h3>
                                    <ul class="list-related-partner">
                                        @foreach ($related_partners as $item)
                                        <li>
                                            <strong>
                                                <a href="{{route('property.partner.detail',['slug' => $item->slug])}}" title="{{ $item->name }}">
                                                    {{$item->name}}
                                                </a>
                                            </strong>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {!! $partner->address !!}
                        {{-- <div class="partner-info info-child innerourPresence">
                            <div class="side-navigation">
                                <div class="contact-info">
                                    <h3 class="titleHeading">BW INDUSTRIAL DEVELOPMENT JSC
                                        <span class="title-sub">Headquarter in The South Vietnam</span>
                                    </h3>
                                    <ul class="information-list">
                                        <li><div class="icon icon-map-marker"><strong>Address:</strong> Floor 17, Becamex Building, 230 Binh Duong Boulevard, Phu Hoa Ward, Thu Dau Mot City, Binh Duong Province, Vietnam.</div></li>
                                        <li><div class="icon icon-phone"><strong>Tel:</strong> (+84) 274 7300 472</div></li>
                                        <li><div class="icon icon-phone"><strong>Hotline:</strong> (+84) 28 710 29 000</div></li>
                                        <li><div class="icon icon-email"><strong>Email:</strong> enquiry@MHT Masan.com</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="partner-info info-child innerourPresence">
                            <div class="side-navigation">
                                <div class="contact-info">
                                    <h3 class="titleHeading">
                                        <span class="title-sub">Branch Office In The South Vietnam</span>
                                    </h3>
                                    <ul class="information-list">
                                        <li><div class="icon icon-map-marker"><strong>Address:</strong> 8th Floor, Pearl Plaza, 561A Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City, Vietnam.</div></li>
                                        <li><div class="icon icon-phone"><strong>Tel:</strong> (+84) 274 7300 468</div></li>
                                        <li><div class="icon icon-phone"><strong>Hotline:</strong> (+84) 28 710 29 000</div></li>
                                        <li><div class="icon icon-email"><strong>Email:</strong> enquiry@MHT Masan.com</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="partner-info info-child innerourPresence">
                            <div class="side-navigation">
                                <div class="contact-info">
                                    <h3 class="titleHeading">
                                        <span class="title-sub">Branch Office In The North Vietnam</span>
                                    </h3>
                                    <ul class="information-list">
                                        <li><div class="icon icon-map-marker"><strong>Address:</strong> Floor 9, Vinaconex Building, 34 Lang Ha, Lang Ha Ward, Dong Da District, Hanoi, Vietnam..</div></li>
                                        <li><div class="icon icon-phone"><strong>Hotline:</strong> (+84) 28 710 29 000</div></li>
                                        <li><div class="icon icon-email"><strong>Email:</strong> enquiry@MHT Masan.com</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div> --}}
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </section>
@endsection

@section('script')
    <script>
        (function($){
            $(document).ready(function(){
                var el = $('.partner-images');
                el.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: false,
                    autoplay: true,
                    speed: 500,
                    autoplaySpeed: 3000,
                    dots: true,
                    prevArrow: '<a class="arrow--1 arrow--3 arrow--prev" href="javascript:void(0)"><i class="ic-left"></i></a>',
                    nextArrow: '<a class="arrow--1 arrow--3 arrow--next" href="javascript:void(0)"><i class="ic-right"></i></a>',
                });

                $(".bt-collapse").on("click",function(){
                    $(this).toggleClass('active');
                    if($(this).hasClass('active')){
                        $(this).find('.fa').removeClass('fa-angle-down');
                        $(this).find('.fa').addClass("fa-angle-up");
                    }
                    else{
                        $(this).find('.fa').addClass('fa-angle-down');
                        $(this).find('.fa').removeClass("fa-angle-up");
                    }
                    /* $(".info-child").slideToggle(); */
                    $(this).closest('.partner-info').find(".list-related-partner").slideToggle();
                });


                
            });
        })(jQuery);
    </script>
@endsection