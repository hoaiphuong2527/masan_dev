@extends('frontend.layouts.master')

@section('style')
@endsection

@section('content')
    
    <section class="mainContact">
        <div class="container">
            @if(!empty($blocks['INTRODUCE']) && $block = $blocks->get('INTRODUCE')->first())
            <h1 class="titleHeading" data-waypoint="100%">{{$block->name}}</h1>
            <div class="document" data-waypoint="100%">
                {!! $block->content !!}
                {!! $block->photo !!}
            </div>
            @endif
    

            @if(count($block->children))
            <div class="listFund" data-waypoint="100%">
                @foreach($block->children as $item)
                    <div class="listFund__item">
                        <div class="row">
                            <div class="col-md-2 col-sm-3 col-4 break480">
                                <a target="_blank" href="{{ $item->url }}">
                                    <img src="{{$item->icon}}" alt="{{$item->name}}">
                                </a>
                            </div>
                            <div class="col-md-10 col-sm-9 col-8 break480">
                                <h4>{{$item->name}}</h4>
                                {!! $item->content !!}
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
            @endif
        </div>
    </section>
@endsection

@section('script')
@endsection