<div class="footer__totop"><i class="ic-top"></i><span>{{trans('frontend.top')}}</span></div>
<footer class="bd-footer">
    <div class="container">
        <div class="row footer-logo">
            <div class="col-lg-4 col-9"><a class="logo" href="{{route('page.home')}}"><img src="/assets/images/masan-logo.svg" alt=""></a></div>
            <div class="col-md-8 ">
                <div class="row brand-logo">
                    <img src="/assets/images/masan-tungsten-logo.svg" alt="">
                    <img src="/assets/images/nuiphaomining-logo.svg" alt="">
                    <img src="/assets/images/tungsten-powders-logo.svg" alt="">
                    <img src="/assets/images/chemilytics-logo.svg" alt="">
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="col-md-12">
                <ul class="nav-footer" id="nav-footer">
 
                    <li><a href="{{getPageUrlByCode('ABOUT')}}" title="{{ $title = getPageUrlByCode('ABOUT', 'title') }}"><span>{{ $title }}</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('SITEMAP')}}" title="Sitemap "><span>{{trans('frontend.sitemap')}}</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('PRIVACY-POLICY')}}" title="{{trans('frontend.privacy_policy')}}"><span>{{trans('frontend.privacy_policy')}}</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('DOWNLOAD')}}" title="{{ $title = getPageUrlByCode('DOWNLOAD', 'title') }}"><span>Download</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('CONTACT')}}" title="{{ $title = getPageUrlByCode('CONTACT', 'title') }}"><span>{{ $title }}</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="copyright">
                    <p>© 2021 <span>Masan High-Tech Materials Corporation.</span></p>
                </div>
            </div>
            <div class="col-md-8">
            <div class="note">
                <p>By using this site you agree that we can place cookies on your device. View our privacy policy for details.</p>
            </div>
        </div>

    </div>
</footer>