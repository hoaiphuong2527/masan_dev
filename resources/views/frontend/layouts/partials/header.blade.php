<header class="header">
    <div class="container">
        <div class="row mt-xs-3">
            <div class="col-lg-3 col-12"><a class="logo" href="{{ route('page.home') }}"><img
                        src="/assets/images/masan-logo.svg" alt=""></a></div>
            <div class="col-lg-9 col-12"><a class="header__toggle"
                    href="#"><span></span><span></span><span></span><span></span></a>
                <div class="row">
                    <div class="col-lg-10 col-12">
                        <div class="wrapMenu">
                            <div class="menuMain">
                                <ul class="nav-menu" id="sub-menu">
                                    <li class="nav-item"><a class="nav-link" href="{{ getPageUrlByCode('CONTACT') }}"
                                            title="{{ $title = getPageUrlByCode('CONTACT', 'title') }}"><span>{{ $title }}</span></a>
                                    @if ($composer_locale == 'vi')
                                        <li class="nav-item hasChild"><a class="nav-link"
                                                href="{{ route('media.news.category', ['parent_slug' => 'tin-tuc', 'slug' => 'thong-cao-bao-chi']) }}"
                                                title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ $title }}</span></a><span
                                                class="expand"><i class="fa fa-angle-down"></i></span>
                                            <ul class="menuChild" id="navbar-70">
                                                <li><a
                                                        href="{{ route('media.news.category', ['parent_slug' => 'tin-tuc', 'slug' => 'thong-cao-bao-chi']) }}">
                                                        <span>Thông
                                                            cáo báo chí</span></a></li>
                                                <li class=""><a
                                                        href="{{ route('media.news.category', ['parent_slug' => 'tin-tuc', 'slug' => 'ban-tin-mht']) }}">
                                                        <span>Điểm
                                                            tin MHT</span></a>
                                                </li>
                                                <li><a href="{{ getPageUrlByCode('MEDIA-GALLERY-VIDEO') }}"
                                                        title="{{ $title = getPageUrlByCode('MEDIA-GALLERY-VIDEO', 'title') }}"><span>{{ $title }}</span></a>
                                                </li>
                                            </ul>
                                        </li>
                                    @else
                                        <li class="nav-item hasChild"><a class="nav-link"
                                                href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'mht-in-the-news']) }}"
                                                title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ $title }}</span></a><span
                                                class="expand"><i class="fa fa-angle-down"></i></span>
                                            <ul class="menuChild" id="navbar-70">

                                                <li><a
                                                        href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'press-release']) }}">
                                                        <span>Press
                                                            Releases</span></a></li>
                                                <li class=""><a
                                                        href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'mht-in-the-news']) }}">
                                                        <span>MHT
                                                            In The News</span></a>
                                                </li>
                                                <li><a href="{{ getPageUrlByCode('MEDIA-GALLERY-VIDEO') }}"
                                                        title="{{ $title = getPageUrlByCode('MEDIA-GALLERY-VIDEO', 'title') }}"><span>{{ $title }}</span></a>
                                                </li>
                                            </ul>
                                        </li>

                                    @endif
                                    <li class="nav-item hasChild"><a class="nav-link"
                                            href="{{ getPageUrlByCode('CAREER') }}"
                                            title="{{ $title = getPageUrlByCode('CAREER', 'title') }}"><span>{{ $title }}</span></a>
                                            
                                       
                                    </li>
                                    <li class="nav-item hasChild"><a class="nav-link"
                                            href="{{ getPageUrlByCode('ABOUT') }}"
                                            title="{{ $title = getPageUrlByCode('ABOUT', 'title') }}"><span>{{ $title }}</span></a>
                                    </li>

                                </ul>
                                @if ($composer_locale == 'vi')
                                    <ul class="nav-menu" id="main-menu">
                                        <li class="nav-item hasChild"><a class="nav-link"
                                                href="{{ route('media.investments.category', ['parent_slug' => 'quan-he-co-dong', 'slug' => 'bao-cao-thuong-nien']) }}"
                                                title="{{ $title = getPageUrlByCode('INVESTER-CENTER', 'title') }}"><span>{{ $title }}</span></a><span
                                                class="expand"><i class="fa fa-angle-down"></i></span>
                                            <ul id="">
                                                <li><a href="{{ route('media.investments.category', ['parent_slug' => 'quan-he-co-dong', 'slug' => 'bao-cao-thuong-nien']) }}"
                                                        title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.annual_reports') }}</span></a>
                                                </li>
                                                <li><a href="{{ route('media.investments.category', ['parent_slug' => 'quan-he-co-dong', 'slug' => 'tai-lieu-cong-ty']) }}"
                                                        title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.corporate_documents') }}</span></a>
                                                </li>
                                                <li><a href="{{ route('media.investments.category', ['parent_slug' => 'quan-he-co-dong', 'slug' => 'thong-tin-tai-chinh']) }}"
                                                        title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.financial_information') }}</span></a>
                                                </li>
                                                <li><a href="{{ route('media.investments.category', ['parent_slug' => 'quan-he-co-dong', 'slug' => 'thong-bao-cong-ty']) }}"
                                                        title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.corporate_announcements') }}</span></a>
                                                </li>
                                        </li>

                                    @else
                                        <ul class="nav-menu" id="main-menu">
                                            <li class="nav-item hasChild"><a class="nav-link"
                                                    href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'annual-reports']) }}"
                                                    title="{{ $title = getPageUrlByCode('INVESTER-CENTER', 'title') }}"><span>{{ $title }}</span></a><span
                                                    class="expand"><i class="fa fa-angle-down"></i></span>
                                                <ul id="">
                                                    <li><a href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'annual-reports']) }}"
                                                            title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.annual_reports') }}</span></a>
                                                    </li>
                                                    <li><a href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'corporate-documents']) }}"
                                                            title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.corporate_documents') }}</span></a>
                                                    </li>
                                                    <li><a href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'financial-information']) }}"
                                                            title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.financial_information') }}</span></a>
                                                    </li>
                                                    <li><a href="{{ route('media.investments.category', ['parent_slug' => 'investor-center', 'slug' => 'corporate-announcements']) }}"
                                                            title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>{{ trans('frontend.corporate_announcements') }}</span></a>
                                                    </li>
                                            </li>
                                @endif
                                </ul>
                                <li class="nav-item hasChild"><a class="nav-link"
                                        href="{{ getPageUrlByCode('SUSTAINABILITY') }}"
                                        title="{{ $title = getPageUrlByCode('SUSTAINABILITY', 'title') }}"><span>{{ $title }}</span></a>
                                </li>
                                <li class="nav-item hasChild"><a class="nav-link"
                                        href="{{ getPageUrlByCode('SUBSIDAIRY') }}"
                                        title="{{ $title = getPageUrlByCode('SUBSIDAIRY', 'title') }}"><span>{{ $title }}</span></a><span
                                        class="expand"><i class="fa fa-angle-down"></i></span>
                                    <ul id="">
                                        <li><a href="{{ getPageUrlByCode('NUI-PHAO-MINING') }}"
                                                title="{{ $title = getPageUrlByCode('NUI-PHAO-MINING', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                        <li><a href="{{ getPageUrlByCode('MASAN-TUNGSTEN') }}"
                                                title="{{ $title = getPageUrlByCode('MASAN-TUNGSTEN', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                        <li><a href="{{ getPageUrlByCode('H-C-STARCK') }}"
                                                title="{{ $title = getPageUrlByCode('H-C-STARCK', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                        <li><a href="{{ getPageUrlByCode('CHEMILYTICS') }}"
                                                title="{{ $title = getPageUrlByCode('CHEMILYTICS', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item hasChild"><a class="nav-link" href="javascript:void(0);"
                                        title="{{ $title = getPageUrlByCode('PRODUCT', 'title') }}"><span>{{ $title }}</span></a><span
                                        class="expand"><i class="fa fa-angle-down"></i></span>
                                    <ul id="">
                                        <li><a href="{{ getPageUrlByCode('TUNGSTEN') }}"
                                                title="{{ $title = getPageUrlByCode('TUNGSTEN', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                        <li><a href="{{ getPageUrlByCode('COPPER') }}"
                                                title="{{ $title = getPageUrlByCode('COPPER', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                        <li><a href="{{ getPageUrlByCode('FLUORSPAR') }}"
                                                title="{{ $title = getPageUrlByCode('FLUORSPAR', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                        <li><a href="{{ getPageUrlByCode('BISMUTH') }}"
                                                title="{{ $title = getPageUrlByCode('BISMUTH', 'title') }}"><span>{{ $title }}</span></a>
                                        </li>
                                    </ul>
                                </li>


                                </ul>
                                <div class="searchMobile">
                                    <form action="{{ route('page.search') }}" method="get">
                                        {!! csrf_field() !!}
                                        <div class="searchMobileInner">
                                            <input class="form-control" type="text" name="q"
                                                value="{{ request()->get('q') }}"
                                                placeholder="{{ trans('frontend.search') }}...">
                                            <button class="btn-search-close"></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-12 text-right">
                        <div class="languageBox">
                            <div class="dropdown">
                                <button style="text-transform: uppercase" class="btn dropdown-toggle btn-language"
                                    id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                    @if ($composer_locale == 'en')
                                        English
                                    @else
                                        Tiếng Việt
                                    @endif
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    @foreach ($composer_locales as $localeCode => $properties)
                                        <a class="dropdown-item" title="{{ $properties['native'] }}"
                                            href="{{ \App\Helper\TranslateUrl::getLink($localeCode) }}">
                                            @if ($localeCode == 'en')
                                                <img src="images/flags/{{ $localeCode }}.png" alt="">
                                                English
                                            @else
                                                <img src="images/flags/{{ $localeCode }}.png" alt="">
                                                Tiếng Việt
                                            @endif
                                        </a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <div class="searchBox">
                            {{ trans('frontend.search') }}
                            <button class="btn-search navbar-search-btn"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <form action="{{ route('page.search') }}" method="get">
                        {!! csrf_field() !!}
                        <div class="innerSearch navbar-search">
                            <input class="form-control" type="text" name="q" value="{{ request()->get('q') }}"
                                placeholder="{{ trans('frontend.looking_for') }}?">
                            <button class="btn-search-close">
                                <i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</header>
<style>
    .dropdown-menu.show {
        top: 3px !important;
    }

    #vr-tour-hav {
        font-weight: bold;
        color: #00a8df !important;
    }

</style>
