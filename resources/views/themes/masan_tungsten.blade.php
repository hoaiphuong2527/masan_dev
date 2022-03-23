@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('MASAN-TUNGSTEN', 'title');
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
                    {{ trans('frontend.back') }}
                </a>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>

    <div class="homeSliderWrapper blueDots">
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

                        <div>Masan Tungsten Limited Liability Company, formerly Nui Phao - H.C. Starck Tungsten Chemicals Manufacturing, was established in 2014 as a joint venture with H.C. Starck GmbH, a leading worldwide manufacturer of technological metals and one of the biggest companies in the global Tungsten industry. 
                        </div>
                        <div>&nbsp;</div>
                        <div>The objective of the company is to connect NPMC’s business to the global Tungsten market and enable advanced processing of Vietnam’s strategic tungsten resources into higher value tungsten chemicals, thus enabling further value extraction from the Vietnamese strategic resources. In August 2018, NPMC acquired the 49% capital contribution by H.C. Starck GmbH in the Joint Venture. The Joint Venture then changed its name to Masan Tungsten Limited Liability Company. In September 2019, MSR announced the acquisition of H.C. Starck’s global Tungsten Division (“HCS”). HCS is a leading manufacturer of midstream tungsten products such as hi-tech Tungsten Metal powders and Carbides. HCS has operating production hubs in Germany, Canada and China serving customers all over the world. 


                        </div>
                        <div>&nbsp;</div>
                        <div>The four main products of the MTC facility used in production of Tungsten and Tungsten Carbides are: APT (Ammonium Paratungstate); BTO (Blue Tungsten Oxide); YTO (Yellow Tungsten Oxide) and ST (Sodium Tungstate). 

                        </div>
                        <div>&nbsp;</div>
                        <div>MTC produces high purity, world-competitive products while operating in Vietnam. This places it among the few tungsten suppliers outside of China who are directly connected to a resource base. The MTC factory has the advantages of secured long term supply source (NPMC) with modern production facilities able to produce high quality products tailored to specific requirements of customers, 

                        </div>

                        <div>
                            <ul>
                                <li>Low conversion costs and preferential tax policies, </li>
                                <li>Positive market reputation by affiliation with a technology and skills provider – H.C. Starck has 100 years of experience and is a leading premium supplier of Tungsten, </li>
                                <li>Processing technology transfer from H.C. Starck Germany, </li>
                                <li>Opportunities for further development of in-country tungsten scrap, and</li>
                                <li>Sources into high end specific products. </li>
                            </ul>

                            <div>
                                These factors have accelerated the acceptance of a Vietnamese business to the world’s Tungsten producer map as well as contributed to improved sales performance.
                            </div>

                            <div>&nbsp;</div>

                     
                        </div>

                        <div>
                            <h1><span style="color:#55ade2;">Investor Center </span></h1>
                        </div>

                        <div>Corporate Announcements:&nbsp;</div>
                        <div>&nbsp;</div>

                        <div>2021</div>

                        <div>&nbsp;</div>
                        <hr>
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

                        <div>Công ty TNHH Vonfram Masan – MTC, tiền thân là Công ty TNHH Tinh luyện Vonfram Núi Pháo – H.C.
                            Starck, được thành lập năm 2014 là một liên doanh với H.C. Starck GmbH (Đức), một công ty sản
                            xuất kim loại công nghệ hàng đầu thế giới, đồng thời cũng là một trong những công ty lớn nhất
                            trong ngành vonfram toàn cầu.
                        </div>
                        <div>&nbsp;</div>
                        <div>MTC được thành lập để kết nối hoạt động kinh doanh của NPMC với thị trường vonfram toàn cầu và
                            tạo điều kiện cho hoạt động chế biến sâu nguồn tài nguyên chiến lược của Việt Nam thành các sản
                            phẩm hóa chất vonfram có giá trị cao hơn nhằm phát huy giá trị nguồn tài nguyên này. Tháng
                            8/2018, NPMC đã mua lại 49% phần vốn góp của H.C. Starck GmbH tại Công ty liên doanh Núi Pháo –
                            H.C. Starck. Liên doanh Núi Pháo – H.C. Starck sau đó đổi tên thành Công ty TNHH Vonfram Masan
                            (MTC). Tháng 9/2019, MHT đã có thông báo về việc mua lại nền tảng kinh doanh Vonfram toàn cầu
                            của Tập đoàn H.C. Starck (“HCS”). HCS là nhà sản suất các sản phẩm vonfram cận sâu hàng đầu thế
                            giới như bột kim loại Vonfram và vonfram các-bua. HCS có một mạng lưới các cơ sở sản xuất tại
                            Châu Âu, Bắc Mỹ và Trung Quốc, phục vụ mọi khách hàng trên toàn thế giới.
                        </div>
                        <div>&nbsp;</div>
                        <div>Bốn sản phẩm chính của nhà máy được dùng trong sản xuất Vonfram và Vonfram Cacbua bao gồm: APT
                            (Ammonium Paratungstate - muối Amoni vonfram); BTO (Blue Tungsten Oxide – Oxit Vonfram xanh);
                            YTO (Yellow Tungsten Oxide – Oxit Vonfram vàng); và ST (Sodium Tungstate – Muối Natri Vonfram).
                        </div>
                        <div>&nbsp;</div>
                        <div>MTC sản xuất các sản phẩm Vonfram có độ tinh khiết cao và sức cạnh tranh trên toàn cầu đồng
                            thời được vận hành tại Việt Nam. Điều này khiến MTC trở thành một trong số ít nhà cung cấp
                            vonfram ngoài Trung Quốc trực tiếp sản xuất ra sản phẩm tại nguồn. Nhà máy sản xuất của MTC có
                            những lợi thế về cơ sở sản xuất hiện đại có khả năng sản xuất các sản phẩm chất lượng cao đáp
                            ứng yêu cầu cụ thể của khách hàng;
                        </div>

                        <div>
                            <ul>
                                <li>Chi phí chuyển đổi thấp và được hưởng các chính sách ưu đãi về thuế;
                                </li>
                                <li>Uy tín tốt trên thị trường nhờ sự hỗ trợ về công nghệ và kỹ thuật từ H.C. Starck với gần
                                    100 năm kinh nghiệm hoạt động và là nhà cung cấp sản phẩm kim loại công nghệ cao ưu việt
                                    hàng đầu thế giới;
                                </li>
                                <li>Chuyển giao công nghệ từ H.C. Starck (Đức); và
                                </li>
                                <li>Cơ hội để tiếp tục phát triển các nguồn phế liệu vonfram trong nước thành các sản phẩm
                                    công nghệ cao đặc thù.
                                </li>
                            </ul>

                            <div>
                                Những lợi thế trên giúp đẩy nhanh tiến trình công nhận vị thế của một doanh nghiệp Việt Nam
                                trên bản đồ cung ứng vonfram toàn cầu cũng như góp phần thúc đẩy doanh số bán hàng.
                            </div>

                            <div>&nbsp;</div>


                        </div>

                        <div>
                            <h1><span style="color:#55ade2;">Investor Center </span></h1>
                        </div>

                        <div>Corporate Announcements:&nbsp;</div>
                        <div>&nbsp;</div>

                        <div>2021</div>

                        <div>&nbsp;</div>
                        <hr>
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
