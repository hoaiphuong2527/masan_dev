@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('site-map', 'title');
@endphp
@section('content')
    <section class="mainContact" id="site-map">
        <div class="container">
            
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}
                   
                </div>
            @endif
        </div>
    </section>
@endsection

@section('script')
@endsection
