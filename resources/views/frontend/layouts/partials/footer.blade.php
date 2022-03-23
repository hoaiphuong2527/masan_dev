<div class="footer__totop"><i class="ic-top"></i><span>{{ trans('frontend.top') }}</span></div>
<footer class="bd-footer">
    <div class="container">
        {{-- <div class="row footer-logo">
            <div class="col-lg-4 col-9"><a class="logo" href="{{route('page.home')}}"><img src="/assets/images/masan-logo.svg" alt=""></a></div>
            <div class="col-md-8 ">
                <div class="row brand-logo">
                    <img src="/assets/images/masan-tungsten-logo.svg" alt="">
                    <img src="/assets/images/nuiphaomining-logo.svg" alt="">
                    <img src="/assets/images/tungsten-powders-logo.svg" alt="">
                    <img src="/assets/images/chemilytics-logo.svg" alt="">
                </div>
            </div>
        </div> --}}
        <div class="row">
            <div class="col-md-10">
                <ul class="nav-footer" id="nav-footer">
                    <li><a href="{{ getPageUrlByCode('ABOUT') }}"
                            title="{{ $title = getPageUrlByCode('ABOUT', 'title') }}"><span>{{ $title }}</span></a>
                    </li>
                    <li><a href="{{ getPageUrlByCode('SITEMAP') }}"
                            title="Sitemap"><span>{{ $title = getPageUrlByCode('SITEMAP', 'title') }}</span></a>
                    </li>
                    <li><a href="{{ getPageUrlByCode('PRIVACY-POLICY') }}"
                            title="{{ $title = getPageUrlByCode('PRIVACY-POLICY', 'title') }}"><span>{{ $title }}</span></a>
                    </li>
                    <li>
                        @if ($composer_locale == 'en')
                            <a href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'annual-reports']) }}"
                                title="{{ $title = getPageUrlByCode('DOWNLOAD', 'title') }}"><span>Download</span></a>
                        @else
                            <a href="{{ route('media.investments.category', ['parent_slug' => 'quan-he-co-dong', 'slug' => 'bao-cao-thuong-nien']) }}"
                                title="{{ $title = getPageUrlByCode('DOWNLOAD', 'title') }}"><span>Quan hệ Cổ đông</span></a>
                        @endif
                    </li>
                    <li><a href="{{ getPageUrlByCode('CONTACT') }}"
                            title="{{ $title = getPageUrlByCode('CONTACT', 'title') }}"><span>{{ $title }}</span></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-inline d-flex">
                    <li><a href="https://www.linkedin.com/company/masan-hightech-materials/"><i class="fa fa-linkedin"
                                aria-hidden="true"></i></a>
                    </li>
                    <li><a href="https://www.facebook.com/nuiphaominingcompany/"><i class="fa fa-facebook-square"
                                aria-hidden="true"></i></a>
                    </li>
                    <li><a href="https://www.youtube.com/channel/UCnpPGli-n4Oe635hr6xJ7aA"><i class="fa fa-youtube-play"
                                aria-hidden="true" style="
                        font-size: 31px;
                        margin-top: 2px;
                    "></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 px-lg-0 pt-3">
                <div class="copyright">
                    <p>
                        <span class="text-left">{{ trans('frontend.coppy_right') }}</span>
                    </p>
                </div>
            </div>
            <div class="col-md-7 lb-any px-lg-0 pt-3">
                <div class="copyright text-right">

                    @if ($composer_locale == 'en')
                        <span class="">{{ trans('frontend.coppy_right_2') }}
                            View our
                            <a href="{{ getPageUrlByCode('PRIVACY-POLICY') }}"
                                title="{{ $title = getPageUrlByCode('PRIVACY-POLICY', 'title') }}"><span>Privacy
                                    Policy</span> </a>
                            for details.
                        </span>
                        @else
                        <span class="">
                            Việc truy cập vào website này đồng nghĩa với việc chấp nhận cookies được gắn trên thiết bị.
                            <br />Để biết thêm thông tin, vui lòng xem 
                            <a
                                href="{{ getPageUrlByCode('PRIVACY-POLICY') }}"
                                title="{{ $title = getPageUrlByCode('PRIVACY-POLICY', 'title') }}"><span>Chính sách
                                    bảo mật.</span></a>
                        </span>
                    @endif
                    </span>
                    </p>
                </div>
            </div>
            @if ($composer_locale == 'en')
                <div class="popup-overlay">
                    <div class="popup">
                        <p class="title">We Value Your Privacy</p>
                        <p>
                            We use ‘cookies’ to help identify you and your devices, conduct analysis and improve our
                            website in order to enhance your experience on the site. By continued visit of this site,
                            you have agreed to such use. For more details, please see our
                            <a href="{{ getPageUrlByCode('PRIVACY-POLICY') }}"
                                title="{{ $title = getPageUrlByCode('PRIVACY-POLICY', 'title') }}"><span>Privacy
                                    Policy & Legal Notice.</span></a>
                        </p>
                        <a href="javascript:;" class="close text-white">CLOSE</a>
                        <a href="javascript:;" class="submit">ACCEPT ALL COOKIES</a>
                    </div>
                </div>
            @else
                <div class="popup-overlay">
                    <div class="popup">
                        <p class="title">Chúng Tôi Tôn Trọng Quyền Riêng Tư
                        </p>
                        <p>
                            Chúng tôi sử dụng “cookies” cho trang web để giúp chúng tôi hiểu và cải thiện cách hoạt động
                            của trang web nhằm mang đến cho bạn trải nghiệm tốt nhất trên trang web của chúng tôi. Bằng
                            cách tiếp tục sử dụng trang web này, bạn chấp nhận việc sử dụng như vậy. Để biết thêm chi
                            tiết, vui lòng xem <a href="{{ getPageUrlByCode('PRIVACY-POLICY') }}"
                                title="{{ $title = getPageUrlByCode('PRIVACY-POLICY', 'title') }}"><span>Chính sách
                                    riêng tư & Thông cáo pháp lý</span></a> của chúng tôi.</p>
                        <a href="javascript:;" class="close text-white">ĐÓNG</a>
                        <a href="javascript:;" class="submit">TÔI ĐỒNG Ý</a>
                    </div>
                </div>
            @endif


        </div>

    </div>
</footer>
