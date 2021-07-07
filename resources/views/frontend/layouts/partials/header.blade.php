<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-12"><a class="logo" href="{{route('page.home')}}"><img src="/assets/images/masan-logo.svg" alt=""></a></div>
            <div class="col-lg-9 col-12"><a class="header__toggle" href="#"><span></span><span></span><span></span><span></span></a>
                <div class="row">
                    <div class="col-lg-10 col-12">
                        <div class="wrapMenu">
                            <div class="menuMain">
                                <ul class="nav-menu" id="sub-menu">
                                <li class="nav-item"><a class="nav-link" href="{{getPageUrlByCode('CONTACT')}}" title="{{ $title = getPageUrlByCode('CONTACT', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                       </li>
                                <li class="nav-item hasChild"><a class="nav-link" href="{{getPageUrlByCode('MEDIA-CENTER')}}" title="{{$title = getPageUrlByCode('MEDIA-CENTER', 'title')}}"><span>{{$title}}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        <ul class="menuChild" id="navbar-70">
                                            {{-- <li class=" hasChild"><a href="{{getPageUrlByCode('MEDIA-GALLERY')}}" title="{{$title = getPageUrlByCode('MEDIA-GALLERY', 'title')}}"><span>{{$title}}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                                <ul id="navbar-732">
                                                    <li><a href="{{getPageUrlByCode('MEDIA-GALLERY-PHOTO')}}" title="{{$title = getPageUrlByCode('MEDIA-GALLERY-PHOTO','title')}}"><span>{{$title}}</span></a>
                                                    </li>
                                                    <li><a href="{{getPageUrlByCode('MEDIA-GALLERY-VIDEO')}}" title="{{$title = getPageUrlByCode('MEDIA-GALLERY-VIDEO','title')}}"><span>{{$title}}</span></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class=" hasChild"><a href="{{getPageUrlByCode('MEDIA-INDEX')}}" title="{{$title = getPageUrlByCode('MEDIA-INDEX','title')}}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                                <ul id="navbar-1186">
                                                    @foreach($composer_news_categories_root as $item)
                                                    <li><a href="{{ route('media.news.category',['parent_slug'=>$item->slug]) }}" title="{{ $item->name }}"><span>{{ $item->name }}</span></a>
                                                    </li>
                                                    @endforeach
                                                </ul>
                                            </li> --}}
                                            <li><a href="{{getPageUrlByCode('MEDIA-CENTER')}}" title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>Press Releases</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('MEDIA-CENTER')}}" title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>MHT in the news</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('MEDIA-CENTER')}}" title="{{ $title = getPageUrlByCode('MEDIA-CENTER', 'title') }}"><span>Media Library</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item "><a class="nav-link" href="{{getPageUrlByCode('CAREER')}}" title="{{ $title = getPageUrlByCode('CAREER', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        {{-- <ul id="">
                                            <li><a href="{{getPageUrlByCode('CAREER-OPPORTUNITY')}}" title="{{ $title = getPageUrlByCode('CAREER-OPPORTUNITY', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('INTERNSHIP')}}" title="{{ $title = getPageUrlByCode('INTERNSHIP', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('WORK-LIFE-MHT')}}" title="{{ $title = getPageUrlByCode('WORK-LIFE-MHT', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                        </ul> --}}
                                    </li>
                                    <li class="nav-item hasChild"><a class="nav-link" href="{{getPageUrlByCode('ABOUT')}}" title="{{ $title = getPageUrlByCode('ABOUT', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        <ul id="">
                                            <li class=""><a href="{{getPageUrlByCode('OVERVIEW')}}" title="{{ $title = getPageUrlByCode('OVERVIEW', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('STRATEGY')}}" title="{{ $title = getPageUrlByCode('STRATEGY', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('MANAGEMENT-TEAM')}}" title="{{ $title = getPageUrlByCode('MANAGEMENT-TEAM', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('PARTNER')}}" title="{{$title = getPageUrlByCode('PARTNER', 'title')}}"><span>{{$title}}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('SHAREHOLDERS')}}" title="{{ $title = getPageUrlByCode('SHAREHOLDERS', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('AWARDS')}}" title="{{ $title = getPageUrlByCode('AWARDS', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                
                                </ul>
                                <ul class="nav-menu" id="main-menu">
                                <li class="nav-item hasChild"><a class="nav-link" href="{{getPageUrlByCode('INVESTER-CENTER')}}" title="{{ $title = getPageUrlByCode('INVESTER-CENTER', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        <ul id="">
                                            <li><a href="{{getPageUrlByCode('ANNUAL-REPORTS')}}" title="{{ $title = getPageUrlByCode('ANNUAL-REPORTS', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('CORPORATE-DOCUMENTS')}}" title="{{ $title = getPageUrlByCode('CORPORATE-DOCUMENTS', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('FINANCIAL-INFOMATION')}}" title="{{ $title = getPageUrlByCode('FINANCIAL-INFOMATION', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('CORPORATE-ANNOUNCEMENTS')}}" title="{{ $title = getPageUrlByCode('CORPORATE-ANNOUNCEMENTS', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item hasChild"><a class="nav-link" href="{{getPageUrlByCode('SUSTAINABILITY')}}" title="{{ $title = getPageUrlByCode('SUSTAINABILITY', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        <ul id="">
                                            <li><a href="{{getPageUrlByCode('CSR')}}" title="{{ $title = getPageUrlByCode('CSR', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('ECONOMIC-RESTORERATION')}}" title="{{ $title = getPageUrlByCode('ECONOMIC-RESTORERATION', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('COMMUNITY-DEVELOPMENT')}}" title="{{ $title = getPageUrlByCode('COMMUNITY-DEVELOPMENT', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('SUSTAINABILITY-THROUGH-INOVATION')}}" title="{{ $title = getPageUrlByCode('SUSTAINABILITY-THROUGH-INOVATION', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item hasChild"><a class="nav-link" href="{{getPageUrlByCode('SUBSIDAIRY')}}" title="{{ $title = getPageUrlByCode('SUBSIDAIRY', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        <ul id="">
                                            <li><a href="{{getPageUrlByCode('NUI-PHAO-MINING')}}" title="{{ $title = getPageUrlByCode('NUI-PHAO-MINING', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('MASAN-TUNGSTEN')}}" title="{{ $title = getPageUrlByCode('MASAN-TUNGSTEN', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('H-C-STARCK')}}" title="{{ $title = getPageUrlByCode('H-C-STARCK', 'title') }}"><span>{{ $title }}</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item hasChild"><a class="nav-link" href="{{getPageUrlByCode('PRODUCT')}}" title="{{ $title = getPageUrlByCode('PRODUCT', 'title') }}"><span>{{ $title }}</span></a><span class="expand"><i class="fa fa-angle-down"></i></span>
                                        <ul id="">
                                            <li><a href="{{getPageUrlByCode('TUNGSTEN')}}" title="{{$title = getPageUrlByCode('TUNGSTEN', 'title')}}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('COPPER')}}" title="{{$title = getPageUrlByCode('COPPER', 'title')}}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('FLUORSPAR')}}" title="{{$title = getPageUrlByCode('FLUORSPAR', 'title')}}"><span>{{ $title }}</span></a>
                                            </li>
                                            <li><a href="{{getPageUrlByCode('BISMUTH')}}" title="{{$title = getPageUrlByCode('BISMUTH', 'title')}}"><span>{{ $title }}</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                 
                                  
                                </ul>
                                <div class="searchMobile">
                                    <form action="{{route('page.search')}}" method="get">
                                        {!! csrf_field() !!}
                                        <div class="searchMobileInner">
                                            <input class="form-control" type="text" name="q" value="{{request()->get('q')}}" placeholder="{{trans('frontend.search')}}...">
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
                                <button style="text-transform: uppercase" class="btn dropdown-toggle btn-language" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-globe" aria-hidden="true"></i>
                               @if($composer_locale == 'en')
                                Global | English
                                @else
                                Tiếng Việt
                                @endif
                            </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    @foreach($composer_locales as $localeCode => $properties)
                                    <a class="dropdown-item" title="{{$properties['native']}}" href="{{ \App\Helper\TranslateUrl::getLink($localeCode)  }}">
                                    @if($localeCode == 'en')
                                    <img src="images/flags/{{ $localeCode }}.png" alt="">
                                        Global | English
                                        @else
                                        Tiếng Việt
                                        @endif
                                    </a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <div class="searchBox">
                        Search
                            <button class="btn-search navbar-search-btn"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                    <form action="{{route('page.search')}}" method="get">
                        {!! csrf_field() !!}
                        <div class="innerSearch navbar-search">
                            <input class="form-control" type="text" name="q" value="{{request()->get('q')}}" placeholder="{{trans('frontend.looking_for')}}?">
                            
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