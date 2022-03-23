@extends('frontend.layouts.master')

@section('style')
@endsection

@section('content')
    @include('themes.partials.base',['banner'=>'frontend/images/media-banner.png','text'=>$title = getPageUrlByCode('MEDIA-CENTER', 'title') ])
    <section class="ourNewsList">
        <div class="container">
            <div class="gridNews--2 gridNewsPhoto mediaEffect" data-waypoint="100%">
                <ul class="navLink" id="navTop" data-waypoint="100%">

                    @if ($composer_locale == 'vi')
                        <li><a
                                href="{{ route('media.news.category', ['parent_slug' => 'tin-tuc', 'slug' => 'thong-cao-bao-chi']) }}">Thông
                                cáo báo chí</a></li>
                        <li class=""><a
                                href="{{ route('media.news.category', ['parent_slug' => 'tin-tuc', 'slug' => 'ban-tin-mht']) }}">Bản
                                tin MHT</a>
                        </li>
                    @else
                        <li><a
                                href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'press-release']) }}">Press
                                Releases</a></li>
                        <li class=""><a
                                href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'mht-in-the-news']) }}">MHT
                                in The News</a>
                        </li>
                    @endif

                    <li class="active"><a href="{{ getPageUrlByCode('MEDIA-GALLERY-VIDEO') }}">{{ $title = getPageUrlByCode('MEDIA-GALLERY-VIDEO', 'title') }}</a></li>
                </ul>
                <div class="row">
                    @foreach ($media_gallery_video as $item)
                        <div class="col-md-4 col-12 break360">
                            <div class="itemNew">
                                <div class="image effectImg">
                                    <a style="background-image:url('{{ $item->thumbnail }}')" target="blank"
                                        href="{{ $item->url_video }}">
                                        <img src="{{ $item->thumbnail }}"><i class="ic-video"></i>
                                    </a>
                                </div>
                                <div class="info">
                                    <div class="date"> <i
                                            class="fa fa-calendar"></i>{{ Date2String($item->published_date, 'd-m-Y') }}
                                    </div>
                                    <a class="title" target="blank"
                                        href="{{ $item->url_video }}">{{ summary($item->name, 110) }}</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <nav class="text-center">
                {{ $media_gallery_video->links() }}
            </nav>
        </div>
    </section>
@endsection

@section('script')
@endsection
