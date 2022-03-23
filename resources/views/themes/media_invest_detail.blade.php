@extends('frontend.layouts.master')

@section('style')
@endsection
@section('meta-title')
    <title>{{$news->title}}</title>
@endsection
@section('content')
@include('themes.partials.base',['banner'=>$news_category->banner ?? 'frontend/images/media-banner.png','text'=>  $news->title  ])
<section class="ourNewsDetail">
        <div class="invest-detail container">
            <h1 class="titleHeading titleHeading--content" data-waypoint="100%">{{$news->title}}</h1>
            <div class="mediaEffect" data-waypoint="100%">
                <div class="row">
                    <div class="col-md-5">
                        <div class="date"> <i class="fa fa-calendar"></i>{{Date2String($news->publish_at,' M d, Y')}}</div>
                    </div>
                   
                </div>
                <div class="document">
                   {!! $news->content !!}
                </div>
            </div>
           
        </div>
    </section>
@endsection
@section('script')
@endsection