<!-- <div class="footer__totop"><i class="ic-top"></i><span>{{trans('frontend.top')}}</span></div> -->
<footer class="bd-footer landing-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <ul class="nav-footer" id="nav-footer">
                    <li><a href="{{route('page.home')}}" title="{{trans('menu.home')}}"><span>{{trans('menu.home')}}</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('CONTACT')}}" title="{{trans('menu.contact_us')}}"><span>{{trans('menu.contact_us')}}</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('PRIVACY-POLICY')}}" title="{{trans('frontend.privacy_policy')}}"><span>{{trans('frontend.privacy_policy')}}</span></a>
                    </li>
                    <li><a href="{{getPageUrlByCode('SITEMAP')}}" title="Sitemap "><span>{{trans('frontend.sitemap')}}</span></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-8">
                <div class="share-footer">
                    <div class="share-footer-inner">
                        <a target="_blank" href="{{ System::content('facebook') }}"><i class="fa fa-facebook"></i></a>
                        <a target="_blank" href="{{ System::content('likedin') }}"><i class="fa fa-linkedin"></i></a>
                        @if($item = System::content('youtube'))
                            <a target="_blank" href="{{$item}}"><i class="fa fa-youtube"></i></a>
                        @endif
                        @if($item = System::content('google'))
                            <a target="_blank" href="{{$item}}"><i class="fa fa-google-plus"></i></a>
                        @endif
                        @if($item = System::content('twitter'))
                            <a target="_blank" href="{{$item}}"><i class="fa fa-twitter"></i></a>
                        @endif
                        @if($item = System::content('instagram'))
                            <a target="_blank" href="{{$item}}"><i class="fa fa-instagram"></i></a>
                        @endif
                        @if($item = System::content('weixin'))
                            <a class="showwechat" href="#"><i class="fa fa-weixin"></i><span class="box_weChat"><img src="{{$item}}" alt=""></span></a>
                            {{--<a target="_blank" href="{{$item}}"><i class="fa fa-weixin"></i></a>--}}
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright © 2018 BW Industrial Development JSC. All rights reserved. Web Design by BW Industrial Development JSC</p>
        </div>
    </div>
</footer>