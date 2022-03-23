@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('H-C-STARCK', 'title');
@endphp
@section('content')

    <div>&nbsp;</div>
    <div>&nbsp;</div>

    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h3 class="titleHeading titleHeading--medium sus-title">{{ $title }}
                </h3>
            </div>
            <div class="col-md-2 text-right">
                <a class="text-gray" href="{{ getPageUrlByCode('SUBSIDAIRY') }}">
                    {{ trans('frontend.back') }}
                </a>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>

    <div class="homeSliderWrapper">
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

                        <div>H.C. Starck Tungsten Powders is a company of the Masan High-Tech Materials Group and is one of
                            the world’s leading suppliers of tungsten products with tungsten powder plants in Germany,
                            China, and Canada. With 100 years of experience the company develops, produces, and distributes
                            high-performance powders of tungsten and its compounds. H.C. Starck Tungsten Powders offers the
                            entire range of products along the tungsten powder value chain, processing both primary and
                            secondary raw materials and turning them into high quality, customer-specific tungsten
                            chemicals, metal powders and carbides. They all meet the highest standards of quality and
                            performance.
                        </div>
                        <div>&nbsp;</div>

                        <div>Highly qualified teams in research & development and in application technology are dedicated to
                            the solutions of tomorrow. Tailor-made solutions with outstanding material properties are
                            developed in close cooperation with customers.
                        </div>
                        <div>&nbsp;</div>

                        <div>Sustainability is a significant part of the company strategy. A large proportion of used raw
                            materials are obtained through recycling. Security of supply is an important issue in today’s
                            world. H.C. Starck Tungsten Powders has access to primary and secondary raw materials and is
                            therefore independent of sources in China, for example.
                        </div>
                        <div>&nbsp;</div>
                        Find out more about us <a href="{{ getPageUrlByCode('ABOUT') }}">here</a>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </section> --}}
                    {{-- <section id="subsidiary" class="vi">


                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h1><span style="color:#55ade2;">Về chúng tôi</span></h1>

                        <div>H.C. Starck Tungsten Powders là Công ty thành viên của Công ty Cổ phần Masan High-Tech Materials và là một trong những nhà cung cấp các sản phẩm vonfram hàng đầu thế giới với các nhà máy sản xuất bột vofnram tại Đức, Trung Quốc và Canada. Với 100 năm kinh nghiệm, công ty phát triển, sản xuất và phân phối các loại bột vonfram và vonfram hợp chất hiệu năng cao.  H.C. Starck Tungsten Powders cung cấp toàn bộ các sản phẩm cùng với chuỗi giá trị bột vonfram - chế biến cả nguyên liệu thô sơ cấp và thứ cấp để sản xuất ra các hóa chất, bột kim loại và cacbua vonfram chất lượng cao theo nhu cầu đa dạng của khách hàng. 

                        </div>
                        <div>Các sản phẩm này đều đáp ứng các tiêu chuẩn cao nhất về chất lượng và tính năng. 
                        </div>
                        <div>&nbsp;</div>

                        <div>Đội ngũ nhân sự có trình độ chuyên môn cao về nghiên cứu, phát triển và công nghệ ứng dụng luôn cống hiến hết mình để đưa ra các giải pháp cho tương lai. Các giải pháp thiết kế riêng với các đặc tính vật liệu vượt trội được phát triển với sự hợp tác chặt chẽ với khách hàng.

                        </div>
                        <div>&nbsp;</div>

                        <div>Phát triển bền vững là một phần quan trọng trong chiến lược hoạt động của Công ty. Một lượng lớn nguyên liệu đã sử dụng được thu lại thông qua tái chế. An ninh chuỗi cung ứng là một vấn đề quan trọng của thế giới hiện nay. Starck Tungsten Powders có sẵn nguồn nguyên liệu thô sơ cấp và thứ cấp, do vậy Công ty không phụ thuộc vào các nguồn cung tại Trung Quốc. 

                        </div>
                        <div>&nbsp;</div>
                        <div>H.C. Starck Tungsten Powders khẳng định vị thế vượt trội nhờ chất lượng tuyệt vời và chuyên môn sâu được tích lũy qua nhiều năm chuyên sản xuất Vonfram. Sản phẩm trung gian Amoni Paratungstate (APT) là sản đầu tiên được sản xuất từ nguyên liệu Vonfram, sau đó được chế biến thành Kim loại Vonfram (W), Cacbua Vonfram (WC) và Cacbua Vonfram đúc (CTC). Công ty cũng sản xuất Tantan và Cacbua Niobi. Với hệ thống và quy trình sản xuất hiện đại cùng đội ngũ chuyên gia giàu kinh nghiệm chuyên môn giúp đảm bảo chất lượng vật liệu luôn đạt tiêu chuẩn cao. Hệ thống quản lý chất lượng được chứng nhận và việc phân tích liên tục đặc tính sản phẩm giúp đảm bảo tính năng các sản phẩm của Công ty đáp ứng đúng mọi nhu cầu của khách hàng. Do vậy, khách hàng có thể hoàn toàn tin tưởng vào các sản phẩm có chất lượng vượt trội và ổn định, giúp họ có thể sản xuất được những công cụ chất lượng cao đồng thời giảm chi phí sản xuất.

                        </div>
                        <div>&nbsp;</div>



                        Find out more about us <a href="{{ getPageUrlByCode('ABOUT') }}">here</a>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </section> --}}
                </div>
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
