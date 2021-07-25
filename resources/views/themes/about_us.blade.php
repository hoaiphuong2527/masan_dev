@extends('frontend.layouts.master')

@section('style')
@endsection
@php
    $title = getPageUrlByCode('ABOUT', 'title')
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/about-banner.png','text'=> $title])

    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{ $block->name }}</h1> --}}
                {{-- <div class="document" data-waypoint="100%"> --}}
                {!! $block->content !!}
{{-- 
                <div>&nbsp;</div>

                <div>&nbsp;</div>

                <div id="en">
                    <div class="block-item"
                        style="                                                                                                                                                      background:url('/assets/images/overview-bg.png');
                                                                                                                                                                                background-repeat: no-repeat;
                                                                                                                                                                                background-position-x: right;
                                                                                                                                                                                background-size: 60%;
                                                                                                                                                                                ">
                        <div class="row ">
                            <div class="col-md-7 col-sm-7 col-xs-12 py-4 px-2">
                                <div class="card text-white over-view-bg">
                                    <div class="card-body">
                                        <h3 class="card-title">Overview</h3>

                                        <p class="card-text" style="text-align: justify;">Masan High-Tech Materials aims to
                                            be a leading global integrated supplier of high-tech advanced materials critical
                                            to global innovation. Through the application of our materials, we will create
                                            unparalleled solutions to drive innovation and productivity which will deliver
                                            superior outcomes for all our partners and stakeholders.</p>

                                        <p class="card-text" style="text-align: justify;">The Company was established in
                                            2010 and focused on mining and resources extraction activities (as a part of the
                                            Masan Group), named Masan Resources Corporation (MSR). 2014, we started
                                            commercial production of Tungsten concentrate, Copper concentrate, Fluorspar
                                            concentrate and Bismuth concentrate. To advance Tungsten Chemical factory in
                                            Vietnam, 2014 we established Masan Tungsten Manufacturing LLC (NHTCM)– a joint
                                            venture with H.C. Starck Tungsten GmbH, holding 51% stake, then 2018 we acquired
                                            49% stake in NHTCM and changed its name to Masan Tungsten Limited Liability
                                            Company (MTC).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div><br />
                        <strong><span style="font-size:36px;">Development Strategy</span></strong>
                    </div>

                    <div>&nbsp;</div>

                    <div style="text-align: justify;">Masan High-Tech’s vision is to become the global leader and partner of
                        choice, as the high-tech materials industry continues to shape the future of our world. Through the
                        application of innovative, quality assured and sustainable products and processes we will create
                        unparalleled solutions in advanced and strategic materials and superior outcomes for all our
                        stakeholders. &nbsp;</div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <div style="text-align: justify;">Through the acquisition of the HCS global sales and distribution
                        network importantly strengthens our commitment to working together with our customers to
                        continuously support developing specific product efficiencies and emergent industry initiatives.
                        &nbsp;</div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <div style="text-align: justify;">In November 2020 we welcomed Mitsubishi Materials Corporation as a
                        substantial shareholder, with both an equity infusion used to help repair our balance sheet and an
                        MoU signed for greater technical collaboration. &nbsp;</div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <div style="text-align: justify;">In 2021 we are looking to continue the integration of the business
                        units to optimize performance whilst we look to deliver on our vision. &nbsp;&nbsp;</div>

                    <div>&nbsp;</div>

                    <div class="row">
                        <div class="col-md-4 col-6 break360 pr-4">
                            <div class="listLease__item">
                                <div class="info"><a class="title" href="javascript:void(0)">Sustainability<br />
                                        at MHT</a>

                                    <p style="text-align: justify;">Our position on Sustainability remains a matter of
                                        public record, and one which we welcome dialogue on. Our delivery of the commitments
                                        made enables our people to understand our common approach, our values, how we
                                        measure success and the basis for our decision-making.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-6 break360 px-3">
                            <div class="listLease__item">
                                <div class="info"><a class="title" href="javascript:void(0)">Community &amp; Social<br />
                                        Development Objective </a>

                                    <p style="text-align: justify;">Masan High-Tech Materials have found us in a challenging
                                        context composed of issues related to the environment and social and governance
                                        policies on the one side, and profit making and business viability on the other. We
                                        firmly endeavor to integrate sustainability into our development strategy and make
                                        sustainability a fundamental part of everyone’s daily activities.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-6 break360 pl-4">
                            <div class="listLease__item">
                                <div class="info"><a class="title" href="javascript:void(0)">Execution Strategy<br />
                                        "Go Global"</a>

                                    <p style="text-align: justify;">Now truly global our execution strategy for building our
                                        business remains focused around three key areas:<br />
                                        Local knowledge with global considerations and understanding to facilitate project
                                        execution and asset optimization. Masan High-Tech Materials knows that a strong
                                        local understanding of the local sensitivities of community and customer concerns
                                        are critical for successful and sustainable business.&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-6 break360 pr-4">
                            <div class="listLease__item"><a class="btn-link " data-slide="1" data-target="#teamModal"
                                    data-toggle="modal" href="javascript:void(0);">READ MORE </a></div>
                        </div>

                        <div class="col-md-4 col-6 break360 px-3">
                            <div class="listLease__item"><a class="btn-link " data-slide="2" data-target="#teamModal"
                                    data-toggle="modal" href="javascript:void(0);">READ MORE </a></div>
                        </div>

                        <div class="col-md-4 col-6 break360 pl-4">
                            <div class="listLease__item"><a class="btn-link " data-slide="3" data-target="#teamModal"
                                    data-toggle="modal" href="javascript:void(0);">READ MORE </a></div>
                        </div>
                    </div>
                    
                    <div>&nbsp;</div>

                    <div class="row">
                        <div class="col-md-6 col-6"><strong><span style="font-size:36px;">Management Team </span></strong>
                        </div>

                        <div class="col-md-6 col-6 manager-nav">
                            <nav class="navbar navbar-expand ">
                                <ul class="nav navbar-nav">
                                    <li class="nav-item active" data-target="all-slide"><a class="nav-link"
                                            href="javascript:void(0);">All</a></li>
                                    <li class="nav-item" data-target="management-slide"><a class="nav-link"
                                            href="javascript:void(0);">Management</a></li>
                                    <li class="nav-item" data-target="operation-slide"><a class="nav-link"
                                            href="javascript:void(0);">Operation</a></li>
                                    <li class="nav-item" data-target="sales-slide"><a class="nav-link"
                                            href="javascript:void(0);">Sales &amp; Marketing</a></li>
                                </ul>
                            </nav>

                            <nav class="navbar navbar-expand">
                                <ul class="nav navbar-nav">
                                    <li class="nav-item" data-target="finance-slide"><a class="nav-link"
                                            href="javascript:void(0);">Finance</a></li>
                                    <li class="nav-item" data-target="supervisor-slide"><a class="nav-link"
                                            href="javascript:void(0);">Supervisor Board</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="sliderManager active" id="all-slide">
                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a style="background-image:url('/assets/images/ceo.png')"> <img
                                            alt="ceo" src="/assets/images/ceo.png" /> </a></div>
                            </div>

                            <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Craig Richard
                                    Bradshaw</a>

                                <div class="name">Chief Executive Officer</div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href="" style="background-image:url('/assets/images/cfo.png')"> <img
                                            alt="cfo" src="/assets/images/cfo.png" /> </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Stuart James
                                        Wells</a>

                                    <div class="name">Chief Financial Officer</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href="" style="background-image:url('/assets/images/dceo.png')"> <img
                                            alt="dceo (W)" src="/assets/images/dceo.png" /> </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Hady
                                        Seyeda</a>

                                    <div class="name">Deputy CEO of Masan High-Tech Materials</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Ms. Nguyen Thi Thanh Mai - Chief Accountant.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Ms. Nguyen Thi Thanh Mai - Chief Accountant.JPG" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Nguyen Thi Thanh
                                        Mai</a>

                                    <div class="name">Chief Accountant</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a
                                        style="background-image:url('/assets/images/team/Mr. Danny Le - Chairman of the board.jpg')">
                                        <img alt="ceo" src="/assets/images/team/Mr. Danny Le - Chairman of the board.jpg" />
                                    </a></div>
                            </div>

                            <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Danny Le</a>

                                <div class="name">Chairman of the board</div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Dominic Heaton - Head of Strategic Initiatives.JPG')">
                                        <img alt="cfo"
                                            src="/assets/images/team/Mr. Dominic Heaton - Head of Strategic Initiatives.JPG" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Dominic
                                        Heaton</a>

                                    <div class="name">Head of Strategic Initiatives</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Pham Nguyen Hai - Head of Legal.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. Pham Nguyen Hai - Head of Legal.JPG" /> </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Pham Nguyen
                                        Hai</a>

                                    <div class="name">Head of Legal</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Brenden Lee Weekes - Head of Operational Technology and Innovation.png')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. Brenden Lee Weekes - Head of Operational Technology and Innovation.png" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Brenden Lee
                                        Weekes </a>

                                    <div class="name">Head of Operational Technology &amp; Innovation</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Jeremy Bernard Hibberd - Director Informatics _ Technology.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. Jeremy Bernard Hibberd - Director Informatics _ Technology.JPG" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Jeremy
                                        Bernard Hibberd </a>

                                    <div class="name">Director Informatics Technology</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. William Parry Jones - Head of Sales and Marketing.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. William Parry Jones - Head of Sales and Marketing.JPG" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. William Parry
                                        Jones </a>

                                    <div class="name">Head of Sales and Marketing</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Stuart Arnold - MTC Operations Manager.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. Stuart Arnold - MTC Operations Manager.JPG" /> </a>
                                </div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Stuart Arnold
                                    </a>

                                    <div class="name">MTC Operations Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sliderManager " id="management-slide">
                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a style="background-image:url('/assets/images/ceo.png')"> <img
                                            alt="ceo" src="/assets/images/ceo.png" /> </a></div>
                            </div>

                            <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Craig Richard
                                    Bradshaw</a>

                                <div class="name">Chief Executive Officer</div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href="" style="background-image:url('/assets/images/cfo.png')"> <img
                                            alt="cfo" src="/assets/images/cfo.png" /> </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Stuart James
                                        Wells</a>

                                    <div class="name">Chief Financial Officer</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href="" style="background-image:url('/assets/images/dceo.png')"> <img
                                            alt="dceo (W)" src="/assets/images/dceo.png" /> </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Hady
                                        Seyeda</a>

                                    <div class="name">Deputy CEO of Masan High-Tech Materials</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sliderManager " id="operation-slide">
                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Brenden Lee Weekes - Head of Operational Technology and Innovation.png')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. Brenden Lee Weekes - Head of Operational Technology and Innovation.png" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Brenden Lee
                                        Weekes </a>

                                    <div class="name">Head of Operational Technology &amp; Innovation</div>
                                </div>
                            </div>
                        </div>

                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. Stuart Arnold - MTC Operations Manager.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. Stuart Arnold - MTC Operations Manager.JPG" /> </a>
                                </div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. Stuart Arnold
                                    </a>

                                    <div class="name">MTC Operations Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sliderManager " id="sales-slide">
                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Mr. William Parry Jones - Head of Sales and Marketing.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Mr. William Parry Jones - Head of Sales and Marketing.JPG" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Mr. William Parry
                                        Jones </a>

                                    <div class="name">Head of Sales and Marketing</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sliderManager " id="finance-slide">
                        <div class="sliderManager__item ">
                            <div class="sliderManager__item__image manager">
                                <div class="image "><a href=""
                                        style="background-image:url('/assets/images/team/Ms. Nguyen Thi Thanh Mai - Chief Accountant.JPG')">
                                        <img alt="dceo (W)"
                                            src="/assets/images/team/Ms. Nguyen Thi Thanh Mai - Chief Accountant.JPG" />
                                    </a></div>

                                <div class="info info-manager"><a class="title" href="javascript:void(0);">Nguyen Thi Thanh
                                        Mai</a>

                                    <div class="name">Chief Accountant</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sliderManager " id="supervisor-slide">&nbsp;</div>

                    <div>&nbsp;</div>

                    <section id="shareholders">
                        <div><strong><span style="font-size:36px;">Major Shareholders</span></strong></div>

                        <div>&nbsp;</div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="card border-primary">
                                    <div class="card-image"><img alt="masan" src="/assets/images/masan-logo.png"
                                            style="   
                                                                                                                                                                                                                                        padding: 10px 0px;
                                                                                                                                                                                                                                                    height: 100px;" />
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title"><strong><span style="color:#55ade2;">Masan Group Corporation
                                                </span></strong></h4>

                                        <p class="card-text" style="text-align: justify;">Masan Group Corporation (“Masan”
                                            or the “Company”) believes in doing well by doing good. The Company’s mission is
                                            to provide better products and services to the 90 million people of Vietnam, so
                                            that they can pay less for their daily basic needs. Masan aims to achieve this
                                            by driving productivity with technological innovations, trusted brands, and
                                            focusing on fewer but bigger opportunities that impact the most lives.</p>

                                        <p class="card-text" style="text-align: justify;">Masan Group’s member companies and
                                            associates are industry leaders in branded food and beverages, branded meat,
                                            value-added chemical processing, and financial services, altogether representing
                                            segments of Vietnam’s economy that are experiencing the most transformational
                                            growth.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card border-primary">
                                    <div class="card-image"><img alt="mitsubishi" src="/assets/images/mitsubishi-logo.png"
                                            style="    width: 100%;
                                                                                                                    padding: 30px 30px;
                                                                                                                                                                                                                                                                                        height: 100px;" />
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title"><span style="color:#55ade2;"><strong>Mitsubishi Materials
                                                    Corporation </strong></span></h4>

                                        <p class="card-text" style="text-align: justify;">Mitsubishi Materials Corporation
                                            (MMC) holds 109.915.542 ordinary shares (equivalent to 10.00% of the total
                                            shares in circulation). Mitsubishi Materials Group is an “integrated materials
                                            manufacturer” meeting customers’ needs by providing such basic materials as
                                            copper and cement, mechanical parts, electronic materials and components used in
                                            automobiles, home appliances as well as the tools used to make them. Besides,
                                            MMC is also involved in recycling and energy business. It is one of the core
                                            companies of Mitsubishi Group in Japan.</p>

                                        <p class="card-text" style="text-align: justify;">Click <a
                                                href="https://www.mmc.co.jp/corporate/en/"><span
                                                    style="color:#3498db;">here</span></a> to view MMC Website.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div><br />
                        <span style="color:#55ade2;"><span style="font-size:36px;">Awards</span></span>
                    </div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <div style="text-align: justify;"><em>Masan High-Tech Materials has constantly placed its strong
                            footprints on its journey of going global, entrenching its position as a leading global
                            high-tech material producer, and marking its footprint on the global mining map. Below are the
                            prestigious local and international awards and honors that Masan High Tech Materials and its
                            subsidiaries have proudly received in recognition of our progress and achievements throughout
                            the years. &nbsp;</em></div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <section id="award"
                        style="
                                                                                                                                                                                                background-image: url(/assets/images/award-background.png);
                                                                                                                                                                                                background-position: bottom center;
                                                                                                                                                                                                background-size: cover;
                                                                                                                                                                                                background-repeat: no-repeat;
                                                                                                                                                                                                width: 100vw;
                                                                                                                                                                                                position: relative;
                                                                                                                                                                                                margin-left: -50.6vw;
                                                                                                                                                                                                left: 50%;
                                                                                                                                                                                                padding-bottom: 200px;
                                                                                                                                                                                            ">
                        <div class="container">
                            <div class="row ">
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Top 500 Largest Enterprises in
                                                            Vietnam</strong></h5>

                                                    <h6 class="card-subtitle text-muted">The Certificate in voted and
                                                        awarded by Vietnam Report JSC</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>TOP 500 FASTEST GROWING ENTERPRISES IN
                                                            VIETNAM</strong></h5>

                                                    <h6 class="card-subtitle text-muted">The Certificate was voted and
                                                        awarded by Vietnam Report JSC</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row ">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Certificate for Masan Resources
                                                            Corporation As A Suistainable Enterprise in Vietnam
                                                            2019</strong></h5>

                                                    <h6 class="card-subtitle text-muted">Nominated and awarded by Vietnam
                                                        Chamber of Commerce and Industry.</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>outstanding achievements in occupational
                                                            hygiene and safety</strong></h5>

                                                    <h6 class="card-subtitle text-muted">The merit awarded by the Labour
                                                        Safety Department</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row ">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>ten-year implemention of the emulation
                                                            movement “thai nguyen joining hands to build new-style rural
                                                            areas” in petri 2010 - 2020</strong></h5>

                                                    <h6 class="card-subtitle text-muted">The Emulation flag was awarded by
                                                        Thai Nguyen Labour Federation</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>execelent achievement in the emulation
                                                            movement of “green - clean - tidy - ensured labour hygiene and
                                                            safety”</strong></h5>

                                                    <h6 class="card-subtitle text-muted">The Emulation flag was awarded by
                                                        Thai Nguyen Labour Federation</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Outstanding achievement in the emulation
                                                            movement of state budget performance in thai nguyen
                                                            province</strong></h5>

                                                    <h6 class="card-subtitle text-muted">Thai Nguyen Provincial People’s
                                                        Committe</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Certificate for nui phao mining company
                                                            limited to be “employee - favourited enterprise”</strong></h5>

                                                    <h6 class="card-subtitle text-muted">Awarded by Thai Nguyen Labour
                                                        Federation</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row ">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Certificate of merit for nui phao mining
                                                            company for the contributions to the socio-economic development
                                                            of dai tu district</strong></h5>

                                                    <h6 class="card-subtitle text-muted">Awarded by Dai Tu District People’s
                                                        Committe</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><strong>Outstanding achievement in the emulation
                                                            movement of state budget performance in thai nguyen
                                                            province</strong></h5>

                                                    <h6 class="card-subtitle text-muted">Thai Nguyen Provincial People’s
                                                        Committe</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title"><strong>certificate of merit for nui phao mining company
                                                    limited for their outstanding achievements in the emulation movement of
                                                    “thai nguyen jointly builds new-style rural area”</strong></h5>

                                            <h6 class="card-subtitle text-muted">Awarded by Thai Nguyen Provincial People’s
                                                Committe</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> --}}

                    @endif

        </div>
    </section>
    @if (!empty($blocks['MODAL']) && ($modal = $blocks->get('MODAL')->first()))
    {!! $modal->content !!}
    @endif

    {{-- <div class="modal teamModal fade" id="teamModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button class="close btn-close" type="button" data-dismiss="modal" aria-label="Close"><i
                        class="ic-close"></i></button>
                <div class="modal-body">
                    <div class="teamSlide">
                        <div class="teamSlide__item">
                            <div class="info">
                                <h4>Sustainabilityat MHT</h4>
                                <p>Our position on Sustainability remains a matter of public record, and one which we
                                    welcome dialogue on. Our delivery of the commitments made enables our people to
                                    understand our common approach, our values, how we measure success and the basis for our
                                    decision-making.</p>
                                <p>
                                    Within MHT policy is set at a global level, recognizing the requirement to act at a
                                    local level. Sustainability is about managing our risks, reducing our adverse
                                    environmental, social, economic and cultural impacts, while supporting and sustaining
                                    the industries, communities, and environments in which we operate.</p>
                                <p>
                                    We also believe MHT’s sustainability needs to include consideration of global issues
                                    such as pandemic management, climate change, supporting and respecting human rights,
                                    advocating for social change by supporting the rights of peoples within conflict zones
                                    and responsible sourcing initiatives so that end customers have a clear choice available
                                    to them on the products and brands they accept.</p>
                                <p>
                                    Across MHT we are determined to make a positive difference
                                </p>
                            </div>
                        </div>
                        <div class="teamSlide__item">
                            <div class="info">
                                <h4>Community & Social
                                    Development Objective</h4>
                                <p>We delivered on our commitment to promote the circular economy. We HCS is the global
                                    leader in the recycling of both hard and soft tungsten scrap. Each year HCS’s operations
                                    recycle a similar amount of tungsten to the annual tungsten production of the Nui Phao
                                    mine.</p>
                                <p>
                                    Our plans for 2020 were focused on four key areas: • Ensure our industrial chemical
                                    products remain the leading products in the eyes of our customers; ensure strong cost
                                    effectiveness in the market; Continuous work to enhance our people, processes and
                                    systems, to support the changing needs of industrial customers.</p>
                                <p>
                                    Promote the circular economy through the adoption of “Reduce, Reuse & Recycle”
                                    philosophy; • Safeguard the ecosystems of our people, our environment, our stakeholders;
                                    and • Ensure superior financial results on a long-term sustainable basis. On review we
                                    can say that we delivered well on all items. </p>
                                <p>
                                    MHT products maintained market leadership across our indicators; customer complaints,
                                    customer ratings, and our ability to maintain pricing advantage against like products
                                    demonstrated our delivery on this.</p>
                                <p>
                                    Whilst we did have some incidents across our workplaces in 2020 our trailing indicators
                                    further explained later in the report all showed continued strong performance globally.
                                </p>
                            </div>
                        </div>
                        <div class="teamSlide__item">
                            <div class="info">
                                <h4>Execution Strategy
                                    "Go Global"
                                </h4>
                                <p>
                                    Now truly global our execution strategy for building our business remains focused around
                                    three key areas:</p>
                                <p>
                                    Local knowledge with global considerations and understanding to facilitate project
                                    execution and asset optimization. Masan High-Tech Materials knows that a strong local
                                    understanding of the local sensitivities of community and customer concerns are critical
                                    for successful and sustainable business. We have demonstrated this both in Vietnam for
                                    the last 10 years and across the HCS sites over the last 100 years by working
                                    proactively with our local communities and global customers base via our local and
                                    international management team.</p>
                                <p>
                                    Use our ability to access and optimize capital and cash flows to acquire and develop
                                    quality assets. On identification of value accretive scalable assets, Masan High-Tech
                                    Materials has demonstrated the ability to access internal and external capital to
                                    acquire, develop and stabilize assets to build sustainable long-term shareholder value
                                    another excellent example of this area. We delivered on this in 2020 through engaging
                                    with MMC to have them inject equity and sign an MoU for technical advancement.</p>
                                <p>
                                    Masan High-Tech Materials remains hedged against commodity price fluctuations through
                                    the diversification of its portfolio of metals, minerals and revenue currencies. The HCS
                                    acquisition has further decreased tungsten revenue volatility via an expanded product
                                    range and through the processing of scraps sourced globally neither of which are index
                                    priced.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> --}}
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
