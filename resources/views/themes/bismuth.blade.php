@extends('frontend.layouts.master')

@section('style')
@endsection
@php
    $title = getPageUrlByCode('bismuth', 'title')
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/bismuth-banner.png','text'=> $title ])

    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{$block->name}}</h1> --}}
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
                                    <img src="{{$item->icon}}" alt="{{$item->name}}">
                                </a>
                            </div>
                            <div class="col-md-10 col-sm-9 col-8 break480">
                                <h4>{{$item->name}}</h4>
                                {!! $item->content !!}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            @endif
            <h1><span style="font-size:26px;"><span style="color:#00396f;">Bismuth (Bi)
            </span></span></h1>
            
            <div><span style="color:#58595b;">Bismuth is a minor metal with consumer and industrial applications. For the consumer, bismuth-based chemicals are used in the health and pharmaceutical sector through radiation protection and medicines for treatment of nausea, indigestion and ulcer diseases. Due to its non-toxicity, it has also found use in cosmetics. Industrially, Bismuth is used as a nontoxic pigment in the production of certain paints and in the manufacture of electrical components. Bismuth is also used as a catalyst for vehicular emissions control, as well as in the production low melting point alloys for the reliable work holding devices for heavy machinery such as turbines.</span></div>
            
            
            
            <div>&nbsp;</div>
            
            <h2><span style="font-size:28px;"><span style="color:#58595b;">Bismuth  Application</span></span></h2>
            
            <div><span style="color:#58595b;">Bismuth is a diverse product used in a variety of applications. Pharmaceuticals and chemicals producers as well as consumers of bismuth metal alloys absorb most of the production. 
            </span></div>
            
            <div>&nbsp;</div>
            
            <div><span style="color:#58595b;">Known for its good antibacterial properties, it is used widely in medical applications. It is used to treat diseases like gastritis, peptic ulcers and even gastric cancers. Many over-the-counter stomach settling remedies also include bismuth as the active ingredient, with some bismuth medicinal compounds also used to treat burns, intestinal disorders, and stomach ulcers in humans and animals. Historically, it was also used in the treatment of syphilis.
            </span></div>
            
            <div><span style="color:#58595b;">The use of bismuth in cosmetics dates back to ancient Egypt and is today used increasingly as a pigment in paint for eye shadows, hair sprays and nail polishes. Its luster makes it ideal for cosmetics. Pigments produced from bismuth are also used in the manufacture of paints and ceramics.
            </span></div>
            <h2 class="sub-title" data-waypoint="100%"><span style="color:#00396f;">Other Products</span></h2>
            
            <div class="listLease mediaEffect-2 active px-0 mt-3" data-waypoint="100%">
                <div class="row">
                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <h2 class="image effectImg"><a href="" style="background-image:url('/assets/images/Bismuth.jpg')">
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
                                <div class="image effectImg"><a href="" style="background-image:url('/assets/images/Tungsten.jpg')">
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
