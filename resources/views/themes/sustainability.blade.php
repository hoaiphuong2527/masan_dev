@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('sustainability', 'title');
@endphp
@section('content')
@include('themes.partials.base',['banner'=>'/assets/images/subsidiary-banner.png','text'=> $title ])
    <section class="mainContact" id="sustainability">
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
