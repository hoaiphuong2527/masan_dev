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
                    {!! $block->content !!}
                    {{-- <div>
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1 style="text-align: center;">Human Resources Philosophy</h1>

                        <div>&nbsp;</div>

                        <div style="text-align: center;">At Masan High-Tech Materials, we value our employees’ valuable
                            contributions and strive to create a safe, healthy, positiveand harmony work environment in
                            which
                            our employees can excel by utilizing their potential and achieve self-value.</div>

                        <div>&nbsp;</div>

                        <div style="text-align: center;">The workforce development investment is, therefore, considered as
                            the
                            top priority in our business strategy. Employees arevalued through the continuous investment in
                            their training and development, which aligns with the company's business strategy.</div>

                        <div>&nbsp;</div>
                        <div style="text-align: center;">
                            <a data-slide="1" data-target="#teamModal" data-toggle="modal" href="javascript:void(0);" id=""
                                class="btn career-btn">READ MORE</a>
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>

                        <div>
                            <h1 style="text-align: center;">Career Path</h1>
                        </div>
                        <section class="career">
                            <div class="container">
                                <ul class="navLink nav nav-tabs mediaEffect-2" data-waypoint="100%" id="nav-tab"
                                    role="tablist">
                                    <li><a class="active" data-toggle="tab" id="case01-tab" href="#case-1" role="tab"
                                            aria-controls="home" aria-selected="true">
                                            <h3 style="text-align: center;">Office</h3>
                                        </a></li>
                                    <li>
                                        <h1>|</h1>
                                    </li>
                                    <li><a id="case02-tab" data-toggle="tab" href="#case-2" role="tab"
                                            aria-controls="profile" aria-selected="false">
                                            <h3 style="text-align: center;">Plant</h3>
                                        </a></li>
                                </ul>
                                <div class="tab-content mediaEffect-3" data-waypoint="100%">
                                    <div class="tab-pane fade show active" id="case-1" role="tabpanel"
                                        aria-labelledby="case01-tab">
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="collapse show" id="collapseOne" aria-labelledby="headingOne"
                                                    data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <div class="document">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="office-css">
                                                                        <div class="loader">
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Assistant</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Snr.
                                                                                        Officer</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Supervisor</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Superintendent</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Manager</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Director</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Executive</span>
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
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="case-2" role="tabpanel" aria-labelledby="case02-tab">
                                        <div class="accordion" id="accordionExample-2">
                                            <div class="card">
                                                <div class="collapse show" id="collapseOne-2" aria-labelledby="headingOne"
                                                    data-parent="#accordionExample-2">
                                                    <div class="card-body">
                                                        <div class="document">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="plan-css">
                                                                        <div class="loader">
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Operator</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Leading
                                                                                        Hand</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Area
                                                                                        Sup</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Shift Sup</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Supervisor
                                                                                        Trainer</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Senior
                                                                                        Supervisor</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar" style="width: 11%" >
                                                                                    <span>Superintendent</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Manager</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Director</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Executive</span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>&nbsp;</div>

                                        <div>&nbsp;</div>
                                        <section id="recruitment">
                                            <h2 style="text-align: center;"><span style="color:#00396f;">Recruitment
                                                    Programs&nbsp;</span></h2>
                                            <div>&nbsp;</div>
                                            <div class="row bg-full">
                                                <div style="
                                                                                               background: #E3E4E4;
                                                                                                background-position: bottom center;
                                                                                                background-size: cover;
                                                                                                background-repeat: no-repeat;
                                                                                                width: 100vw;
                                                                                                margin-left: -50vw;
                                                                                                left: 50%;
                                                                                                padding-bottom: 300px;
                                                                                                bottom: 0px;
                                                                                                position: absolute;
                                                                                             "></div>
                                                <div class="col-md-6 col-12 break360">
                                                    <div class="listLease__item">
                                                        <div class="listLease__item__image">
                                                            <h2 class="image effectImg"><a href="javascript:void(0)"
                                                                    style="background-image:url('/upload/images/Career/Asset%20323.png')">
                                                                    <img alt="Bismuth"
                                                                        src="/upload/images/Career/Asset%20323.png">
                                                                </a></h2>
                                                            <h3>Fresh Graduate
                                                                <br>
                                                                Hires
                                                            </h3>
                                                            <h4>Join us at MHT – Your bridge to success</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-12 break360">
                                                    <div class="listLease__item">
                                                        <div class="listLease__item__image">
                                                            <div class="image effectImg"><a href="javascript:void(0)"
                                                                    style="background-image:url('/upload/images/Career/Asset%20423.png')">
                                                                    <img alt="Fluorspar"
                                                                        src="/upload/images/Career/Asset%20423.png"> </a>
                                                            </div>
                                                            <h3>Experienced
                                                                <br>
                                                                Hires
                                                            </h3>
                                                            <h4>Join us at MHT – Your bridge to success</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>

                                        </section>
                                    </div>

                                    <div>&nbsp;</div>

                                    <div>&nbsp;</div>
                                </div>
                            </div>

                            <div>
                                <h1 style="text-align: center;">Hot Vacancies</h1>
                            </div>
                            <div>&nbsp;</div>

                            <section id="vacancies">
                                <div class="row">
                                    <div class="col-md-4 hover-active">
                                        <div><a class="text-gray active" href="careers/career-opportunity">Nui Phao Mining
                                                Company</a></div>
                                        <div><a class="text-gray" href="careers/career-opportunity">Masan Tungsten
                                                Company</a>
                                        </div>
                                        <div><a class="text-gray" href="careers/career-opportunity">H.C. Starck Tungsten
                                                Powders</a></div>
                                        <div><a class="text-gray" href="careers/career-opportunity">ChemiLytics Company</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Senior Mechanical Supervisor</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">

                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Metallurgist</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Senior Mechanical Supervisor</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Head of Project</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">

                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Cost Accountant</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                            </section>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>

                        </div>
                    </div> --}}

                    <div class="vi">
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1 style="text-align: center;">Human Resources Philosophy</h1>

                        <div>&nbsp;</div>

                        <div style="text-align: center;">At Masan High-Tech Materials, we value our employees’ valuable
                            contributions and strive to create a safe, healthy, positiveand harmony work environment in
                            which
                            our employees can excel by utilizing their potential and achieve self-value.</div>

                        <div>&nbsp;</div>

                        <div style="text-align: center;">The workforce development investment is, therefore, considered as
                            the
                            top priority in our business strategy. Employees arevalued through the continuous investment in
                            their training and development, which aligns with the company's business strategy.</div>

                        <div>&nbsp;</div>
                        <div style="text-align: center;">
                            <a data-slide="1" data-target="#teamModal" data-toggle="modal" href="javascript:void(0);" id=""
                                class="btn career-btn">READ MORE</a>
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>

                        <div>
                            <h1 style="text-align: center;">Career Path</h1>
                        </div>
                        <section class="career">
                            <div class="container">
                                <ul class="navLink nav nav-tabs mediaEffect-2" data-waypoint="100%" id="nav-tab"
                                    role="tablist">
                                    <li><a class="active" data-toggle="tab" id="case01-tab" href="#case-1" role="tab"
                                            aria-controls="home" aria-selected="true">
                                            <h3 style="text-align: center;">Office</h3>
                                        </a></li>
                                    <li>
                                        <h1>|</h1>
                                    </li>
                                    <li><a id="case02-tab" data-toggle="tab" href="#case-2" role="tab"
                                            aria-controls="profile" aria-selected="false">
                                            <h3 style="text-align: center;">Plant</h3>
                                        </a></li>
                                </ul>
                                <div class="tab-content mediaEffect-3" data-waypoint="100%">
                                    <div class="tab-pane fade show active" id="case-1" role="tabpanel"
                                        aria-labelledby="case01-tab">
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="collapse show" id="collapseOne" aria-labelledby="headingOne"
                                                    data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <div class="document">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="office-css">
                                                                        <div class="loader">
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Assistant</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Snr.
                                                                                        Officer</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Supervisor</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Superintendent</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Manager</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Director</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Executive</span>
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
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="case-2" role="tabpanel" aria-labelledby="case02-tab">
                                        <div class="accordion" id="accordionExample-2">
                                            <div class="card">
                                                <div class="collapse show" id="collapseOne-2" aria-labelledby="headingOne"
                                                    data-parent="#accordionExample-2">
                                                    <div class="card-body">
                                                        <div class="document">
                                                            <div class="row">
                                                                <div class="col-lg-12">
                                                                    <div class="plan-css">
                                                                        <div class="loader">
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Operator</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Leading
                                                                                        Hand</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Area
                                                                                        Sup</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Shift Sup</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Supervisor
                                                                                        Trainer</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar"><span>Senior
                                                                                        Supervisor</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar" style="width: 11%">
                                                                                <div class="loader__bar"  >
                                                                                    <span>Superintendent</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Manager</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Director</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-bar">
                                                                                <div class="loader__bar">
                                                                                    <span>Executive</span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>&nbsp;</div>

                                        <div>&nbsp;</div>
                                        <section id="recruitment">
                                            <h2 style="text-align: center;"><span style="color:#00396f;">Recruitment
                                                    Programs&nbsp;</span></h2>
                                            <div>&nbsp;</div>
                                            <div class="row bg-full">
                                                <div style="
                                                                                               background: #E3E4E4;
                                                                                                background-position: bottom center;
                                                                                                background-size: cover;
                                                                                                background-repeat: no-repeat;
                                                                                                width: 100vw;
                                                                                                margin-left: -50vw;
                                                                                                left: 50%;
                                                                                                padding-bottom: 300px;
                                                                                                bottom: 0px;
                                                                                                position: absolute;
                                                                                             "></div>
                                                <div class="col-md-6 col-12 break360">
                                                    <div class="listLease__item">
                                                        <div class="listLease__item__image">
                                                            <h2 class="image effectImg"><a href="javascript:void(0)"
                                                                    style="background-image:url('/upload/images/Career/Asset%20323.png')">
                                                                    <img alt="Bismuth"
                                                                        src="/upload/images/Career/Asset%20323.png">
                                                                </a></h2>
                                                            <h3>Fresh Graduate
                                                                <br>
                                                                Hires
                                                            </h3>
                                                            <h4>Join us at MHT – Your bridge to success</h4>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-12 break360">
                                                    <div class="listLease__item">
                                                        <div class="listLease__item__image">
                                                            <div class="image effectImg"><a href="javascript:void(0)"
                                                                    style="background-image:url('/upload/images/Career/Asset%20423.png')">
                                                                    <img alt="Fluorspar"
                                                                        src="/upload/images/Career/Asset%20423.png"> </a>
                                                            </div>
                                                            <h3>Experienced
                                                                <br>
                                                                Hires
                                                            </h3>
                                                            <h4>Join us at MHT – Your bridge to success</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>&nbsp;</div>
                                            <div>&nbsp;</div>

                                        </section>
                                    </div>

                                    <div>&nbsp;</div>

                                    <div>&nbsp;</div>
                                </div>
                            </div>

                            <div>
                                <h1 style="text-align: center;">Hot Vacancies</h1>
                            </div>
                            <div>&nbsp;</div>

                            <section id="vacancies">
                                <div class="row">
                                    <div class="col-md-4 hover-active">
                                        <div><a class="text-gray active" href="careers/career-opportunity">Nui Phao Mining
                                                Company</a></div>
                                        <div><a class="text-gray" href="careers/career-opportunity">Masan Tungsten
                                                Company</a>
                                        </div>
                                        <div><a class="text-gray" href="careers/career-opportunity">H.C. Starck Tungsten
                                                Powders</a></div>
                                        <div><a class="text-gray" href="careers/career-opportunity">ChemiLytics Company</a>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Senior Mechanical Supervisor</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">

                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Metallurgist</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Senior Mechanical Supervisor</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Head of Project</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">

                                    </div>
                                    <div class="col-md-4">
                                        <ul class="list-unstyled">
                                            <li>
                                                <h5>Cost Accountant</h5>
                                            </li>
                                            <li> <i class="fa fa-map-marker" aria-hidden="true"></i>Nui Phao Mining Company
                                            </li>
                                            <li> <i class="fa fa-clock-o" aria-hidden="true"></i> 30/05/2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="careers/career-opportunity" class="btn career-btn">READ MORE</a>
                                    </div>
                                </div>
                            </section>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>

                        </div>
                    </div>
                </div>
            @endif

        {{-- <div class="modal teamModal fade" id="teamModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <button class="close btn-close" type="button" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i>
                        </button>
                    <div class="modal-body">
                        <div class="teamSlide">
                            <div class="teamSlide__item">
                                <div class="info">
                                    <h4>Human Resources Philosophy</h4>
                                    <p>At Masan High-Tech Materials, we value our employees’ valuable contributions and
                                        strive to create a safe, healthy, positiveand harmony work environment in which our
                                        employees can excel by utilizing their potential and achieve self-value.</p>
                                    <p>
                                        The workforce development investment is, therefore, considered as the top priority
                                        in our business strategy. Employees arevalued through the continuous investment in
                                        their training and development, which aligns with the company's business strategy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> --}}

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
