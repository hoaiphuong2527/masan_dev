@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('ABOUT', 'title');
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/about-banner.png','text'=> $title])

    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{ $block->name }}</h1> --}}
                {{-- <div class="document" data-waypoint="100%"> --}}
                {{-- {!! $block->content !!} --}}

                <div>&nbsp;</div>

                <div>&nbsp;</div>

                <div id="en">
                    @if (!empty($blocks['OVERVIEW']) && ($overviewBlock = $blocks->get('OVERVIEW')->first()))

                        <div class="block-item overview-bg" style=" background:url('{{ $overviewBlock->photo }}');
                                                      
                                                        ">
                            <div class="row ">
                                <div class="col-md-7 col-sm-7 col-xs-12 py-4 px-2">
                                    <div class="card text-white over-view-bg">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ $overviewBlock->name }}</h3>
                                            {!! $overviewBlock->content !!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if (!empty($blocks['DEVELOPMENT-STRATEGY']) && ($devBlock = $blocks->get('DEVELOPMENT-STRATEGY')->first()))

                        {!! $devBlock->content !!}

                    @endif


                    <div class="row">
                        <div class="col-md-6"><strong><span
                                    style="font-size:36px;">{{ trans('frontend.management_team') }}</span></strong>
                        </div>
                        <div class="col-md-6 manager-nav">
                            <nav class="navbar navbar-expand ">
                                <ul class="nav navbar-nav">
                                    <li class="nav-item active" data-target="all-slide"><a class="nav-link"
                                            href="javascript:void(0);">
                                            {{ trans('frontend.all') }}
                                        </a></li>
                                    @if (!empty($blocks['MANAGERMENT']) && ($operationBlock = $blocks->get('MANAGERMENT')->first()))

                                        <li class="nav-item" data-target="{{ $operationBlock->code }}-slide"><a
                                                class="nav-link"
                                                href="javascript:void(0);">{{ $operationBlock->name }}</a>
                                        </li>
                                    @endif
                                    @if (!empty($blocks['OPERATION']) && ($operationBlock = $blocks->get('OPERATION')->first()))

                                        <li class="nav-item" data-target="{{ $operationBlock->code }}-slide"><a
                                                class="nav-link"
                                                href="javascript:void(0);">{{ $operationBlock->name }}</a>
                                        </li>
                                    @endif
                                    @if (!empty($blocks['SALE-MARKETING']) && ($operationBlock = $blocks->get('SALE-MARKETING')->first()))

                                        <li class="nav-item" data-target="{{ $operationBlock->code }}-slide"><a
                                                class="nav-link"
                                                href="javascript:void(0);">{{ $operationBlock->name }}</a>
                                        </li>
                                    @endif
                                </ul>
                            </nav>

                            <nav class="navbar navbar-expand">
                                <ul class="nav navbar-nav">
                                    @if (!empty($blocks['FINANCE']) && ($operationBlock = $blocks->get('FINANCE')->first()))

                                        <li class="nav-item" data-target="{{ $operationBlock->code }}-slide"><a
                                                class="nav-link"
                                                href="javascript:void(0);">{{ $operationBlock->name }}</a>
                                        </li>
                                    @endif
                                    @if (!empty($blocks['SUPERVISOR']) && ($operationBlock = $blocks->get('SUPERVISOR')->first()))

                                        <li class="nav-item" data-target="{{ $operationBlock->code }}-slide"><a
                                                class="nav-link"
                                                href="javascript:void(0);">{{ $operationBlock->name }}</a>
                                        </li>
                                    @endif
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div>&nbsp;</div>

                    <div>&nbsp;</div>
                    <div class="sliderManager active" id="all-slide">
                        @if (!empty($blocks['MANAGERMENT']) && ($managerBlock = $blocks->get('MANAGERMENT')->first()))
                            @foreach ($managerBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                        @if (!empty($blocks['OPERATION']) && ($operationBlock = $blocks->get('OPERATION')->first()))
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                        @if (!empty($blocks['SALE-MARKETING']) && ($operationBlock = $blocks->get('SALE-MARKETING')->first()))
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                        @if (!empty($blocks['FINANCE']) && ($operationBlock = $blocks->get('FINANCE')->first()))
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                        @if (!empty($blocks['SUPERVISOR']) && ($operationBlock = $blocks->get('SUPERVISOR')->first()))
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
                    </div>
                    @if (!empty($blocks['MANAGERMENT']) && ($operationBlock = $blocks->get('MANAGERMENT')->first()))
                        <div class="sliderManager " id="{{ $operationBlock->code }}-slide">
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif


                    @if (!empty($blocks['OPERATION']) && ($operationBlock = $blocks->get('OPERATION')->first()))
                        <div class="sliderManager " id="{{ $operationBlock->code }}-slide">
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif

                    @if (!empty($blocks['SALE-MARKETING']) && ($operationBlock = $blocks->get('SALE-MARKETING')->first()))
                        <div class="sliderManager " id="{{ $operationBlock->code }}-slide">
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif
                    @if (!empty($blocks['FINANCE']) && ($operationBlock = $blocks->get('FINANCE')->first()))
                        <div class="sliderManager " id="{{ $operationBlock->code }}-slide">
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif


                    @if (!empty($blocks['SUPERVISOR']) && ($operationBlock = $blocks->get('SUPERVISOR')->first()))
                        <div class="sliderManager " id="{{ $operationBlock->code }}-slide">
                            @foreach ($operationBlock->children as $index => $person)
                                <div class="sliderManager__item ">
                                    <div class="sliderManager__item__image manager">
                                        <div class="image "><a style="background-image:url('{{ $person->photo }}')"> <img
                                                    alt="ceo" src="{{ $person->photo }}" /> </a></div>
                                    </div>

                                    <div class="info info-manager"><a class="title"
                                            href="javascript:void(0);">{{ $person->name }}</a>

                                        <div class="name">{{ $person->description }}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    @endif

                    @if (!empty($blocks['SHAREHOLDERS']) && ($devBlock = $blocks->get('SHAREHOLDERS')->first()))


                        {!! $devBlock->content !!}

                    @endif
                    @if (!empty($blocks['AWARDS']) && ($devBlock = $blocks->get('AWARDS')->first()))


                        {!! $devBlock->content !!}

                    @endif

                </div>



            @endif

        </div>
    </section>
    @if (!empty($blocks['MODAL']) && ($modal = $blocks->get('MODAL')->first()))
        {!! $modal->content !!}
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
                            <h5>{{ $item->name }}</h5>
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
