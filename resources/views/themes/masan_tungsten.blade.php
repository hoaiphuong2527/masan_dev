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
                        <div>The objective of the company is to connect NPMC???s business to the global Tungsten market and enable advanced processing of Vietnam???s strategic tungsten resources into higher value tungsten chemicals, thus enabling further value extraction from the Vietnamese strategic resources. In August 2018, NPMC acquired the 49% capital contribution by H.C. Starck GmbH in the Joint Venture. The Joint Venture then changed its name to Masan Tungsten Limited Liability Company. In September 2019, MSR announced the acquisition of H.C. Starck???s global Tungsten Division (???HCS???). HCS is a leading manufacturer of midstream tungsten products such as hi-tech Tungsten Metal powders and Carbides. HCS has operating production hubs in Germany, Canada and China serving customers all over the world. 


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
                                <li>Positive market reputation by affiliation with a technology and skills provider ??? H.C. Starck has 100 years of experience and is a leading premium supplier of Tungsten, </li>
                                <li>Processing technology transfer from H.C. Starck Germany, </li>
                                <li>Opportunities for further development of in-country tungsten scrap, and</li>
                                <li>Sources into high end specific products. </li>
                            </ul>

                            <div>
                                These factors have accelerated the acceptance of a Vietnamese business to the world???s Tungsten producer map as well as contributed to improved sales performance.
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

                        <h1><span style="color:#55ade2;">V??? ch??ng t??i</span></h1>

                        <div>C??ng ty TNHH Vonfram Masan ??? MTC, ti???n th??n l?? C??ng ty TNHH Tinh luy???n Vonfram N??i Ph??o ??? H.C.
                            Starck, ???????c th??nh l???p n??m 2014 l?? m???t li??n doanh v???i H.C. Starck GmbH (?????c), m???t c??ng ty s???n
                            xu???t kim lo???i c??ng ngh??? h??ng ?????u th??? gi???i, ?????ng th???i c??ng l?? m???t trong nh???ng c??ng ty l???n nh???t
                            trong ng??nh vonfram to??n c???u.
                        </div>
                        <div>&nbsp;</div>
                        <div>MTC ???????c th??nh l???p ????? k???t n???i ho???t ?????ng kinh doanh c???a NPMC v???i th??? tr?????ng vonfram to??n c???u v??
                            t???o ??i???u ki???n cho ho???t ?????ng ch??? bi???n s??u ngu???n t??i nguy??n chi???n l?????c c???a Vi???t Nam th??nh c??c s???n
                            ph???m h??a ch???t vonfram c?? gi?? tr??? cao h??n nh???m ph??t huy gi?? tr??? ngu???n t??i nguy??n n??y. Th??ng
                            8/2018, NPMC ???? mua l???i 49% ph???n v???n g??p c???a H.C. Starck GmbH t???i C??ng ty li??n doanh N??i Ph??o ???
                            H.C. Starck. Li??n doanh N??i Ph??o ??? H.C. Starck sau ???? ?????i t??n th??nh C??ng ty TNHH Vonfram Masan
                            (MTC). Th??ng 9/2019, MHT ???? c?? th??ng b??o v??? vi???c mua l???i n???n t???ng kinh doanh Vonfram to??n c???u
                            c???a T???p ??o??n H.C. Starck (???HCS???). HCS l?? nh?? s???n su???t c??c s???n ph???m vonfram c???n s??u h??ng ?????u th???
                            gi???i nh?? b???t kim lo???i Vonfram v?? vonfram c??c-bua. HCS c?? m???t m???ng l?????i c??c c?? s??? s???n xu???t t???i
                            Ch??u ??u, B???c M??? v?? Trung Qu???c, ph???c v??? m???i kh??ch h??ng tr??n to??n th??? gi???i.
                        </div>
                        <div>&nbsp;</div>
                        <div>B???n s???n ph???m ch??nh c???a nh?? m??y ???????c d??ng trong s???n xu???t Vonfram v?? Vonfram Cacbua bao g???m: APT
                            (Ammonium Paratungstate - mu???i Amoni vonfram); BTO (Blue Tungsten Oxide ??? Oxit Vonfram xanh);
                            YTO (Yellow Tungsten Oxide ??? Oxit Vonfram v??ng); v?? ST (Sodium Tungstate ??? Mu???i Natri Vonfram).
                        </div>
                        <div>&nbsp;</div>
                        <div>MTC s???n xu???t c??c s???n ph???m Vonfram c?? ????? tinh khi???t cao v?? s???c c???nh tranh tr??n to??n c???u ?????ng
                            th???i ???????c v???n h??nh t???i Vi???t Nam. ??i???u n??y khi???n MTC tr??? th??nh m???t trong s??? ??t nh?? cung c???p
                            vonfram ngo??i Trung Qu???c tr???c ti???p s???n xu???t ra s???n ph???m t???i ngu???n. Nh?? m??y s???n xu???t c???a MTC c??
                            nh???ng l???i th??? v??? c?? s??? s???n xu???t hi???n ?????i c?? kh??? n??ng s???n xu???t c??c s???n ph???m ch???t l?????ng cao ????p
                            ???ng y??u c???u c??? th??? c???a kh??ch h??ng;
                        </div>

                        <div>
                            <ul>
                                <li>Chi ph?? chuy???n ?????i th???p v?? ???????c h?????ng c??c ch??nh s??ch ??u ????i v??? thu???;
                                </li>
                                <li>Uy t??n t???t tr??n th??? tr?????ng nh??? s??? h??? tr??? v??? c??ng ngh??? v?? k??? thu???t t??? H.C. Starck v???i g???n
                                    100 n??m kinh nghi???m ho???t ?????ng v?? l?? nh?? cung c???p s???n ph???m kim lo???i c??ng ngh??? cao ??u vi???t
                                    h??ng ?????u th??? gi???i;
                                </li>
                                <li>Chuy???n giao c??ng ngh??? t??? H.C. Starck (?????c); v??
                                </li>
                                <li>C?? h???i ????? ti???p t???c ph??t tri???n c??c ngu???n ph??? li???u vonfram trong n?????c th??nh c??c s???n ph???m
                                    c??ng ngh??? cao ?????c th??.
                                </li>
                            </ul>

                            <div>
                                Nh???ng l???i th??? tr??n gi??p ?????y nhanh ti???n tr??nh c??ng nh???n v??? th??? c???a m???t doanh nghi???p Vi???t Nam
                                tr??n b???n ????? cung ???ng vonfram to??n c???u c??ng nh?? g??p ph???n th??c ?????y doanh s??? b??n h??ng.
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
