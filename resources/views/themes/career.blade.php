@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('CAREER', 'title');
@endphp

@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/career-banner.png','text'=> $title])

    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                <div class="document" data-waypoint="100%">
                    {{-- {!! $block->content !!} --}}
                    <div class="en">
                        @if (!empty($blocks['HUMAN-RESOURCES']) && ($block = $blocks->get('HUMAN-RESOURCES')->first()))
                            {!! $block->content !!}
                        @endif

                        <section class="career">
                            <div class="container">
                                <ul class="navLink nav nav-tabs" data-waypoint="100%" id="nav-tab" role="tablist">
                                    @if (!empty($blocks['OFFICE']) && ($blocksOffice = $blocks->get('OFFICE')->first()))
                                        <li><a class="active" id="{{ $blocksOffice->code }}-tab" data-toggle="tab"
                                                href="#{{ $blocksOffice->code }}" role="tab"
                                                aria-controls="{{ $blocksOffice->code }}" aria-selected="false">
                                                <h3 style="text-align: center;">
                                                    {{ $blocksOffice->name }}
                                                </h3>
                                            </a></li>
                                    @endif
                                    @if (!empty($blocks['PLANT']) && ($blocksPlant = $blocks->get('PLANT')->first()))
                                        <li>
                                            <h1>|</h1>
                                        </li>
                                        <li><a id="{{ $blocksPlant->code }}-tab" data-toggle="tab"
                                                href="#{{ $blocksPlant->code }}" role="tab"
                                                aria-controls="{{ $blocksPlant->code }}" aria-selected="false">
                                                <h3 style="text-align: center;">
                                                    {{ $blocksPlant->name }}
                                                </h3>
                                            </a></li>
                                    @endif
                                </ul>
                                <div class="tab-content text-center" data-waypoint="100%">
                                    @if (!empty($blocks['OFFICE']) && ($blocksOffice = $blocks->get('OFFICE')->first()))
                                        <div class="tab-pane fade show active" id="{{ $blocksOffice->code }}"
                                            role="tabpanel" aria-labelledby="{{ $blocksOffice->code }}">
                                            <div class="accordion" id="accordionExample-1">
                                                <div class="card">
                                                    <div class="collapse show" id="collapseOne-1"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample-1">
                                                        <div class="card-body">
                                                            <div class="document">
                                                                <div class="row">
                                                                    <div class="col-lg-11">
                                                                        <div class="plan-css">
                                                                            <div class="loader">
                                                                                @foreach ($blocksOffice->children as $index => $item)
                                                                                    <div class="col-bar">
                                                                                        <div class="loader__bar">
                                                                                            <span>{{ $item->name }}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                @endforeach
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                                    @if (!empty($blocks['PLANT']) && ($blocksPlant = $blocks->get('PLANT')->first()))
                                        <div class="tab-pane fade" id="{{ $blocksPlant->code }}" role="tabpanel"
                                            aria-labelledby="{{ $blocksPlant->code }}">
                                            <div class="accordion" id="accordionExample-2">
                                                <div class="card">
                                                    <div class="collapse show" id="collapseOne-2"
                                                        aria-labelledby="headingOne" data-parent="#accordionExample-2">
                                                        <div class="card-body">
                                                            <div class="document">
                                                                <div class="row">
                                                                    <div class="col-lg-12">
                                                                        <div class="plan-css">
                                                                            <div class="loader">
                                                                                @foreach ($blocksPlant->children as $index => $item)
                                                                                    <div class="col-bar">
                                                                                        <div class="loader__bar">
                                                                                            <span>{{ $item->name }}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                @endforeach
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </section>
                        <div>
                            @if (!empty($blocks['RECRUITMENT-VACANCIES']) && ($block = $blocks->get('RECRUITMENT-VACANCIES')->first()))
                                {!! $block->content !!}
                            @endif
                            <section id="vacancies">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <ul class="nav nav-tabs tabs-left" role="tablist">
                                            <li role="presentation"><a href="#home" aria-controls="home" role="tab"
                                                    data-toggle="tab" class="active show">
                                                    @if (!empty($blocks['NPMC']) && ($blocksNPMN = $blocks->get('NPMC')->first()))
                                                        {{ $blocksNPMN->name }}
                                                    @endif
                                                </a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab"
                                                    data-toggle="tab">
                                                    @if (!empty($blocks['MTC']) && ($blocksNPMN = $blocks->get('MTC')->first()))
                                                        {{ $blocksNPMN->name }}
                                                    @endif
                                                </a></li>
                                            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab"
                                                    data-toggle="tab">
                                                    @if (!empty($blocks['HSTP']) && ($blocksNPMN = $blocks->get('HSTP')->first()))
                                                        {{ $blocksNPMN->name }}
                                                    @endif
                                                </a></li>
                                            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab"
                                                    data-toggle="tab">
                                                    @if (!empty($blocks['CC']) && ($blocksNPMN = $blocks->get('CC')->first()))
                                                        {{ $blocksNPMN->name }}
                                                    @endif
                                                </a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane active" id="home">
                                                @if (!empty($blocks['NPMC']) && ($blocksVacancies = $blocks->get('NPMC')->first()))

                                                    @foreach ($blocksVacancies->children as $index => $vacancie)
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            style="width:100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <div><span
                                                                                    style="font-size:18px;"><strong>{{ $vacancie->name }}</strong></span>
                                                                            </div>
                                                                            <div>
                                                                                <div>
                                                                                    <div><i class="fa fa-map-marker"
                                                                                            aria-hidden="true"></i>
                                                                                        {{ $blocksVacancies->name }}</div>
                                                                                    <div>
                                                                                        <div>
                                                                                            <div>
                                                                                                <i class="fa fa-clock-o"
                                                                                                    aria-hidden="true"></i>
                                                                                                {{ $vacancie->description }}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style="text-align: right;">
                                                                        <div>&nbsp;</div>

                                                                        <div>&nbsp;</div>

                                                                        <div><a class="btn career-btn"
                                                                                href="{{ $vacancie->url }}">{{ trans('button.read_more') }}</a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    @endforeach
                                                @endif
                                            </div>
                                            <div role="tabpanel" class="tab-pane" id="profile">
                                                @if (!empty($blocks['MTC']) && ($blocksVacancies = $blocks->get('MTC')->first()))

                                                    @foreach ($blocksVacancies->children as $index => $vacancie)
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            style="width:100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <div><span
                                                                                    style="font-size:18px;"><strong>{{ $vacancie->name }}</strong></span>
                                                                            </div>
                                                                            <div>
                                                                                <div>
                                                                                    <div><i class="fa fa-map-marker"
                                                                                            aria-hidden="true"></i>
                                                                                        {{ $blocksVacancies->name }}</div>
                                                                                    <div>
                                                                                        <div>
                                                                                            <div>
                                                                                                <i class="fa fa-clock-o"
                                                                                                    aria-hidden="true"></i>
                                                                                                {{ $vacancie->description }}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style="text-align: right;">
                                                                        <div>&nbsp;</div>

                                                                        <div>&nbsp;</div>

                                                                        <div><a class="btn career-btn"
                                                                                href="{{ $vacancie->url }}">{{ trans('button.read_more') }}</a>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    @endforeach

                                                @endif
                                            </div>
                                            <div role="tabpanel" class="tab-pane" id="messages">
                                                @if (!empty($blocks['HSTP']) && ($blocksVacancies = $blocks->get('HSTP')->first()))

                                                    @foreach ($blocksVacancies->children as $index => $vacancie)
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            style="width:100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <div><span
                                                                                    style="font-size:18px;"><strong>{{ $vacancie->name }}</strong></span>
                                                                            </div>
                                                                            <div>
                                                                                <div>
                                                                                    <div><i class="fa fa-map-marker"
                                                                                            aria-hidden="true"></i>
                                                                                        {{ $blocksVacancies->name }}</div>
                                                                                    <div>
                                                                                        <div>
                                                                                            <div>
                                                                                                <i class="fa fa-clock-o"
                                                                                                    aria-hidden="true"></i>
                                                                                                {{ $vacancie->description }}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style="text-align: right;">
                                                                        <div>&nbsp;</div>

                                                                        <div>&nbsp;</div>

                                                                        <div><a class="btn career-btn"
                                                                                href="{{ $vacancie->url }}">{{ trans('button.read_more') }}</a>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    @endforeach

                                                @endif
                                            </div>
                                            <div role="tabpanel" class="tab-pane" id="settings">
                                                @if (!empty($blocks['CC']) && ($blocksVacancies = $blocks->get('CC')->first()))

                                                    @foreach ($blocksVacancies->children as $index => $vacancie)
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            style="width:100%;">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div>
                                                                            <div><span
                                                                                    style="font-size:18px;"><strong>{{ $vacancie->name }}</strong></span>
                                                                            </div>
                                                                            <div>
                                                                                <div>
                                                                                    <div><i class="fa fa-map-marker"
                                                                                            aria-hidden="true"></i>
                                                                                        {{ $blocksVacancies->name }}</div>
                                                                                    <div>
                                                                                        <div>
                                                                                            <div>
                                                                                                <i class="fa fa-clock-o"
                                                                                                    aria-hidden="true"></i>
                                                                                                {{ $vacancie->description }}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td style="text-align: right;">
                                                                        <div>&nbsp;</div>

                                                                        <div>&nbsp;</div>

                                                                        <div><a class="btn career-btn"
                                                                                href="{{ $vacancie->url }}">{{ trans('button.read_more') }}</a>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    @endforeach

                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div>&nbsp;</div>

                            <div>&nbsp;</div>
                        </div>
                    </div>

                </div>
            @endif


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
