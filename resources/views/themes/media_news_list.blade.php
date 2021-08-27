@extends('frontend.layouts.master')

@section('style')
@endsection
@section('meta-title')
    <title>{{ $news_category->name }}</title>
@endsection
@section('content')
    @include('themes.partials.base',['banner'=>$news_category->banner ?? 'frontend/images/media-banner.png','text'=>$title = getPageUrlByCode('MEDIA-CENTER', 'title') ])
    <section class="ourNewsList">
        <div class="container">
            <div class="gridNews--2 mediaEffect" data-waypoint="100%">
                <ul class="navLink">
                    @foreach ($news_category_parent->child as $index => $child)
                        <li class="{{ $news_category->id == $child->id ? 'active' : '' }}">
                            <a href="{{ route('media.news.category', ['parent_slug' => $news_category_parent->slug, 'slug' => $child->slug]) }}">{{ $child->name }}</a>
                        </li>
                    @endforeach
                    <li class="">
                        <a href="{{ getPageUrlByCode('MEDIA-GALLERY-VIDEO') }}">
                            @if ($composer_locale == 'vi')
                                Tư Liệu Truyền Thông
                            @else
                                Media Library
                            @endif
                        </a>
                    </li>
                </ul>

                @if ($news_category->slug === 'press-release' || $news_category->slug === 'thong-cao-bao-chi')
                    @if (count($news_press_release) > 0)
                        @foreach ($news_press_release as $index => $item)
                            <div class="row">
                                <div class="col-12 mb-lg-3">
                                    <div class="sub-title active" data-waypoint="100%">{{ $index }}
                                    </div>
                                </div>
                            </div>
                            <div class="relativeBox mt-0 pt-0" data-waypoint="100%">
                                <div class="gridNews--2 slideNews">
                                    @foreach ($item as $news)
                                    <div class="itemNew border-0">
                                        <div class="info">
                                            <div class="date"> <i
                                                    class="fa fa-calendar"></i>{{ Date2String($news['publish_at'], 'd/m/Y') }}
                                            </div>
                                            @if ($composer_locale == 'vi')
                                                <a class="text-gray" href="{{ $news['vi_file'] }}">
                                                    <div class="name">
                                                        <strong class="card-text">
                                                            {{ $news['translations'][1]['title'] ? $news['translations'][1]['title'] : $news['translations'][0]['title'] }}
                                                        </strong>
                                                    </div>
                                                </a>
                                                <p class="card-text">
                                                    {{ $news['translations'][1]['description'] ? $news['translations'][1]['description'] : $news['translations'][0]['description'] }}
                                                </p>
                                            @else
                                                <a class="text-gray" href="{{ $news['image'] }}">
                                                    <div class="name">
                                                        <strong class="card-text">

                                                            {{ $news['translations'][0]['title'] }}
                                                        </strong>
                                                    </div>
                                                </a>
                                                <p class="card-text">

                                                    {{ $news['translations'][0]['description'] }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>
                                @endforeach
                                </div>
                            </div>
                        @endforeach
                    @endif
                @else
                    <div class="row">
                        @if (count($news) > 0 && !empty($top_news))
                            @if ((!empty($top_news) && empty($_GET['page'])) || $_GET['page'] == 1)
                                <div class="col-md-12 break360 mb-4">
                                    <div class="itemNew bd-tr-r-10">
                                        <div class="news-list-item row">
                                            <div class="col-md-8 col-sm-8 col-xs-6">
                                                <div class="image effectImg first-post"><a
                                                        style="background-image:url('{{ getLocalFile($top_news->image) }}')"
                                                        href="{{ route('media.news.detail', ['slug' => $top_news->slug]) }}"><img
                                                            class="img-responsive"
                                                            src="{{ getLocalFile($top_news->image) }}"></a>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4 col-xs-6">
                                                <div class="info">
                                                    <div class="date">
                                                        {{ Date2String($top_news->publish_at, ' M d, Y') }}
                                                    </div>
                                                    <a class="title"
                                                        href="{{ route('media.news.detail', ['slug' => $top_news->slug]) }}">{{ summary($top_news->title, 140) }}</a>
                                                    <p class="short-desc">{{ $top_news->description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                            @foreach ($news as $index => $item)
                                <div class="col-md-4 col-12 break360">
                                    <div class="itemNew">
                                        <div class="info">
                                            <div class="date"> <i
                                                    class="fa fa-calendar"></i>{{ Date2String($item->publish_at, 'M d, Y') }}
                                            </div>
                                            <a class="title"
                                                href="{{ route('media.news.detail', ['slug' => $item->slug]) }}">{{ summary($item->title, 140) }}</a>
                                            <div class="name">
                                                <p class="card-text">
                                                    {{ $item->description }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @else
                            <p class="alert alert-none">{{ trans('invest.not_found') }}</p>
                        @endif
                @endif
            </div>
        </div>
        @if ($news_category->slug === 'press-release' || $news_category->slug === 'thong-cao-bao-chi')
        @else
            <nav class="text-center news-navigation">
                {{ $news->links() }}
            </nav>
        @endif
        </div>
    </section>
@endsection

@section('script')
@endsection
