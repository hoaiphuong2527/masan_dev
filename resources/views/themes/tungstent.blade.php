@extends('frontend.layouts.master')

@section('style')
@endsection
@php
    $title = getPageUrlByCode('tungsten', 'title')
@endphp
@section('content')
    @include('themes.partials.base',['banner'=>'/assets/images/tungsteng-banner.png','text'=> $title ])

    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                {{-- <h1 class="titleHeading" data-waypoint="100%">{{ $block->name }}</h1> --}}
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}

                </div>
            @endif
            @include('themes.partials.list_products')



            {{-- <h1><span style="font-size:26px;"><span style="color:#00396f;">Vonfram (W)

                    </span></span></h1>

            <div><span style="color:#58595b;">Vonfram là một kim loại rất cứng, có điểm nóng chảy cao nhất trong tất cả các kim loại, có mật độ gần gấp đôi Chì, và độ cứng gần bằng Kim cương khi ở dạng cacbua vonfram. 


                </span></div>
            <div>&nbsp;</div>

            <div><span style="color:#58595b;">Do các đặc tính nội tại độc đáo của nó, vonfram phù hợp với nhu cầu của nhiều ngành công nghiệp nặng then chốt như chế tạo, dầu khí, xây dựng, năng lượng, ô tô và hàng không. Vonfram cũng là một yếu tố thiết yếu trong ngành công nghiệp thép, ứng dụng trong sản xuất thép không gỉ, hợp kim thép đến siêu hợp kim. Các sản phẩm hóa chất trung gian vonfram được sản xuất tại Masan Tungsten LLC ở Thái Nguyên có rất nhiều ứng dụng đa dạng.


                </span></div>
            <div>&nbsp;</div>

            <div><span style="color:#58595b;">Khách hàng có thể tiếp tục chế biến sâu các sản phẩm vonfram của Công ty thành cacbua vonfram và bột kim loại vonfram để sản xuất ra nhiều sản phẩm cao cấp như dụng cụ cắt và thép cán.


                </span></div>



            <div>&nbsp;</div>


            <h2><span style="font-size:28px;"><span style="color:#58595b;">Ứng dụng của Vonfram
            </span></span></h2>

            <div><span style="color:#58595b;">Vonfram là một kim loại chuyển tiếp hiếm. Ứng dụng của Vonfram trong ngành công nghiệp nặng đã được chứng minh rõ ràng trong nhiều nghiên cứu do đặc tính vật lý vượt trội như nhiệt độ nóng chảy và độ cứng cao. Ngoài ra, vonfram cùng với các hợp chất của nó đang ngày càng có vai trò quan trọng đối với ngành điện tử và công nghệ hiển thị cũng như trong một số ứng dụng độc tôn nhất định. 



                </span></div>

            <div>&nbsp;</div>

            <div><span style="color:#58595b;">Bên cạnh ứng dụng làm dây tóc trong bóng đèn sợi đốt, vonfram ngày càng được sử dụng làm vật liệu trong thiết kế súng phát xạ trường, sử dụng trong kính hiển vi điện tử, vi mạch (IC), và nhờ vào mật độ phân tử cao, được sử dụng làm vật liệu chắn cho các nguồn bức xạ năng lượng cao. Vonfram cũng được sử dụng trong công nghệ nano điện tử để chế tạo dây nano, do tỷ lệ giữa diện tích bề mặt và thể tích cao nên dự kiến vonfram sẽ được ứng dụng trong đầu dò độ pH (chỉ số đo độ hoạt động của các ion hydro (H+)) và cảm biến khí gas. 


                </span></div>

            <div>&nbsp;</div>

            <div><span style="color:#58595b;">Do có những đặc tính đặc biệt nên vonfram là kim loại không thể thiếu trong nhiều ngành công nghiệp chủ chốt. 


                </span></div>

            <div>&nbsp;</div>
            <div>&nbsp;</div>


            <div class="listLease-tungsteng mediaEffect-2 active px-0 mt-3" data-waypoint="100%">
                <div class="row">
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Mechanical.jpg')">
                                        <img alt="Mechanical" src="/assets/images/Mechanical.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Ngành chế tạo máy và chế tạo công cụ
                                </a>
                                <p>Thật khó để tưởng tượng được ngành chế tạo máy sẽ như thế nào nếu không có các công cụ hiệu năng cao. Độ chính xác và tuổi thọ của công cụ không ngừng tăng lên cho phép người dùng tối ưu hóa công việc. Chúng tôi cung cấp các loại bột cacbua vonfram có độ tinh khiết cao với những ứng dụng cụ thể.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Automotive.jpg')">
                                        <img alt="Automotive" src="/assets/images/Automotive.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Công nghiệp sản xuất ô tô
                                </a>
                                <p> Các công nghệ sản xuất trong kỹ thuật chế tạo ô tô hiện đại đòi hỏi các công cụ cacbua hiệu năng cao - như một ví dụ để chế tạo các khối động cơ hoặc phanh. Bột cacbua vonfram thích hợp để sản xuất các công cụ gia công, tạo hình và gia công kim loại nói chung.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Aerospace.jpg')">
                                        <img alt="Aerospace" src="/assets/images/Aerospace.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Hàng không vũ trụ

                                </a>
                                <p> Trong ngành hàng không, nhờ có khối lượng riêng và độ bền cao, vonfram hoặc hợp kim vonfram được sử dụng trong các đối trọng, bộ phận chống rung cho cánh tà hoặc để cân bằng lá cánh quạt.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Oilandgas.jpg')">
                                        <img alt="Oilandgas" src="/assets/images/Oilandgas.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Ngành dầu khí

                                </a>
                                <p> H.C. Starck Tungsten Powders phát triển và sản xuất các loại bột vonfram đặc biệt dùng trong khai thác dầu khí. Kim loại này không chỉ sử dụng trong các đầu máy khoan hiệu suất cao, mà còn được sử dụng trong lượng nổ lõm được khoét quanh đá cũng như cho phép dầu khí chảy ra ngoài. 
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Chemical.jpg')">
                                        <img alt="Chemical" src="/assets/images/Chemical.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Ngành hóa chất

                                </a>
                                <p> Trong công nghiệp hóa chất, vonfram được sử dụng cho nhiều ứng dụng, đặc biệt là chất xúc tác như chất xúc tác oxy hóa. 

                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Medical.jpg')">
                                        <img alt="Medical" src="/assets/images/Medical.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Kỹ thuật y tế

                                </a>
                                <p> Ngành kỹ thuật y khoa sử dụng vonfram để giúp thiết bị hoạt động hiệu quả và êm ái hơn. Các bộ phận làm bằng kim loại vonfram được sử dụng trong chẩn đoán bằng tia X, các phương pháp điều trị hiện đại. Ví dụ: để che chắn và tập trung tia X cứng hoặc bức xạ gamma.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Electrical.jpg')">
                                        <img alt="Electrical" src="/assets/images/Electrical.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Công nghiệp điện

                                </a>
                                <p> Với khả năng chịu nhiệt cao của vật liệu đồng-vonfram cùng với tính dẫn nhiệt và dẫn điện tốt, nên những vật liệu này được sử dụng cho ứng dụng trong các công tắc khóa hiệu suất cao, bộ tản nhiệt trong ngành điện hoặc điện cực chống ăn mòn.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 break360">
                        <div class="listLease-tungsteng__item">
                            <div class="listLease-tungsteng__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/cleaner.jpg')">
                                        <img alt="cleaner" src="/assets/images/cleaner.jpg" /> </a></h2>
                            </div>
                            <div class="info"><a class="title" href="javascript:void(0);">Vonfram cho một môi trường sạch hơn

                                </a>
                                <p>Vonfram là nguyên tố hóa học nặng nhất có hoạt tính sinh học. Độc tính của vonfram khá thấp, nhất là khi so sánh với các kim loại khác, tuy nhiên, đây vẫn là đề tài đang được nghiên cứu. Với nỗ lực vì một môi trường sạch hơn, chì đã được xác định là một trong những kim loại cần phải sớm thay thế. Theo Danh mục Ưu tiên 100 Chất Nguy hại nhất của Chính phủ Hoa Kỳ, chì được xếp đứng thứ hai. Ngoài ra, Cơ quan Bảo vệ Môi trường Hoa Kỳ cũng liệt kê chì vào hàng hóa chất độc hại và quy định giới hạn ngưỡng về nồng độ chì trong không khí, đất, nước và cây trồng. 
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div>&nbsp;</div>

            <h2 class="sub-title" data-waypoint="100%"><span style="color:#00396f;">Other Products</span></h2>

            <div class="listLease mediaEffect-2 active px-0 mt-3" data-waypoint="100%">
                <div class="row">
                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <h2 class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Bismuth.jpg')">
                                        <img alt="Bismuth" src="/assets/images/Bismuth.jpg" /> </a></h2>
                                <h4>Bismuth (Bi)</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <div class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Fluorspar.jpg')"> <img alt="Fluorspar"
                                            src="/assets/images/Fluorspar.jpg" /> </a></div>

                                <h4>Fluorspar (CaF2)</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-6 break360">
                        <div class="listLease__item">
                            <div class="listLease__item__image">
                                <div class="image effectImg"><a href="javascript:void(0)"
                                        style="background-image:url('/assets/images/Tungsten.jpg')">
                                        <img alt="Tungsten (W)" src="/assets/images/Tungsten.jpg" /> </a></div>

                                <h4>Tungsten (W)</h4>
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
