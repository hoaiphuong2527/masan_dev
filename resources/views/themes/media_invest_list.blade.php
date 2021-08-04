@extends('frontend.layouts.master')

@section('style')
@endsection
@section('meta-title')
    <title>{{ $news_category->name }}</title>
@endsection
@section('content')
    @include('themes.partials.base',['banner'=>$news_category->banner ??
    'frontend/images/media-banner.png','text'=>$news_category->name])
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
                    @if (count($news) > 0)
                        @foreach ($news as $index => $item)
                            @if ($index === 0)
                                <div class="col-md-12 col-6 break360 mb-4">
                                    <div class="itemNew">
                                        <div class="image effectImg first-post"><a
                                                style="background-image:url('{{ getLocalFile($item->image) }}')"
                                                href="{{ route('media.investments.detail', ['slug' => $item->slug]) }}"><img
                                                    src="{{ getLocalFile($item->image) }}"></a></div>
                                        <div class="info">
                                            <a class="title"
                                                href="{{ route('media.investments.detail', ['slug' => $item->slug]) }}">{{ summary($item->title, 140) }}
                                            </a>
                                            <div class="name">
                                                <p class="card-text">
                                                    {{ $item->shortdesc }}
                                                </p>
                                            </div>
                                            <div class="row pt-3">
                                                <div class="col-12 text-right">
                                                    <a class="btn-link"
                                                        href="{{ route('media.investments.detail', ['slug' => $item->slug]) }}">
                                                        {{ trans('button.view_and_download') }}
                                                    </a>
                                                </div>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            @else
                                <div class="col-md-4 col-6 break360">
                                    <div class="itemNew">
                                        <div class="image effectImg"><a
                                                style="background-image:url('{{ getLocalFile($item->image) }}')"
                                                href="{{ route('media.investments.detail', ['slug' => $item->slug]) }}"><img
                                                    src="{{ getLocalFile($item->image) }}"></a></div>
                                        <div class="info">
                                            <a class="title"
                                                href="{{ route('media.investments.detail', ['slug' => $item->slug]) }}">{{ summary($item->title, 140) }}
                                            </a>
                                            <div class="name">
                                                <p class="card-text">
                                                    {{ $item->shortdesc }}
                                                </p>
                                            </div>
                                            <div class="row pt-3">
                                                <div class="col-12 text-right">
                                                    <a class="btn-link"
                                                        href="{{ route('media.investments.detail', ['slug' => $item->slug]) }}">
                                                        {{ trans('button.view_and_download') }}
                                                    </a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    @else
                        <p class="alert alert-none">{{ trans('invest.not_found') }}</p>
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
