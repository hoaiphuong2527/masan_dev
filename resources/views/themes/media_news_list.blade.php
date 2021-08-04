@extends('frontend.layouts.master')

@section('style')
@endsection
@section('meta-title')
    <title>{{ $news_category->name }}</title>
@endsection
@section('content')
    @include('themes.partials.base',['banner'=>$news_category->banner ?? 'frontend/images/media-banner.png','text'=>'Media
    Library'])
    <section class="ourNewsList">
        <div class="container">
            <div class="gridNews--2 mediaEffect" data-waypoint="100%">
                <ul class="navLink">
                    @foreach ($news_category_parent->child as $index => $child)
                        <li class="{{ $news_category->id == $child->id ? 'active' : '' }}"><a
                                href="{{ route('media.news.category', ['parent_slug' => $news_category_parent->slug, 'slug' => $child->slug]) }}">{{ $child->name }}</a>
                        </li>
                    @endforeach
                    <li class=""><a href="{{ getPageUrlByCode('MEDIA-GALLERY-PHOTO') }}">Media Library</a></li>
                </ul>

                <div class="row">
                    @if ($news_category->slug === 'press-release')
                        <div class="col-12 mb-5">
                            <div class="sub-title active" data-waypoint="100%">2021
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-5">
                            <div class="sub-title active" data-waypoint="100%">2020
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-5">
                            <div class="sub-title active" data-waypoint="100%">2019
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-6 break360">
                            <div class="itemNew border-0">
                                <div class="info">
                                    <div class="date"> <i class="fa fa-calendar"></i>28/07/2021
                                    </div>
                                    <a class="text-gray"
                                        href="http://127.0.0.1:8000/media-center/news/detail/masan-high-tech-materials-hnx-upcom-msr-organised-its-2021-annual-general-meeting-with-the-theme-go-global">
                                        <div class="name">
                                            <p class="card-text">
                                                Masan High-Tech Materials (HNX-UpCOM: MSR) organised its 2021 annual general
                                                meeting with the theme “Go Global”.

                                            </p>
                                            <p class="card-text">

                                                In his opening speech, Craig Richard Bradshaw, general director of Masan
                                                High-Tech Materials, shared: “In 2020, Masan High-Tech Materials
                                                completed...
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    @else
                        @if (count($news) > 0)
                            @foreach ($news as $index => $item)
                                @if ($index === 0)
                                    <div class="col-md-12 col-6 break360 mb-4">
                                        <div class="itemNew bd-tr-r-10">
                                            <div class="news-list-item row">
                                                <div class="col-md-8 col-sm-8 col-xs-6">
                                                    <div class="image effectImg first-post"><a
                                                            style="background-image:url('{{ getLocalFile($item->image) }}')"
                                                            href="{{ route('media.news.detail', ['slug' => $item->slug]) }}"><img
                                                                class="img-responsive"
                                                                src="{{ getLocalFile($item->image) }}"></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 col-sm-4 col-xs-6">
                                                    <div class="info">
                                                        <div class="date">{{ Date2String($item->publish_at, ' M d, Y') }}
                                                        </div>
                                                        <a class="title"
                                                            href="{{ route('media.news.detail', ['slug' => $item->slug]) }}">{{ summary($item->title, 140) }}</a>
                                                        <p class="short-desc">{{ $item->description }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @else
                                    <div class="col-md-4 col-6 break360">
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
                                @endif
                            @endforeach
                        @else
                            <p class="alert alert-none">{{ trans('invest.not_found') }}</p>
                        @endif
                    @endif



                </div>
            </div>
            <nav class="text-center news-navigation">
                {{ $news->links() }}
            </nav>
        </div>
    </section>
@endsection

@section('script')
@endsection
