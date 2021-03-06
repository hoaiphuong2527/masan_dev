@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('CHEMILYTICS', 'title');
@endphp
@section('content')

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h3 class="titleHeading titleHeading--medium sus-title">{{$title}}
                </h3>
            </div>
            <div class="col-md-2 text-right">
                <a class="text-gray" href="{{ getPageUrlByCode('SUBSIDAIRY') }}">
                    {{ trans('frontend.back') }}
                </a>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>

    <div class="homeSliderWrapper chemilytics-silde">
        <div class="homeSlider">
            @if (!empty($blocks['BANNER']))
            @foreach ($blocks['BANNER'][0]->children as $banner)
                @if (!empty($banner))
                    <div class="homeSlider__image">
                        <div class="overplay">
                            @if ($banner->code == 'BANNER-SLIDE')
                                <div class="image" style="background-image:url('{{ $banner->photo }}')">
                                    <div class="container">
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                @endif
            @endforeach
        @endif
          
        </div>
    </div>
    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{$block->name}}</h1> --}}
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}
                    {{-- <section id="subsidiary" class="en">
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1><span style="color:#55ade2;">About us</span></h1>

                        <div style="text-align: justify;">ChemiLytics is a company of the Masan High-Tech Materials Group,
                            and is one of the largest state of the art industrial scale laboratories in Germany for
                            inorganic elemental analysis and powder characterisation.</div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">With 70 highly qualified personnel working in teams operating 7
                            days a week, ChemiLytics offers analytical services in all market segments from the sunset
                            industries of traditional manufacturing through to sunrise industries such as Additive
                            Manufacturing, Aerospace Applications or E-Mobility. Typical samples analyzed include Tungsten
                            ores, Tantalum and Niobium ores, all refractory powders and scrap, Si3N4, battery precursors
                            etc.</div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">ChemiLytics collaborates with customers allowing customization in
                            service provision from traditional samples submissions through to developing individually
                            customized solutions that can allow for the provision of on-line operational control sample
                            analysis through to having the capability to develop specific analytical and technology
                            applications for customers based on ChemiLytics unique service portfolio such as in the
                            electronics industry (WCl6 analysis).</div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">Click here to view ChemiLytics's Website&nbsp;<a
                                href="https://www.chemilytics.com/home~e.en.html">here</a></div>

                        <div>&nbsp;</div>

                        <div>&nbsp;</div>
                    </section> --}}
                    {{-- <section id="subsidiary" class="vi">
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1><span style="color:#55ade2;">V??? ch??ng t??i</span></h1>

                        <div style="text-align: justify;">ChemiLytics l?? c??ng ty thu???c Masan High-Tech Materials, s??? h???u m???t trong nh???ng ph??ng th?? nghi???m l???n nh???t v??? quy m?? c??ng nghi???p ??? ?????c, chuy??n ph??n t??ch nguy??n t??? v?? c?? v?? ?????c t??nh c???a b???t kim lo???i. 
                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">V???i 70 nh??n s??? c?? tr??nh ????? cao ??ang l??m vi???c theo nh??m ho???t ?????ng 7 ng??y m???t tu???n, ChemiLytics cung c???p d???ch v??? ph??n t??ch cho t???t c??? c??c ph??n kh??c th??? tr?????ng t??? c??c ng??nh c??ng nghi???p s???n xu???t truy???n th???ng cho ?????n c??c ng??nh c??ng nghi???p m???i ??ang tr??n ???? ph??t tri???n nh?? s???n xu???t ph??? gia, ???ng d???ng h??ng kh??ng v?? tr??? ho???c c??ng ngh??? di ?????ng ??i???n t???. C??c m???u ???????c ph??n t??ch ??i???n h??nh bao g???m qu???ng Vonfram, qu???ng Tantali v?? Niobi, t???t c??? c??c lo???i ph??? li???u v?? b???t ch???u l???a, Si3N4, ti???n ch???t c???a pin, v.v???
                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">ChemiLytics c???ng t??c v???i kh??ch h??ng cho ph??p t??y ch???nh trong cung c???p d???ch v??? t??? g???i c??c m???u truy???n th???ng ?????n ph??t tri???n c??c gi???i ph??p t??y ch???nh ri??ng c?? th??? cho ph??p cung c???p ph??n t??ch m???u ki???m so??t ho???t ?????ng tr???c tuy???n cho ?????n ph??t tri???n c??c ???ng d???ng c??ng ngh??? v?? ph??n t??ch c??? th??? cho kh??ch h??ng d???a tr??n danh m???c d???ch v??? ?????c ????o c???a ChemiLytics, ?????c bi???t trong ng??nh ??i???n t??? (ph??n t??ch WCl6).
                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">Click here to view ChemiLytics's Website&nbsp;<a
                                href="https://www.chemilytics.com/home~e.en.html">here</a></div>

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
