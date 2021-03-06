
<!DOCTYPE html>
<html lang="{{ $composer_locale }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <base href="{{asset('/')}}">

    @section("seo")
        @include('frontend.layouts.partials.seo')
    @show

    <link rel="apple-touch-icon" sizes="57x57" href="/frontend/assets/images/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/frontend/assets/images/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/frontend/assets/images/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/frontend/assets/images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/frontend/assets/images/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/frontend/assets/images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/frontend/assets/images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/frontend/assets/images/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/frontend/assets/images/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="144x144" href="/frontend/assets/images/icons/android-icon-144x144.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/frontend/assets/images/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/frontend/assets/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/frontend/assets/images/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/frontend/assets/images/icons/favicon-16x16.png">
    <link rel="shortcut icon" href="frontend/assets/images/icons/favicon.ico">
    <meta name="msapplication-TileColor" content="#f05b28">
    <meta name="msapplication-TileImage" content="/frontend/assets/images/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#f05b28">
    <link href="{{getAssetResourceVersion('frontend/assets/css/styles.css?v=1')}}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900" rel="stylesheet">
    @yield('style')

    {!! System::content('google_analytic', null) !!}
  <?php  if($composer_locale =='en')
  {?>
 <style>
	/* .nav-menu .nav-item {
    padding-right: 0.6rem;
} */
</style>
<?php } ?>
<?php 
$current = $_SERVER['REQUEST_URI'];
if($current  == '/')
	?>
    <!-- Google Tag Manager -->
  
 
</head>
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7TBVJT"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

@include('frontend.layouts.partials.header')

<main class="wrapper">
    @yield('content')
</main>

@include('frontend.layouts.partials.footer')

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"
integrity="sha512-UXumZrZNiOwnTcZSHLOfcTs0aos2MzBWHXOHOuB0J/R44QB0dwY5JgfbvljXcklVf65Gc4El6RjZ+lnwd2az2g=="
crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="{{getAssetResourceVersion('frontend/assets/js/library.js')}}"></script>
<script src="{{getAssetResourceVersion('frontend/assets/js/main.js')}}"></script>
<script src="{{getAssetResourceVersion('assets/js/hadesker.js')}}"></script>

{{--<script src="frontend/assets/plugins/jquery-confirm/jquery-confirm.min.js"></script>--}}
{{--@include('frontend.layouts.partials.alert_modal')--}}

@yield('script')

{!! System::content('chat_script', null) !!}

</body>
</html>