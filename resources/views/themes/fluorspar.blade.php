@extends('frontend.layouts.master')

@section('style')
@endsection
@php
    $title = getPageUrlByCode('fluorspar', 'title')
@endphp
@section('content')
@include('themes.partials.base',['banner'=>'/assets/images/flourspar-banner.png','text'=> $title ])


    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{ $block->name }}</h1> --}}
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}
                </div>
            @endif
            @include('themes.partials.list_products')



            {{-- @if (count($block->children))
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
            <h1><span style="color:#00396f;"><span style="font-size:20px;">Fluorspar (CaF2)</span></span></h1>

            <div>Fluorspar is an industrial mineral from which the element Fluorine is liberated, with two major downstream
                uses;
                the production of Hydrofluoric Acid (HF) which is used as a building block for Fluorine Chemicals, and the
                production of Aluminium Fluoride (AlF3) which is an important additive for the production of Aluminium by
                electrolysis.</div>

            <div>Fluorspar also finds application in various steel and aluminum products, glass and ceramic manufacturing
                and in the
                growing nitrogen trifluoride (NF3) sector. Examples of products containing Fluorine includes household and
                automotive air conditioners, Teflon products fluoxetine medicines, welding rods, glass and ceramics.</div>

            <div>&nbsp;</div>

            <h2><span style="color:#58595b;">Fluorspar Application</span></h2>

            <div><span style="color:#58595b;">Fluorspar is the commercial name for the mineral fluorite, CaF2. In its pure
                    form it
                    consists of 51.1% calcium (Ca) and 48.9% fluorine (F). In nature however, small amounts of silicon,
                    aluminum and
                    magnesium are usually present due to impurities. Fluorspar is found in a wide range of geological
                    environments;
                    however, it most commonly occurs as vein fillings in rocks that have been subjected to hydrothermal
                    activity.
                    These veins often contain metallic ores which can include sulfides of tin, silver, zinc, copper and
                    other
                    metals.</span></div>

            <div>&nbsp;</div>

            <div><span style="color:#58595b;">Commercial fluorspar is graded in accordance to its quality. The grades depend
                    on the
                    content of fluorspar and the associated amounts of impurities (calcite, quartz, Sulphur, arsenic and
                    lead). The
                    grades are:</span></div>

            <div><span style="color:#58595b;">&nbsp;&nbsp; &nbsp;•&nbsp;&nbsp; &nbsp;Acid grade - contains a minimum of 97%
                    of
                    fluorspar, with the remaining 3% being various impurities</span></div>

            <div><span style="color:#58595b;">&nbsp;&nbsp; &nbsp;•&nbsp;&nbsp; &nbsp;Ceramic grade – contains 85% - 96%
                    fluorspar,
                    with the remaining 4% - 15% being various impurities</span></div>

            <div><span style="color:#58595b;">&nbsp;&nbsp; &nbsp;•&nbsp;&nbsp; &nbsp;Metallurgical grade – contains between
                    60% and
                    84% of fluorspar, with the remaining 16% to 40% being various impurities</span></div>

            <div><span style="color:#58595b;">The grade of fluorspar determines its end-use. Almost two thirds of all
                    fluorspar is
                    of acid grade and is predominantly used in the production of hydrofluoric acid (HF), while approximately
                    one
                    third of fluorspar is of metallurgical grade and primarily used as a flux in steelmaking and in the
                    production
                    of aluminum. A small amount of fluorspar is of ceramic grade, where it is used in the manufacture of
                    specialty
                    glass, ceramics and enamelware.</span></div>

            <div><span style="color:#58595b;">HF is a highly corrosive acid, capable of dissolving glass and many other
                    materials,
                    primarily oxides. Due to its highly corrosive characteristic, it is used in many industries, such as
                    chemical,
                    mining, refining, glass finishing, silicon chip manufacturing and cleaning. Approximately 60 % of global
                    HF
                    production is used in various fluorochemical applications, such as refrigerants, non-stick coatings,
                    medical
                    propellants and an aesthetics, whereas smaller amounts of HF are used in petroleum alkylation, and as a
                    pickling
                    agent for metal etching in the electronics industry. &nbsp;Furthermore, HF is also used for cleaning of
                    silicon
                    wafers, glass etching and in the production of polished and frosted glass.</span></div>

            <div>&nbsp;</div>

            <div><span style="color:#58595b;">In addition to the above specifications of fluorspar, fluorspar can be further
                    differentiated in accordance to its optical characteristics. Two grades can be distinguished
                    here:</span></div>

            <div><span style="color:#58595b;">&nbsp;&nbsp; &nbsp;•&nbsp;&nbsp; &nbsp;Optical grade fluorspar. Specimens of
                    fluorspar
                    with exceptional optical clarity are used as lenses, used in microscopes, telescopes &amp;
                    cameras.</span></div>

            <div><span style="color:#58595b;">&nbsp;&nbsp; &nbsp;•&nbsp;&nbsp; &nbsp;Lapidary grade fluorspar. Samples of
                    fluorspar
                    with attractive color properties and clarity are used to cut gemstones and makes ornamental
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp; &nbsp;objects. Some high-quality specimens have an ornamental use and can be carved
                    into
                    figurines and vases. &nbsp;</span></div>
            <div>&nbsp;</div>

            <h2 class="sub-title" data-waypoint="100%"><span style="color:#00396f;">Other Products</span></h2>

            <div class="listLease mediaEffect-2 active px-0 mt-3" data-waypoint="100%">
                <div class="row">
                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <h2 class="image effectImg"><a href=""
                                        style="background-image:url('/assets/images/Bismuth.jpg')">
                                        <img alt="Bismuth" src="/assets/images/Bismuth.jpg" /> </a></h2>

                                <h4>Bismuth (Bi)</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <div class="image effectImg"><a href=""
                                        style="background-image:url('/assets/images/Fluorspar.jpg')"> <img alt="Fluorspar"
                                            src="/assets/images/Fluorspar.jpg" /> </a></div>

                                <h4>Fluorspar (CaF2)</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <div class="image effectImg"><a href=""
                                        style="background-image:url('/assets/images/Tungsten.jpg')">
                                        <img alt="Tungsten (W)" src="/assets/images/Tungsten.jpg" /> </a></div>

                                <h4>Tungsten (W)</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}

        </div>
    </section>
@endsection

@section('script')
@endsection
