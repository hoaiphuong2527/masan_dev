@extends('frontend.layouts.master')

@section('style')
    <style>
        .image.effectImg {
            border: 2px solid #f3f3f3;
        }

        .homeSlider a:hover {
            color: #ffffff;
        }

    </style>
@endsection

@section('content')
    <div class="homeSliderWrapper greenDots">
        <div class="homeSlider">
            @foreach ($blocks['BANNER-HOME'][0]->children as $banner)
                @if (!empty($banner))
                    <div class="homeSlider__image">
                        <div class="overplay">
                            @if ($banner->code == 'BANNER-DESKTOP')
                                <div class="image" style="background-image:url('{{ $banner->photo }}')">
                                    <div class="container">
                                        <h3 class="aun_h1">{!! $banner->content !!}</h3>
                                        <a href="{{ $banner->url }}">
                                            <span class="discovery-btn">{{ trans('home.CONTENT.banner_btn') }} <i
                                                    class="fa fa-play" aria-hidden="true"></i></span>
                                        </a>
                                    </div>
                                </div>
                            @elseif($banner->code == 'BANNER-MOBILE')
                            <div class="image" style="background-image:url('{{ $banner->photo }}')">
                                <div class="container">
                                    <h3 class="aun_h1">{!! $banner->content !!}</h3>
                                    <a href="{{ $banner->url }}">
                                        <span class="discovery-btn">{{ trans('home.CONTENT.banner_btn') }} <i
                                                class="fa fa-play" aria-hidden="true"></i></span>
                                    </a>
                                </div>
                            </div>
                            @endif
                        </div>
                    </div>
                @endif
            @endforeach

        </div>

    </div>
    <section class=" mainContent--home">
        <div class="container  pt-3 pt-lg-4">
            <div class="page-content">
                @if (!empty($blocks['OUR-STORY']) && ($ourStoryBlock = $blocks->get('OUR-STORY')->first()))
                    {!! $ourStoryBlock->content !!}
                @endif
            </div>

            <div class="milestone py-5">
                <div class="container">
                    <div class="row">
                        <div class="pl-0 col-lg-6">
                            <div class="row">
                                <div class="col-1">
                                </div>
                                <div class="col-11 pl-0">
                                    <h3 class="sub-title" data-waypoint="100%">{{ trans('home.CONTENT.history') }}</h3>
                                </div>
                            </div>
                        </div>
                        <div id="time-line">
                            <div class="col-lg-12 px-lg-4">
                                <div class="milestone">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div id="carousel-time-line" class="carousel slide" data-ride="carousel">
                                                    <ol class="carousel-indicators story-indicators">
                                                        <li data-target="#carousel-time-line" data-slide-to="0"
                                                            class="active">
                                                        </li>
                                                        @if (!empty($blocks['TIME-LINE']) && ($timeLineBlock = $blocks->get('TIME-LINE')->first()))
                                                            @if (!empty($timeLineBlock->children[6]))
                                                                <li data-target="#carousel-time-line" data-slide-to="1">
                                                                </li>
                                                            @endif
                                                            @if (!empty($timeLineBlock->children[12]))
                                                                <li data-target="#carousel-time-line" data-slide-to="2">
                                                                </li>
                                                            @endif
                                                        @endif
                                                    </ol>
                                                    <div class="carousel-inner" role="listbox">
                                                        <div class="carousel-item active">
                                                            <section class="timeline">
                                                                <ol>
                                                                    @if (!empty($blocks['TIME-LINE']) && ($timeLineBlock = $blocks->get('TIME-LINE')->first()))
                                                                        @foreach ($timeLineBlock->children as $index => $time)
                                                                            @if ($index < 6)
                                                                                <li class="timeline-line">
                                                                                    <time>{{ $time->name }}</time>
                                                                                    <div class="timeline-content">
                                                                                        {!! $time->content !!}
                                                                                    </div>
                                                                                </li>
                                                                            @else

                                                                            @endif
                                                                        @endforeach
                                                                    @endif
                                                                </ol>
                                                            </section>
                                                        </div>
                                                        @if (!empty($blocks['TIME-LINE']) && ($timeLineBlock = $blocks->get('TIME-LINE')->first()))
                                                            @if (!empty($timeLineBlock->children[6]))
                                                                <div class="carousel-item">
                                                                    <section class="timeline">
                                                                        <ol>
                                                                            @foreach ($timeLineBlock->children as $index => $time)
                                                                                @if ($index >= 6)
                                                                                    <li class="timeline-line">
                                                                                        <time>{{ $time->name }}</time>
                                                                                        <div class="timeline-content">
                                                                                            {!! strip_tags($time->content) !!}
                                                                                        </div>
                                                                                    </li>
                                                                                @else

                                                                                @endif

                                                                            @endforeach
                                                                        </ol>
                                                                    </section>
                                                                </div>
                                                            @endif
                                                        @endif
                                                        @if (!empty($blocks['TIME-LINE']) && ($timeLineBlock = $blocks->get('TIME-LINE')->first()))
                                                            @if (!empty($timeLineBlock->children[12]))
                                                                <div class="carousel-item">
                                                                    <section class="timeline">
                                                                        <ol>
                                                                            @foreach ($timeLineBlock->children as $index => $time)
                                                                                @if ($index >= 12)
                                                                                    <li class="timeline-line">
                                                                                        <time>{{ $time->name }}</time>
                                                                                        <div class="timeline-content">
                                                                                            {!! strip_tags($time->content) !!}
                                                                                        </div>
                                                                                    </li>
                                                                                @else

                                                                                @endif

                                                                            @endforeach
                                                                        </ol>
                                                                    </section>
                                                                </div>
                                                            @endif
                                                        @endif
                                                    </div>
                                                    <a class="carousel-control-prev" href="#carousel-time-line"
                                                        role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">{{ trans('home.previous') }}</span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#carousel-time-line"
                                                        role="button" data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">{{ trans('home.next') }}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="titleHeading" data-waypoint="100%">{{ trans('home.CONTENT.product') }}
            </div>
            <!-- <div class="titleHeadingDetail" data-waypoint="100%"> {{ trans('home.CONTENT.subTitle_product') }} -->
        </div>
        @if (!empty($blocks['HOME-PRODUCT']) && ($block = $blocks->get('HOME-PRODUCT')->first()))
            <div class="document" data-waypoint="100%">
                {!! $block->content !!}
            </div>
        @endif
        <div class="news pb-lg-5 pb-4">
            <div class="container-fluid p-0 image" style="background-image:url('/assets/images/bg-news.png')">
                <div class="container">
                    <div class="titleHeading pt-lg-5" data-waypoint="100%">{{ trans('home.CONTENT.news') }}</div>
                    <div class="listLease mediaEffect-2" data-waypoint="100%">
                        <div class="news-list-item row">
                            <div class="col-md-6 col-sm-7 col-md-6 bg-white p-4">
                                @foreach ($latest_news as $item)
                                    <div class="itemNew my-2">
                                        <b class="title">{{ Date2String($item->publish_at, ' M d, Y') }}
                                            @if ($loop->index == 0)
                                                <span class="new-label">{{ trans('home.CONTENT.new_news') }}</span>
                                            @endif
                                        </b>
                                        <a href="{{ route('media.news.detail', ['slug' => $item->slug]) }}"><span
                                                class="read-more">{{ summary($item->title, 120) }} <i
                                                    class="fa fa-play blue" aria-hidden="true"></i></span></a>
                                    </div>
                                @endforeach
                                <div class="row ">
                                    <div class="col-12 text-right ">
                                        <a class="text-deep-blue"
                                            href="{{ route('page.show', ['slug' => 'media-center/news-category/news/mht-in-the-news']) }}">
                                            <span class="mr-2 ">{{ trans('home.CONTENT.show_all_news') }} </span><i
                                                class="fa fa-play deep-blue" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="our-business pb-lg-5 pb-4">
            <div class="container">
                <div class="titleHeading" data-waypoint="100%">{{ trans('home.CONTENT.business') }}</div>
                <div id="our-businness-carousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators dots-indicators">
                        <li data-target="#our-businness-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#our-businness-carousel" data-slide-to="1"></li>
                        <li data-target="#our-businness-carousel" data-slide-to="2"></li>
                    </ol>
                    <ol class="carousel-indicators name-indicators">
                        <li data-slide-to="0" class="active">
                            <a href="{{ getPageUrlByCode('ABOUT') }}">
                                {{ $title = getPageUrlByCode('ABOUT', 'title') }}
                            </a>
                        </li>
                        <li data-slide-to="1">
                            <a href="{{ getPageUrlByCode('SUBSIDAIRY') }}">
                                {{ $title = getPageUrlByCode('SUBSIDAIRY', 'title') }}
                            </a>

                        </li>
                        <li data-slide-to="2">
                            <a href="{{ getPageUrlByCode('SUSTAINABILITY') }}">

                                {{ $title = getPageUrlByCode('SUSTAINABILITY', 'title') }}
                            </a>
                        </li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="/assets/images/our-business.png" width="100%" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/images/product.png" width="100%" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="/assets/images/sustainability.png" width="100%" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="media-center pb-lg-5 pb-4">
            <div class="container">
                <div class="titleHeading" data-waypoint="100%">{{ trans('home.CONTENT.media') }}</div>
                <div class="sliderCase">
                    @foreach ($media_gallery_photo as $item)
                        <div class="sliderCase__item">
                            <div class="image effectImg" style="background-image:url('{{ $item->thumbnail }}')"><img
                                    src="{{ $item->thumbnail }}" alt="">
                                <a style="background-image:url('{{ $item->thumbnail }}')" target="blank"
                                    href="{{ $item->url_video }}">
                                    <img src="{{ $item->thumbnail }}"><i class="ic-video"></i>
                                </a>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="row py-lg-5 mt-lg-5 ">
                    <h5 class="text-center col-12">
                        <a href="{{ getPageUrlByCode('MEDIA-GALLERY-VIDEO') }}"
                            class="btn button2 btn-xs ml-0 s">{{ trans('home.viewAllDown') }}
                        </a>
                    </h5>
                </div>

            </div>
        </div>
        </div>
        {{-- <div class="container-fluid p-0">
    <img src="/assets/images/global.png" alt="" style="width: 100%;">
  </div> --}}
    </section>
@endsection

@section('script')
@endsection
