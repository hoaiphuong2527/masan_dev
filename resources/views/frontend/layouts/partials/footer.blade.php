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
                            title="Sitemap "><span>{{ trans('frontend.sitemap') }}</span></a>
                    </li>
                    <li><a href="{{ getPageUrlByCode('PRIVACY-POLICY') }}"
                            title="{{ $title = getPageUrlByCode('PRIVACY-POLICY', 'title') }}"><span>{{ $title }}</span></a>
                    </li>
                    <li><a href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'annual-reports']) }}"
                            title="{{ $title = getPageUrlByCode('DOWNLOAD', 'title') }}"><span>Download</span></a>
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
            <div class="col-md-4 pt-3">
                <div class="copyright">
                    <p><span class="text-left">{{ trans('frontend.coppy_right') }}</span>
                    </p>
                </div>
            </div>
            <div class="col-md-8 pt-3">
                <div class="copyright text-right">
                    <span class="">{{ trans('frontend.coppy_right_2') }}</span>
                    </p>
                </div>
            </div>
            <div class="popup-overlay">
                <div class="popup">
                    <p class="title">Cookies</p>
                    <p>We use website cookies
                    </p>
                    <p>Cookies are used to help us understand and improve how our website works in order to give you the
                        best experience on our website. By your continued use of this site you accept such use. For more
                        details, please see our Privacy Policy & Legal Notice.</p>
                    <a href="javascript:;" class="close">Close</a>
                    <a href="javascript:;" class="submit">I Agree to Use of Data</a>
                </div>
            </div>
        </div>

    </div>
</footer>
