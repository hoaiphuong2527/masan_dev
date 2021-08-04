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
                <div class="imageFull" style="background-image:url('/assets/images/nuiphao/1.jpg')"><img
                        src="/assets/images/nuiphao/1.jpg" alt=""></div>
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/nuiphao/2.jpg')"><img
                        src="/assets/images/nuiphao/2.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/nuiphao/2.jpg')"><img
                        src="/assets/images/nuiphao/2.jpg" alt=""></div>
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/nuiphao/3.jpg')"><img
                        src="/assets/images/nuiphao/3.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/nuiphao/3.jpg')"><img
                        src="/assets/images/nuiphao/3.jpg" alt=""></div>
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

                        <div style="text-align: justify;">The Nui Phao mine, which is operated by Nui Phao Mining Company
                            Ltd. (“NPMC”), a wholly owned subsidiary of Masan High-Tech Materials, is situated within three
                            communes (Hung Son, Ha Thuong, and Tan Linh) of Dai Tu district in Thai Nguyen province. The
                            site is approximately 80 km from Hanoi and is accessible via highway. Road and rail links
                            connect the mine to the nearest ports of Hai Phong and Quang Ninh province, from which the
                            products can be shipped to international customers. As of 2014, the Nui Phao proven and probable
                            ore reserves are estimated at 66 million tonnes, with an estimated mine life of 20 years. &nbsp;
                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">The major project components are:</div>

                        <div>
                            <ul>
                                <li style="text-align: justify;">Open pit poly-metallic mine</li>
                                <li style="text-align: justify;">Waste rock disposal facilities</li>
                                <li style="text-align: justify;">Modern mine plant and facilities, including crushing,
                                    grinding, thickening, flotation, leaching and gravity recovery facilities</li>
                                <li style="text-align: justify;">A suite of commercial product streams including Tungsten,
                                    Copper, Bismuth and Fluorspar concentrates which are either processed into value added
                                    products onsite (Tungsten and Bismuth) or sold as highend commodities</li>
                                <li style="text-align: justify;">A Tailings Storage Facility (TSF) with water and tailings
                                    management ponds</li>
                                <li style="text-align: justify;">Buffer zones, relocation sites, haul roads, and mine
                                    services</li>
                            </ul>

                            <div style="text-align: justify;">Products from Nui Phao are shipped to worldwide markets
                                (including well established customer networks) from Quang Ninh Port (in Ha Long City, 197 km
                                to the southeast of the Project site). The port is also used to receive equipment and
                                materials required to run the mine. &nbsp;</div>

                            <div style="text-align: justify;">&nbsp;</div>

                            <div style="text-align: justify;">NPMC operates at the cutting edge of production of its product
                                suite. Investment in research and development continues to deliver processing, equipment,
                                and chemical improvements. Processing operations are supported by advanced mining and
                                processing management software to maximize recovery and minimize costs and resource loss.
                            </div>

                            <div>&nbsp;</div>
                        </div>

                        <div>
                            <h1><span style="color:#55ade2;">Investor Center </span></h1>
                        </div>

                        <div>Corporate Announcements:&nbsp;</div>

                        <div>&nbsp;</div>

                        <div><strong>2021</strong></div>

                        <div>&nbsp;</div>

                        <hr />
                        <div>&nbsp;</div>

                        <div class="row">
                            <div class="col-md-6">
                                <ul class="location">
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Notice of interest
                                                rate of bonds NPM11910 for the interest period 05 (from and including June
                                                3, 2021 to and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>28 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Interest rate
                                                announcement of NPM11909 Bond for interest period 05 (from and including May
                                                29, 2021 to and excluding November 29, 2021)</span></span></a><br />
                                        <strong><span>24 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Notice of interest
                                                rate of bonds NPM11910 for the interest period 05 (from and including June
                                                3, 2021 to and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>5 May 2021 </span></strong>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-6">
                                <ul class="location">
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Notice of interest
                                                rate of bonds NPM11910 for the interest period 05 (from and including June
                                                3, 2021 to and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>28 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Interest rate
                                                announcement of NPM11909 Bond for interest period 05 (from and including May
                                                29, 2021 to and excluding November 29, 2021)</span></span></a><br />
                                        <strong><span>24 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i><span
                                                    style="background-color:null;"> Notice of interest rate of bonds
                                                    NPM11910 for the interest period 05 (from and including June 3, 2021 to
                                                    and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>5 May 2021 </span></strong>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div>&nbsp;</div>
                            <span style="color:#55ade2;">Read more &gt;&nbsp;</span>

                            <div>&nbsp;</div>

                            <div>&nbsp;</div>
                        </div>
                    </section> --}}

                    {{-- <section id="subsidiary" class="vi">
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1><span style="color:#55ade2;">Về chúng tôi</span></h1>

                        <div style="text-align: justify;">Mỏ Núi Pháo là một mỏ đa kim nằm tại ba xã (Hùng Sơn, Hà Thượng và Tân Linh) của huyện Đại Từ, tỉnh Thái Nguyên, được vận hành bởi Công ty TNHH Khai thác Chế biến Khoáng sản Núi Pháo (“NPMC”) – là công ty con do Masan High-Tech Materials sở hữu 100%. Nhà máy cách Hà Nội khoảng 80 km và có thể tiếp cận bằng đường cao tốc. Hệ thống đường bộ và đường sắt kết nối mỏ với các cảng gần nhất của Hải Phòng và Quảng Ninh, từ đó các sản phẩm có thể được vận chuyển đến với các khách hàng quốc tế. Tại thời điểm năm 2014, trữ lượng đã được xác nhận của mỏ Núi Pháo là khoảng 66 triệu tấn, với vòng đời mở ước tính là 20 năm.  

                        </div>

                        <div style="text-align: justify;">&nbsp;</div>

                        <div style="text-align: justify;">Các khu vực chính của Dự án bao gồm: </div>

                        <div>
                            <ul>
                                <li style="text-align: justify;">Moong khai thác lộ thiên, </li>
                                <li style="text-align: justify;">Khu chứa đất đá thải,</li>
                                <li style="text-align: justify;">Nhà máy chế biến hiện đại, gồm các khu vực: nghiền thô, nghiền tinh, cô đặc, tuyển nổi và tuyển trọng lực,</li>
                                <li style="text-align: justify;">Nhà máy chế biến sâu Vonfram chế biến tinh quặng Vonfram và các vật liệu có chứa Vonfram thành các sản phẩm như ST, APT, BTO, và YTO có giá trị gia tăng cao hơn, 
                                </li>
                                <li style="text-align: justify;">Khu chứa quặng đuôi (TSF) có nước và các ngăn quản lý quặng đuôi; 
                                </li>
                                <li style="text-align: justify;">Vùng đệm, các khu tái định cư, đường nội mỏ, và các khu dịch vụ khai thác.  
                                </li>
                            </ul>

                            <div style="text-align: justify;">Sản phẩm của mỏ Núi Pháo được vận chuyển tới các thị trường trên toàn thế giới (bao gồm các mạng lưới khách hàng dài hạn) từ cảng Quảng Ninh (Thành phố Hạ Long, cách mỏ Núi Pháo 197 km về phía Đông Nam). Cảng này cũng là nơi nhập các thiết bị và vật liệu cần thiết để vận hành mỏ.  
                            </div>

                            <div style="text-align: justify;">&nbsp;</div>

                            <div style="text-align: justify;">NPMC vận hành một quy trình sản xuất hiện đại bậc nhất đối với nhóm sản phẩm đặc trưng của Công ty. Việc đầu tư vào nghiên cứu và phát triển tiếp tục mang lại các cải tiến về mặt quy trình, thiết bị và hóa chất. Quy trình sản xuất được hỗ trợ bởi các phần mềm quản lý khai thác và chế biến tiên tiến để tối ưu hóa tỷ lệ thu hồi và giảm thiểu lãng phí tài nguyên.

                            </div>

                            <div>&nbsp;</div>
                        </div>

                        <div>
                            <h1><span style="color:#55ade2;">Investor Center </span></h1>
                        </div>

                        <div>Corporate Announcements:&nbsp;</div>

                        <div>&nbsp;</div>

                        <div><strong>2021</strong></div>

                        <div>&nbsp;</div>

                        <hr />
                        <div>&nbsp;</div>

                        <div class="row">
                            <div class="col-md-6">
                                <ul class="location">
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Notice of interest
                                                rate of bonds NPM11910 for the interest period 05 (from and including June
                                                3, 2021 to and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>28 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Interest rate
                                                announcement of NPM11909 Bond for interest period 05 (from and including May
                                                29, 2021 to and excluding November 29, 2021)</span></span></a><br />
                                        <strong><span>24 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Notice of interest
                                                rate of bonds NPM11910 for the interest period 05 (from and including June
                                                3, 2021 to and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>5 May 2021 </span></strong>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-6">
                                <ul class="location">
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Notice of interest
                                                rate of bonds NPM11910 for the interest period 05 (from and including June
                                                3, 2021 to and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>28 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i> Interest rate
                                                announcement of NPM11909 Bond for interest period 05 (from and including May
                                                29, 2021 to and excluding November 29, 2021)</span></span></a><br />
                                        <strong><span>24 May 2021 </span></strong>
                                    </li>
                                    <li class="location__item"><a href="javascript:void(0)"><span
                                                style="color:#2980b9;"><i><img alt=""
                                                        src="/assets/images/icons/pdf-icon.svg" /></i><span
                                                    style="background-color:null;"> Notice of interest rate of bonds
                                                    NPM11910 for the interest period 05 (from and including June 3, 2021 to
                                                    and excluding December 3, 2021)</span></span></a><br />
                                        <strong><span>5 May 2021 </span></strong>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div>&nbsp;</div>
                            <span style="color:#55ade2;">Read more &gt;&nbsp;</span>

                            <div>&nbsp;</div>

                            <div>&nbsp;</div>
                        </div>
                    </section> --}}




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
