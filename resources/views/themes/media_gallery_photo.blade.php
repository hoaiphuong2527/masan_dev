@extends('frontend.layouts.master')

@section('style')
@endsection

@section('content')
    @include('themes.partials.base',['banner'=>'frontend/images/media-banner.png','text'=>'Media Center'])
    <section class="ourNewsList">
        <div class="container">
            <div class="gridNews--2 gridNewsPhoto mediaEffect" data-waypoint="100%">
                <ul class="navLink" id="navTop" data-waypoint="100%">
                    <li><a
                            href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'press-release']) }}">Press
                            Release</a></li>
                    <li class=""><a
                            href="{{ route('media.news.category', ['parent_slug' => 'news', 'slug' => 'mht-in-the-news']) }}">MHT
                            in the news</a>
                    </li>
                    <li class="active"><a href="{{ getPageUrlByCode('MEDIA-GALLERY-PHOTO') }}">Media Library</a></li>
                </ul>
                <div class="row">
                    @foreach ($media_gallery_video as $item)
                        <div class="col-md-4 col-6 break360">
                            <div class="itemNew">
                                <div class="image effectImg">
                                    <a style="background-image:url('{{ $item->thumbnail }}')" target="blank"
                                        href="{{$item->url_video}}">
                                        <img src="{{ $item->thumbnail }}"><i class="ic-video"></i>
                                    </a>
                                </div>
                                <div class="info">
                                    <div class="date"> <i
                                            class="fa fa-calendar"></i>{{ Date2String($item->published_date, 'd-m-Y') }}
                                    </div>
                                    <a class="title" target="blank"
                                        href="{{$item->url_video}}">{{ summary($item->name, 110) }}</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="row">
                    @foreach ($media_gallery_photo as $item)
                        <div class="col-md-4 col-6 break360">
                            <div class="itemNew">
                                <div class="image effectImg">
                                    <a style="background-image:url('{{ $item->thumbnail }}')"
                                        href="{{ route('media.gallery.photo.detail', ['slug' => $item->slug]) }}">
                                        <img src="{{ $item->thumbnail }}">
                                    </a>
                                </div>
                                <div class="info">
                                    <div class="date"> <i
                                            class="fa fa-calendar"></i>{{ Date2String($item->published_date, 'd-m-Y') }}
                                    </div>
                                    <a class="title"
                                        href="{{ route('media.gallery.photo.detail', ['slug' => $item->slug]) }}">{{ summary($item->name, 110) }}</a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endsection

@section('script')
@endsection
