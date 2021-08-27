@extends('frontend.layouts.master')

@section('style')
@endsection
@section('meta-title')
    <title>{{ $news_category->name }}</title>
@endsection
@section('content')
    @include('themes.partials.base',['banner'=>$news_category->banner ??
    'frontend/images/media-banner.png','text'=>$title = getPageUrlByCode('INVESTER-CENTER', 'title') ])
    <section class="invesmentNewsList">
        <div class="container">
            <div class="gridNews--2 mediaEffect" data-waypoint="100%">
                <ul class="navLink">
                    @foreach ($news_category_parent->child as $index => $child)
                        <li class="{{ $news_category->id == $child->id ? 'active' : '' }}"><a
                                href="{{ route('media.investments.category', ['parent_slug' => $news_category_parent->slug, 'slug' => $child->slug]) }}">{{ $child->name }}</a>
                        </li>
                    @endforeach
                </ul>
                <div class="row">
                    @if ($news_category->slug === 'annual-reports' || $news_category->slug === 'bao-cao-thuong-nien')
                        @if (count($annual_report) > 0 && !empty($top_news))
                            @if ((!empty($top_news) && empty($_GET['page'])) || $_GET['page'] == 1)
                                <div class="col-md-12 col-12 break360 mb-4"> 
                                    @if ($composer_locale == 'vi')
                                    <div class="itemNew"> 
                                        <div class="image effectImg first-post"><a 
                                                style="background-image:url('{{ getLocalFile($top_news->image) }}')" 
                                                href="{{ getLocalFile($top_news->vi_file) }}"><img 
                                                    src="{{ getLocalFile($top_news->image) }}"></a></div> 
                                        <div class="info"> 
                                            <a class="title" 
                                                href="{{ getLocalFile($top_news->vi_file) }}">{{ summary($top_news->title, 140) }} 
                                            </a> 
                                            <div class="name"> 
                                                <p class="card-text"> 
                                                    {{ $top_news->shortdesc }} 
                                                </p> 
                                            </div> 
                                            <div class="row pt-3"> 
                                                <div class="col-12 text-right"> 
                                                    <a class="btn-link" 
                                                        href="{{ getLocalFile($top_news->vi_file) }}"> 
                                                        {{ trans('button.view_and_download') }} 
                                                    </a> 
                                                </div> 
 
                                            </div> 
 
                                        </div> 
 
 
                                    </div> 
                                @else
                                <div class="itemNew"> 
                                    <div class="image effectImg first-post"><a 
                                            style="background-image:url('{{ getLocalFile($top_news->image) }}')" 
                                            href="{{ getLocalFile($top_news->banner) }}"><img 
                                                src="{{ getLocalFile($top_news->image) }}"></a></div> 
                                    <div class="info"> 
                                        <a class="title" 
                                            href="{{ getLocalFile($top_news->banner) }}">{{ summary($top_news->title, 140) }} 
                                        </a> 
                                        <div class="name"> 
                                            <p class="card-text"> 
                                                {{ $top_news->shortdesc }} 
                                            </p> 
                                        </div> 
                                        <div class="row pt-3"> 
                                            <div class="col-12 text-right"> 
                                                <a class="btn-link" 
                                                    href="{{ getLocalFile($top_news->banner) }}"> 
                                                    {{ trans('button.view_and_download') }} 
                                                </a> 
                                            </div> 

                                        </div> 

                                    </div> 
                                </div> 
                                @endif
                                    
                                </div> 
                            @endif
                            @foreach ($annual_report as $index => $item)
                                <div class="col-md-4 break360">
                                    <div class="itemNew">
                                        <div class="image effectImg"><a
                                                style="background-image:url('{{ getLocalFile($item->image) }}')"
                                                href="{{ getLocalFile($item->banner) }}"><img
                                                    src="{{ getLocalFile($item->image) }}"></a></div>
                                        <div class="info">
                                            <a class="title"
                                                href="{{ getLocalFile($item->banner) }}">{{ summary($item->title, 140) }}
                                            </a>
                                            <div class="name">
                                                <p class="card-text">
                                                    {{ $item->shortdesc }}
                                                </p>
                                            </div>
                                            <div class="row pt-3">
                                                <div class="col-12 text-right">
                                                    <a class="btn-link" href="{{ getLocalFile($item->banner) }}">
                                                        {{ trans('button.view_and_download') }}
                                                    </a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            @endforeach


                        @else
                            <p class="alert alert-none">{{ trans('invest.not_found') }}</p>
                        @endif
                    @else
                </div>
                @if (count($news) > 0)
                    @foreach ($news as $index => $item)
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
                @else
                    <p class="alert alert-none">{{ trans('invest.not_found') }}</p>
                @endif
                @endif
            </div>
            <nav class="text-center news-navigation">
                {{ $annual_report->links() }}
            </nav>
        </div>
    </section>
@endsection

@section('script')
@endsection
