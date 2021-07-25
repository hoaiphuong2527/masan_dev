@extends('frontend.layouts.master')

@section('style')
@endsection

@section('content')

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h3 class="titleHeading titleHeading--medium sus-title">Masan Tungsten Limited Liability Company</h3>
            </div>
            <div class="col-md-2 text-right">
                <a class="text-gray" href="{{getPageUrlByCode('SUBSIDAIRY')}}">
                    ‹ Back
                    </a>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>

    <div class="homeSliderWrapper blueDots">
        <div class="homeSlider">
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/mtc/1.jpg')"><img
                        src="/assets/images/mtc/1.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/mtc/1.jpg')"><img
                        src="/assets/images/mtc/1.jpg" alt=""></div>
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/mtc/2.jpg')"><img
                        src="/assets/images/mtc/2.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/mtc/2.jpg')"><img
                        src="/assets/images/mtc/2.jpg" alt=""></div>
            </div>
            <div class="homeSlider__image">
                <div class="image" style="background-image:url('/assets/images/mtc/3.jpg')"><img
                        src="/assets/images/mtc/3.jpg" alt=""></div>
                <div class="imageFull" style="background-image:url('/assets/images/mtc/3.jpg')"><img
                        src="/assets/images/mtc/3.jpg" alt=""></div>
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
                            <h1><span style="color:#55ade2;">investor Center </span></h1>
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
