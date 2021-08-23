@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('copper', 'title');
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/copper-banner.png','text'=> $title ])

    <section class="mainContact" id='cooper'>
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{ $block->name }}</h1> --}}
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}
                    {{-- <div>&nbsp;</div>

                    <h1><span style="font-size:28px;"><span style="color:#00396f;">Copper (Cu) </span></span></h1>

                    <div style="text-align: justify;">Copper is a soft, malleable and ductile metal and finds wide use
                        industrially due to its exceptional thermal and electrical conductivity. Copper is also relatively
                        inert, corrosion-resistant and has been shown to have antimicrobial properties.</div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <div style="text-align: justify;">The largest application for copper is in the manufacture of electrical
                        cables and wiring. The construction industry is also a major consumer of copper through electrical
                        systems as well as copper piping in plumbing. Its corrosion resistance as well as its aesthetic
                        appeal have made it popular in roofing, and it is commonly found in the construction of domes,
                        spires and doors.</div>

                    <div style="text-align: justify;">&nbsp;</div>

                    <div>
                        <div style="text-align: justify;">Copper has nutrient qualities and is used as a fungicide in the
                            protection of crops and plants as well as enriching the soil. When copper is mixed with zinc it
                            produces brass, which is also used in a variety of industrial applications.</div>

                        <div>&nbsp;</div>

                        <h3><span style="font-size:24px;"><span style="color:#58595b;">Copper Application</span></span></h3>

                        <div><span style="color:#58595b;">Refined copper usage worldwide from 2009 to 2019&nbsp;</span>
                        </div>

                        <div><span style="font-size:14px;">(usage In 1,000 metric tons)</span></div>

                        <div>&nbsp;</div>

                        <div><svg style="overflow:visible;enable-background:new 0 0 778.5 484.3;" version="1.1"
                                viewbox="0 0 778.5 484.3" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                                <!--?xml version="1.0" encoding="utf-8"?-->
                                <style type="text/css">
                                    .st0 {
                                        fill: none;
                                        stroke: #58595B;
                                        stroke-width: 0.5;
                                        stroke-miterlimit: 10;
                                    }

                                    .st1 {
                                        fill: none;
                                        stroke: #58595B;
                                        stroke-width: 0.5;
                                        stroke-miterlimit: 10;
                                        stroke-dasharray: 4.0137, 2.0069;
                                    }

                                    .st2 {
                                        fill: #EEBE9A;
                                    }

                                    .st3 {
                                        fill: #58595B;
                                    }

                                    .st4 {
                                        font-family: 'Arial-Black';
                                    }

                                    .st5 {
                                        font-size: 11px;
                                    }

                                    .st6 {
                                        fill: none;
                                        stroke: #58595B;
                                        stroke-miterlimit: 10;
                                    }

                                </style>
                                <g>
                                    <g>
                                        <g>
                                            <g>
                                                <line class="st0" x1="94.8" x2="96.8" y1="363.9" y2="363.9"></line>
                                                <line class="st1" x1="98.8" x2="730" y1="363.9" y2="363.9"></line>
                                                <line class="st0" x1="731" x2="733" y1="363.9" y2="363.9"></line>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <line class="st0" x1="94.8" x2="96.8" y1="299.1" y2="299.1"></line>
                                                <line class="st1" x1="98.8" x2="730" y1="299.1" y2="299.1"></line>
                                                <line class="st0" x1="731" x2="733" y1="299.1" y2="299.1"></line>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <line class="st0" x1="94.8" x2="96.8" y1="234.2" y2="234.2"></line>
                                                <line class="st1" x1="98.8" x2="730" y1="234.2" y2="234.2"></line>
                                                <line class="st0" x1="731" x2="733" y1="234.2" y2="234.2"></line>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <line class="st0" x1="94.8" x2="96.8" y1="169.4" y2="169.4"></line>
                                                <line class="st1" x1="98.8" x2="730" y1="169.4" y2="169.4"></line>
                                                <line class="st0" x1="731" x2="733" y1="169.4" y2="169.4"></line>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <line class="st0" x1="94.8" x2="96.8" y1="104.5" y2="104.5"></line>
                                                <line class="st1" x1="98.8" x2="730" y1="104.5" y2="104.5"></line>
                                                <line class="st0" x1="731" x2="733" y1="104.5" y2="104.5"></line>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <line class="st0" x1="94.8" x2="96.8" y1="39.7" y2="39.7"></line>
                                                <line class="st1" x1="98.8" x2="730" y1="39.7" y2="39.7"></line>
                                                <line class="st0" x1="731" x2="733" y1="39.7" y2="39.7"></line>
                                            </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="234.3" width="39.2" x="104.6" y="194.4"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 108.9506 188.7798)">17
                                                    889</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 112.9379 447.8165)">2009</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="248" width="39.2" x="161.8" y="180.7"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 166.1625 175.0695)">19
                                                    130</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 170.1498 447.8165)">2010</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="256.1" width="39.2" x="219" y="172.7"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 223.3745 166.9847)">19
                                                    704</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 227.3618 447.8165)">2011</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="265.9" width="39.2" x="276.2" y="162.8"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 280.5865 157.1758)">20
                                                    468</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 284.5738 447.8165)">2012</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="279" width="39.2" x="333.5" y="149.8"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 337.7985 144.0999)">21
                                                    401</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 341.7858 447.8165)">2013</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="297.1" width="39.2" x="390.7" y="131.7"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 395.0105 126.0153)">22
                                                    908</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 398.9978 447.8165)">2014</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="299.9" width="39.2" x="447.9" y="128.8"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 452.2225 123.1806)">23
                                                    057</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 456.2098 447.8165)">2015</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="305.6" width="39.2" x="505.1" y="123.2"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 509.4344 117.5113)">23
                                                    487</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 513.4218 447.8165)">2016</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="308.4" width="39.2" x="562.3" y="120.3"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 566.6464 114.6766)">23
                                                    705</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 570.6337 447.8165)">2017</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="320.5" width="39.2" x="619.5" y="108.2"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 623.8584 102.579)">24
                                                    484</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 627.8457 447.8165)">2018</text> </g>
                                        </g>
                                        <g>
                                            <rect class="st2" height="317.7" width="39.2" x="676.7" y="111.1"></rect>
                                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 681.0704 105.4137)">24
                                                    427</text> </g>
                                            <g> <text class="st3 st4 st5"
                                                    transform="matrix(1 0 0 1 685.0577 447.8165)">2019</text> </g>
                                        </g>
                                        <line class="st6" x1="94.8" x2="733" y1="428.7" y2="428.7"></line>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 74.4455 431.9164)">0</text>
                                        </g>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 55.1852 367.0761)">5
                                                000</text> </g>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 302.2359)">10
                                                000</text> </g>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 237.3956)">15
                                                000</text> </g>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 172.5554)">20
                                                000</text> </g>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 107.7152)">25
                                                000</text> </g>
                                        <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 42.8749)">30
                                                000</text> </g>
                                    </g>
                                    <path class="st0" d="M768.2,484.1h-758c-5.5,0-10-4.5-10-10V10.2c0-5.5,4.5-10,10-10h758c5.5,0,10,4.5,10,10V474
                        C778.2,479.6,773.8,484.1,768.2,484.1z"></path>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 676.7004 471.8121)">© <a
                                            href="https://www.statista.com/statistics/267849/global-copper-consumption/#:~:text=In%202019%2C%20the%20preliminary%20data,to%2024.4%20million%20metric%20tons">Statista
                                            2021</a></text> </g>
                            </svg>
                            <div>&nbsp;</div>

                            <div>&nbsp;</div>

                            <div>In term of usage by industry, copper is mainly used for building construction, electric and
                                electronic products, and transportation equipment, which account for more than 80% of the
                                market in 2020 as per chart below:</div>

                            <div>&nbsp;</div>

                            <div>&nbsp;</div>
                        </div>

                        <div><svg  style="overflow:visible;enable-background:new 0 0 768.3 343.3;"
                                version="1.1" viewbox="0 0 768.3 343.3"  x="0px" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                                <style type="text/css">
                                    .cd0 {
                                        fill: #E45A29;
                                    }

                                    .cd1 {
                                        fill: #58595B;
                                    }

                                    .cd2 {
                                        fill: #80B93F;
                                    }

                                    .cd3 {
                                        fill: #33AFE4;
                                    }

                                    .cd4 {
                                        fill: #00396F;
                                    }

                                    .cd5 {
                                        font-family: 'Arial';
                                    }

                                    .cd6 {
                                        font-size: 16px;
                                    }

                                    .cd7 {
                                        font-family: 'Arial';
                                    }

                                </style>
                                <defs> </defs>
                                <g>
                                    <path class="cd0" d="M98.5,16.3c-32.8,15.5-59.9,41-77.3,72.6l150.4,82.7L98.5,16.3z">
                                    </path>
                                    <path class="cd1"
                                        d="M21.2,88.9C7.7,113.5,0,141.7,0,171.6c0,41.6,14.8,79.7,39.4,109.4l132.2-109.4L21.2,88.9z">
                                    </path>
                                    <path class="cd2" d="M171.6,0c-26.1,0-50.9,5.9-73.1,16.3l73.1,155.3V0z"></path>
                                    <path class="cd3"
                                        d="M343.3,171.6C343.3,76.8,266.4,0,171.6,0v171.6L244.7,327C303,299.5,343.3,240.3,343.3,171.6z">
                                    </path>
                                    <path class="cd4"
                                        d="M39.4,281c31.5,38,79,62.2,132.2,62.2c26.1,0,50.9-5.9,73.1-16.3l-73.1-155.3L39.4,281z">
                                    </path>
                                </g>
                                <g> <text transform="matrix(1 0 0 1 500.3387 93.108)">
                                        <tspan class="cd5 cd6" x="0" y="0">Industrial machinery and equipment 7%</tspan>
                                        &nbsp;&nbsp;<tspan class="cd7 cd6" x="210.2" y="0"></tspan>
                                    </text>
                                    <rect class="cd2" height="20" width="50" x="439" y="78.4"></rect> <text
                                        transform="matrix(1 0 0 1 500.3387 134.7311)">
                                        <tspan class="cd5 cd6" x="0" y="0">Consumer and general products 10%</tspan>
                                        <tspan class="cd7 cd6" x="141.8" y="0"></tspan>
                                    </text>
                                    <rect class="cd0" height="20" width="50" x="439" y="120"></rect> <text
                                        transform="matrix(1 0 0 1 500.3387 176.3542)">
                                        <tspan class="cd5 cd6" x="0" y="0">Transportation equipment 19%</tspan>
                                        <tspan class="cd7 cd6" x="112" y="0"></tspan>
                                    </text>
                                    <rect class="cd1" height="20" width="50" x="439" y="161.6"></rect> <text
                                        transform="matrix(1 0 0 1 500.3387 217.9773)">
                                        <tspan class="cd5 cd6" x="0" y="0">Electric and electronic products 21%</tspan>
                                        <tspan class="cd7 cd6" x="150" y="0"></tspan>
                                    </text>
                                    <rect class="cd4" height="20" width="50" x="439" y="203.3"></rect> <text
                                        transform="matrix(1 0 0 1 500.3387 259.6004)">
                                        <tspan class="cd5 cd6" x="0" y="0">Building construction 43%</tspan>
                                        <tspan class="cd7 cd6" x="72" y="0"></tspan>
                                    </text>
                                    <rect class="cd3" height="20" width="50" x="439" y="244.9"></rect>
                                </g>
                            </svg>
                            <div>&nbsp;</div>

                            <div>&nbsp;</div>
                        </div>
                    </div> --}}

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

            <h1><span style="color:#00396f;"><span style="font-size:20px;">Copper (Cu)</span> </span></h1>

            <div>Đồng là kim loại mềm, dẻo nên được ứng dụng rộng dãi trong ngành công nghiệp do có khả năng dẫn nhiệt và
                dẫn điện rất tốt. Đồng cũng là kim loại tương đối trơ, chống ăn mòn và có đặc tính kháng khuẩn.</div>

            <div>&nbsp;</div>

            <div>Ứng dụng thông dụng nhất của đồng là dùng để sản xuất dây cáp điện và dây dẫn. Ngành xây dựng là ngành tiêu
                thụ phần lớn sản phẩm đồng thông qua các hệ thống điện cũng như hệ thống cấp nước. Nhờ khả năng chống ăn mòn
                và giá trị thẩm mỹ cao nên người ta thường dùng đồng trong việc lợp mái, sản xuất mái vòm, mái vút và cửa ra
                vào.</div>

            <div>&nbsp;</div>

            <div>Đồng có tính chất là một vi chất dinh dưỡng, nên được dùng làm chất diệt nấm trong bảo vệ thực vật và mùa
                màng cũng như làm giàu đất. Đồng thau - kim loại được sử dụng trong nhiều ứng dụng công nghiệp được làm bằng
                cách trộn đồng với kẽm.<br />
                <br />
                &nbsp;
            </div>

            <div>&nbsp;</div>

            <h2><span style="color:#58595b;">Ứng dụng của Đồng</span></h2>

            <div><span style="color:#58595b;">Xét về các ứng dụng trong lĩnh vực công nghiệp, đồng chủ yếu được sử dụng
                    trong việc xây dựng công trình, chế tạo các sản phẩm điện và điện tử, các thiết bị giao thông vận tải,
                    chiếm hơn 80% thị trường vào năm 2020 như bảng dưới đây: </span></div>

            <div>
                <!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In  --><svg height="484.3px"
                    style="overflow:visible;enable-background:new 0 0 778.5 484.3;" version="1.1" viewbox="0 0 778.5 484.3"
                    width="778.5px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                    <style type="text/css">
                        .st0 {
                            fill: none;
                            stroke: #58595B;
                            stroke-width: 0.5;
                            stroke-miterlimit: 10;
                        }

                        .st1 {
                            fill: none;
                            stroke: #58595B;
                            stroke-width: 0.5;
                            stroke-miterlimit: 10;
                            stroke-dasharray: 4.0137, 2.0069;
                        }

                        .st2 {
                            fill: #EEBE9A;
                        }

                        .st3 {
                            fill: #58595B;
                        }

                        .st4 {
                            font-family: 'Lato-Bold';
                        }

                        .st5 {
                            font-size: 11px;
                        }

                        .st6 {
                            fill: none;
                            stroke: #58595B;
                            stroke-miterlimit: 10;
                        }

                    </style>
                    <defs> </defs>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <line class="st0" x1="94.8" x2="96.8" y1="363.9" y2="363.9"></line>
                                    <line class="st1" x1="98.8" x2="730" y1="363.9" y2="363.9"></line>
                                    <line class="st0" x1="731" x2="733" y1="363.9" y2="363.9"></line>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <line class="st0" x1="94.8" x2="96.8" y1="299.1" y2="299.1"></line>
                                    <line class="st1" x1="98.8" x2="730" y1="299.1" y2="299.1"></line>
                                    <line class="st0" x1="731" x2="733" y1="299.1" y2="299.1"></line>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <line class="st0" x1="94.8" x2="96.8" y1="234.2" y2="234.2"></line>
                                    <line class="st1" x1="98.8" x2="730" y1="234.2" y2="234.2"></line>
                                    <line class="st0" x1="731" x2="733" y1="234.2" y2="234.2"></line>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <line class="st0" x1="94.8" x2="96.8" y1="169.4" y2="169.4"></line>
                                    <line class="st1" x1="98.8" x2="730" y1="169.4" y2="169.4"></line>
                                    <line class="st0" x1="731" x2="733" y1="169.4" y2="169.4"></line>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <line class="st0" x1="94.8" x2="96.8" y1="104.5" y2="104.5"></line>
                                    <line class="st1" x1="98.8" x2="730" y1="104.5" y2="104.5"></line>
                                    <line class="st0" x1="731" x2="733" y1="104.5" y2="104.5"></line>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <line class="st0" x1="94.8" x2="96.8" y1="39.7" y2="39.7"></line>
                                    <line class="st1" x1="98.8" x2="730" y1="39.7" y2="39.7"></line>
                                    <line class="st0" x1="731" x2="733" y1="39.7" y2="39.7"></line>
                                </g>
                            </g>
                            <g>
                                <rect class="st2" height="234.3" width="39.2" x="104.6" y="194.4"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 108.9506 188.7798)">17 889</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 112.9379 447.8165)">2009</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="248" width="39.2" x="161.8" y="180.7"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 166.1625 175.0695)">19 130</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 170.1498 447.8165)">2010</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="256.1" width="39.2" x="219" y="172.7"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 223.3745 166.9847)">19 704</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 227.3618 447.8165)">2011</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="265.9" width="39.2" x="276.2" y="162.8"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 280.5865 157.1758)">20 468</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 284.5738 447.8165)">2012</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="279" width="39.2" x="333.5" y="149.8"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 337.7985 144.0999)">21 401</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 341.7858 447.8165)">2013</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="297.1" width="39.2" x="390.7" y="131.7"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 395.0105 126.0153)">22 908</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 398.9978 447.8165)">2014</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="299.9" width="39.2" x="447.9" y="128.8"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 452.2225 123.1806)">23 057</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 456.2098 447.8165)">2015</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="305.6" width="39.2" x="505.1" y="123.2"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 509.4344 117.5113)">23 487</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 513.4218 447.8165)">2016</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="308.4" width="39.2" x="562.3" y="120.3"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 566.6464 114.6766)">23 705</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 570.6337 447.8165)">2017</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="320.5" width="39.2" x="619.5" y="108.2"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 623.8584 102.579)">24 484</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 627.8457 447.8165)">2018</text> </g>
                            </g>
                            <g>
                                <rect class="st2" height="317.7" width="39.2" x="676.7" y="111.1"></rect>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 681.0704 105.4137)">24 427</text>
                                </g>
                                <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 685.0577 447.8165)">2019</text> </g>
                            </g>
                            <line class="st6" x1="94.8" x2="733" y1="428.7" y2="428.7"></line>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 74.4455 431.9164)">0</text> </g>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 55.1852 367.0761)">5 000</text> </g>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 302.2359)">10 000</text> </g>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 237.3956)">15 000</text> </g>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 172.5554)">20 000</text> </g>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 107.7152)">25 000</text> </g>
                            <g> <text class="st3 st4 st5" transform="matrix(1 0 0 1 49.5427 42.8749)">30 000</text> </g>
                        </g>
                        <path class="st0" d="M768.2,484.1h-758c-5.5,0-10-4.5-10-10V10.2c0-5.5,4.5-10,10-10h758c5.5,0,10,4.5,10,10v463.8
                      C778.2,479.6,773.8,484.1,768.2,484.1z"></path>
                    </g>
                </svg>
                <div>&nbsp;</div>

                <div>&nbsp;</div>

                <div>&nbsp;</div>

                <div>In term of usage by industry, copper is mainly used for building construction, electric and electronic
                    products, and transportation equipment, which account for more than 80% of the market in 2020 as per
                    chart below:</div>

                <div>&nbsp;</div>

                <div>&nbsp;</div>

                <div>&nbsp;</div>
            </div>

            <div><svg height="343.3px" style="overflow:visible;enable-background:new 0 0 768.3 343.3;" version="1.1"
                    viewbox="0 0 768.3 343.3" width="768.3px" x="0px" xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
                    <style type="text/css">
                        .cd0 {
                            fill: #E45A29;
                        }

                        .cd1 {
                            fill: #58595B;
                        }

                        .cd2 {
                            fill: #80B93F;
                        }

                        .cd3 {
                            fill: #33AFE4;
                        }

                        .cd4 {
                            fill: #00396F;
                        }

                        .cd5 {
                            font-family: 'Lato-Bold';
                        }

                        .cd6 {
                            font-size: 16px;
                        }

                        .cd7 {
                            font-family: 'Lato-Regular';
                        }

                    </style>
                    <defs> </defs>
                    <g>
                        <path class="cd0" d="M98.5,16.3c-32.8,15.5-59.9,41-77.3,72.6l150.4,82.7L98.5,16.3z"></path>
                        <path class="cd1"
                            d="M21.2,88.9C7.7,113.5,0,141.7,0,171.6c0,41.6,14.8,79.7,39.4,109.4l132.2-109.4L21.2,88.9z">
                        </path>
                        <path class="cd2" d="M171.6,0c-26.1,0-50.9,5.9-73.1,16.3l73.1,155.3V0z"></path>
                        <path class="cd3"
                            d="M343.3,171.6C343.3,76.8,266.4,0,171.6,0v171.6L244.7,327C303,299.5,343.3,240.3,343.3,171.6z">
                        </path>
                        <path class="cd4"
                            d="M39.4,281c31.5,38,79,62.2,132.2,62.2c26.1,0,50.9-5.9,73.1-16.3l-73.1-155.3L39.4,281z">
                        </path>
                    </g>
                    <g> <text transform="matrix(1 0 0 1 500.3387 93.108)">
                            <tspan class="cd5 cd6" x="0" y="0">Industrial machinery and equipment</tspan>
                            <tspan class="cd7 cd6" x="243.2" y="0"> 7%</tspan>
                        </text>
                        <rect class="cd2" height="20" width="50" x="439" y="78.4"></rect> <text
                            transform="matrix(1 0 0 1 500.3387 134.7311)">
                            <tspan class="cd5 cd6" x="0" y="0">Consumer and general products</tspan>
                            <tspan class="cd7 cd6" x="214.8" y="0"> 10%</tspan>
                        </text>
                        <rect class="cd0" height="20" width="50" x="439" y="120"></rect> <text
                            transform="matrix(1 0 0 1 500.3387 176.3542)">
                            <tspan class="cd5 cd6" x="0" y="0">Transportation equipment</tspan>
                            <tspan class="cd7 cd6" x="176.6" y="0"> 19%</tspan>
                        </text>
                        <rect class="cd1" height="20" width="50" x="439" y="161.6"></rect> <text
                            transform="matrix(1 0 0 1 500.3387 217.9773)">
                            <tspan class="cd5 cd6" x="0" y="0">Electric and electronic products</tspan>
                            <tspan class="cd7 cd6" x="209.9" y="0"> 21%</tspan>
                        </text>
                        <rect class="cd4" height="20" width="50" x="439" y="203.3"></rect> <text
                            transform="matrix(1 0 0 1 500.3387 259.6004)">
                            <tspan class="cd5 cd6" x="0" y="0">Building construction</tspan>
                            <tspan class="cd7 cd6" x="143.4" y="0"> 43%</tspan>
                        </text>
                        <rect class="cd3" height="20" width="50" x="439" y="244.9"></rect>
                    </g>
                </svg>
                <div>&nbsp;</div>

                <div>&nbsp;</div>
            </div>

            <h2 class="sub-title" data-waypoint="100%"><span style="color:#00396f;">Other Products</span></h2>

            <div class="listLease mediaEffect-2 active px-0 mt-3" data-waypoint="100%">
                <div class="row">
                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <h2 class="image effectImg"><a href=""
                                        style="background-image:url('/assets/images/Bismuth.jpg')"> <img alt="Bismuth"
                                            src="/assets/images/Bismuth.jpg" /> </a></h2>

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
                                        style="background-image:url('/assets/images/Tungsten.jpg')"> <img alt="Tungsten (W)"
                                            src="/assets/images/Tungsten.jpg" /> </a></div>

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
