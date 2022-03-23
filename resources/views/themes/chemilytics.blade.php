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

                        <h1><span style="color:#55ade2;">Về chúng tôi</span></h1>

                        <div style="text-align: justify;">ChemiLytics là công ty thuộc Masan High-Tech Materials, sở hữu một trong những phòng thí nghiệm lớn nhất về quy mô công nghiệp ở Đức, chuyên phân tích nguyên tố vô cơ và đặc tính của bột kim loại. 
                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">Với 70 nhân sự có trình độ cao đang làm việc theo nhóm hoạt động 7 ngày một tuần, ChemiLytics cung cấp dịch vụ phân tích cho tất cả các phân khúc thị trường từ các ngành công nghiệp sản xuất truyền thống cho đến các ngành công nghiệp mới đang trên đà phát triển như sản xuất phụ gia, ứng dụng hàng không vũ trụ hoặc công nghệ di động điện tử. Các mẫu được phân tích điển hình bao gồm quặng Vonfram, quặng Tantali và Niobi, tất cả các loại phế liệu và bột chịu lửa, Si3N4, tiền chất của pin, v.v…
                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">ChemiLytics cộng tác với khách hàng cho phép tùy chỉnh trong cung cấp dịch vụ từ gửi các mẫu truyền thống đến phát triển các giải pháp tùy chỉnh riêng có thể cho phép cung cấp phân tích mẫu kiểm soát hoạt động trực tuyến cho đến phát triển các ứng dụng công nghệ và phân tích cụ thể cho khách hàng dựa trên danh mục dịch vụ độc đáo của ChemiLytics, đặc biệt trong ngành điện tử (phân tích WCl6).
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
