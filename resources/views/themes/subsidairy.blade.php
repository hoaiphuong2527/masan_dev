@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('SUBSIDAIRY', 'title');
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/subsidiary-banner.png','text'=> $title ])

    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                <div class="document" data-waypoint="100%">
                    {{-- {!! $block->content !!} --}}
                    <section id="subsidiary">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <article>
                            <div class="row ">
                                @if (!empty($blocks['SUBSIDIARY']) && ($operationBlock = $blocks->get('SUBSIDIARY')->first()))
                                @foreach ($operationBlock->children as $index => $conpany)
                                <div class="col-md-6 ">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg"><a href="{{$conpany->url}}"
                                                    style="background-image:url('{{$conpany->photo}}')"><img alt=""
                                                        src="{{$conpany->photo}}" /> </a></div>
                                        </div>

                                        <div class="info"><a class="title" href="{{$conpany->url}}">{{$conpany->name}}</a>

                                            <div class="name">
                                                <p style="text-align: justify;">{!!$conpany->content!!}</p>
                                            </div>
                                            <a class="btn-link btn-gray" href="{{$conpany->url}}">
                                                {{ trans('button.read_more') }}</a>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            @endif
                                {{-- <div class="col-md-6 ">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg"><a href="https://aimedia.asia/nui-phao-mining"
                                                    style="background-image:url('/assets/images/nuiphao.png')"><img alt=""
                                                        src="/assets/images/nuiphao.png" /> </a></div>
                                        </div>

                                        <div class="info"><a class="title" href="https://aimedia.asia/nui-phao-mining">Nui
                                                Phao Mining Company</a>

                                            <div class="name">
                                                <p style="text-align: justify;">The Nui Phao mine, which is operated by Nui
                                                    Phao Mining Company&nbsp;(“NPMC”), a wholly owned subsidiary of Masan
                                                    High-Tech Materials, is situated within three communes (Hung Son, Ha
                                                    Thuong, and Tan Linh) of Dai Tu district in Thai Nguyen province. The
                                                    site is approximately 80 km from Hanoi and is accessible via highway.
                                                    Road and rail links connect the mine to the nearest ports of Hai Phong
                                                    and Quang Ninh province, from which the products can be shipped to
                                                    international customers. As of 2014, the Nui Phao proven and probable
                                                    ore reserves are estimated at 66 million tonnes, with an estimated mine
                                                    life of 20 years.</p>
                                            </div>
                                            <a class="btn-link btn-gray" href="https://aimedia.asia/nui-phao-mining">Read
                                                more</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg"><a href="https://aimedia.asia/masan-tungsten"
                                                    style="background-image:url('/assets/images/masan_tunsteng.png')"><img
                                                        alt="" src="/public/upload/images/subsidairy/masan_tunsteng.png" />
                                                </a></div>
                                        </div>

                                        <div class="info"><a class="title" href="https://aimedia.asia/masan-tungsten">Masan
                                                Tungsten Company</a>

                                            <div class="name">
                                                <p class="card-text" style="text-align: justify;">Masan Tungsten Company
                                                    (MTC), formerly Nui Phao - H.C. Starck Tungsten Chemicals Manufacturing,
                                                    was established in 2014 as a joint venture with H.C. Starck GmbH, a
                                                    leading worldwide manufacturer of technological metals and one of the
                                                    biggest companies in the global Tungsten industry.</p>

                                                <p class="card-text" style="text-align: justify;">The objective of the
                                                    company is to connect NPMC’s business to the global Tungsten market and
                                                    enable advanced processing of Vietnam’s strategic tungsten resources
                                                    into higher value tungsten chemicals, thus enabling further value
                                                    extraction from the Vietnamese strategic</p>

                                                <p class="card-text" style="text-align: justify;">&nbsp;</p>
                                            </div>
                                            <a class="btn-link btn-gray" href="https://aimedia.asia/masan-tungsten">Read
                                                more</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg"><a href="https://aimedia.asia/h-c-starck"
                                                    style="background-image:url('/assets/images/hc_starck.png')"><img alt=""
                                                        src="/assets/images/hc_starck.png" /> </a></div>
                                        </div>

                                        <div class="info"><a class="title" href="https://aimedia.asia/h-c-starck">H.C.
                                                Starck Tungsten Powders</a>

                                            <div class="name">
                                                <p class="card-text" style="text-align: justify;">H.C. Starck Tungsten
                                                    Powders (H.C. Starck)&nbsp;is a company of the Masan High-Tech Materials
                                                    Group and is one of the world’s leading suppliers of tungsten products
                                                    with tungsten powder plants in Germany, China, and Canada. With 100
                                                    years of experience the company develops, produces, and distributes
                                                    high-performance powders of tungsten and its compounds. H.C. Starck
                                                    Tungsten Powders offers the entire range of products along the tungsten
                                                    powder value chain, processing both primary and secondary raw materials
                                                    and turning them into high quality, customer-specific tungsten
                                                    chemicals, metal powders and carbides. They all meet the highest
                                                    standards of quality and performance.</p>
                                            </div>
                                            <a class="btn-link btn-gray" href="https://aimedia.asia/h-c-starck">Read
                                                more</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg"><a href="https://aimedia.asia/chemilytics"
                                                    style="background-image:url('/assets/images/chemilytics.png')"><img
                                                        alt="" src="/assets/images/chemilytics.png" /> </a></div>
                                        </div>

                                        <div class="info"><a class="title"
                                                href="https://aimedia.asia/chemilytics">ChemiLytics</a>

                                            <div class="name">
                                                <p class="card-text" style="text-align: justify;">ChemiLytics is a company
                                                    of the Masan High-Tech Materials Group, and is one of the largest state
                                                    of the art industrial scale laboratories in Germany for inorganic
                                                    elemental analysis and powder characterisation.</p>

                                                <p class="card-text" style="text-align: justify;">With 70 highly qualified
                                                    personnel working in teams operating 7 days a week, ChemiLytics offers
                                                    analytical services in all market segments from the sunset industries of
                                                    traditional manufacturing through to sunrise industries such as Additive
                                                    Manufacturing, Aerospace Applications or E-Mobility. Typical samples
                                                    analyzed include Tungsten ores, Tantalum and Niobium ores, all
                                                    refractory powders and scrap, Si3N4, battery precursors etc.</p>
                                            </div>

                                            <div>&nbsp;</div>

                                            <div><a class="btn-link btn-gray" href="https://aimedia.asia/chemilytics">Read
                                                    more</a></div>
                                        </div>
                                    </div>
                                </div> --}}
                            </div>
                        </article>

                        <div>&nbsp;</div>

                        <div>&nbsp;</div>
                    </section>


                    {{-- <section id="subsidiary">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <article>
                            <div class="row ">
                                <div class="col-md-6 ">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg">
                                                <a style="background-image:url('/assets/images/nuiphao.png')"
                                                    href="/subsidiary/nui-phao-mining">
                                                    <img src="/assets/images/nuiphao.png"
                                                        alt="Factory for rent in Hai Duong Vietnam">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="info">
                                            <a class="title"
                                                href="/subsidiary/nui-phao-mining">Nui Phao
                                                Mining
                                                <br>Company Ltd
                                                (NPMC)</a>

                                            <div class="name">
                                                <p>The Nui Phao mine, which is operated by Nui Phao Mining
                                                    Company
                                                    Ltd. (“NPMC”), a wholly owned subsidiary of Masan High-Tech Materials,
                                                    is
                                                    situated within three communes (Hung Son, Ha Thuong, and Tan Linh) of
                                                    Dai Tu
                                                    district in Thai Nguyen province. The site is approximately 80 km from
                                                    Hanoi
                                                    and
                                                    is accessible via highway. Road and rail links connect the mine to the
                                                    nearest
                                                    ports of Hai Phong and Quang Ninh province, from which the products can
                                                    be
                                                    shipped to international customers. As of 2014, the Nui Phao proven and
                                                    probable
                                                    ore reserves are estimated at 66 million tonnes, with an estimated mine
                                                    life
                                                    of
                                                    20 years.</p>
                                            </div>
                                            <a class="btn-link btn-gray"
                                                href="/subsidiary/masan-tungsten">
                                                Read More <i class="ic-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg">
                                                <a style="background-image:url('/assets/images/masan_tunsteng.png')"
                                                    href="subsidiary/masan-tungsten">
                                                    <img src="/assets/images/masan-tungsteng.png"
                                                        alt="Factory for rent in Hai Duong Vietnam">
                                                </a>
                                            </div>

                                        </div>
                                        <div class="info">
                                            <a class="title"
                                                href="subsidiary/masan-tungsten">Masan
                                                Tungsten<br>Limited
                                                Liability
                                                Company (MTC)</a>

                                            <div class="name">
                                                <p class="card-text">Masan Tungsten Limited Liability Company, formerly Nui
                                                    Phao
                                                    -
                                                    H.C. Starck Tungsten Chemicals Manufacturing, was established in 2014 as
                                                    a
                                                    joint
                                                    venture with H.C. Starck GmbH, a leading worldwide manufacturer of
                                                    technological
                                                    metals and one of the biggest companies in the global Tungsten industry.
                                                </p>
                                                <p class="card-text">The objective of the company is to connect NPMC’s
                                                    business
                                                    to
                                                    the global Tungsten market and enable advanced processing of Vietnam’s
                                                    strategic
                                                    tungsten resources into higher value tungsten chemicals, thus enabling
                                                    further
                                                    value extraction from the Vietnamese strategic

                                                </p>
                                            </div>
                                            <a class="btn-link btn-gray"
                                                href="subsidiary/nui-phao-mining">
                                                Read More <i class="ic-link"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg">
                                                <a style="background-image:url('/assets/images/hc_starck.png')"
                                                    href="/subsidairy/h-c-starck">
                                                    <img src="/assets/images/hc_starck.png"
                                                        alt="Factory for rent in Hai Duong Vietnam">
                                                </a>
                                            </div>

                                        </div>
                                        <div class="info">
                                            <a class="title"
                                                href="/subsidairy/h-c-starck">H.C.
                                                Starck Tungsten Powders</a>

                                            <div class="name">
                                                <p class="card-text">H.C. Starck Tungsten Powders is a company of the Masan
                                                    High-Tech Materials Group and is one of the world’s leading suppliers of
                                                    tungsten products with tungsten powder plants in Germany, China, and
                                                    Canada.
                                                    With 100 years of experience the company develops, produces, and
                                                    distributes
                                                    high-performance powders of tungsten and its compounds. H.C. Starck
                                                    Tungsten
                                                    Powders offers the entire range of products along the tungsten powder
                                                    value
                                                    chain, processing both primary and secondary raw materials and turning
                                                    them
                                                    into
                                                    high quality, customer-specific tungsten chemicals, metal powders and
                                                    carbides.
                                                    They all meet the highest standards of quality and performance.
                                                </p>
                                            </div>
                                            <a class="btn-link btn-gray"
                                                href="/subsidairy/h-c-starck">
                                                Read More <i class="ic-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="listLease__item">
                                        <div class="listLease__item__image">
                                            <div class="image effectImg">
                                                <a style="background-image:url('/assets/images/chemilytics.png')"
                                                    href="/subsidairy/chemilytics">
                                                    <img src="/assets/images/chemilytics.png"
                                                        alt="Factory for rent in Hai Duong Vietnam">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="info">
                                            <a class="title"
                                                href="/subsidairy/chemilytics">ChemiLytics</a>

                                            <div class="name">
                                                <p class="card-text">ChemiLytics is a company of the Masan High-Tech
                                                    Materials
                                                    Group, and is one of the largest state of the art industrial scale
                                                    laboratories
                                                    in Germany for inorganic elemental analysis and powder characterisation.
                                                </p>
                                                <p class="card-text">With 70 highly qualified personnel working in teams
                                                    operating 7
                                                    days a week, ChemiLytics offers analytical services in all market
                                                    segments
                                                    from
                                                    the sunset industries of traditional manufacturing through to sunrise
                                                    industries
                                                    such as Additive Manufacturing, Aerospace Applications or E-Mobility.
                                                    Typical
                                                    samples analyzed include Tungsten ores, Tantalum and Niobium ores, all
                                                    refractory powders and scrap, Si3N4, battery precursors etc.
                                                </p>
                                            </div>
                                            <a class="btn-link btn-gray"
                                                href="/subsidairy/chemilytics">
                                                Read More <i class="ic-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
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
