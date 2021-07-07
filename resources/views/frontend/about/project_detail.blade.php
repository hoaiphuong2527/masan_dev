@extends('frontend.layouts.master')

@section('style')
@endsection
@section('meta-title')
    <title>{{$project->name}}</title>
@endsection
@section('content')
    <section class="mainPropertyDetail">
        <div class="container">
            <h1 class="titleHeading" >{{$project->name}}</h1>
            @if($project->project_file)
            <div class="mainPropertyDetail__wrap document" >
                {{--<embed src="{{ getLocalFileSpec($project->project_file) }}#view=fitH,100" type="application/pdf" width="100%" height="900px" />--}}
                <iframe frameborder="0" height="900px" src="https://docs.google.com/gview?url={{ getLocalFileSpec($project->project_file) }}&amp;embedded=true#view=FitH" width="100%"></iframe>
            </div>
            @endif
            @if($project->description)
            <div class="mainPropertyDetail__wrap document" data-waypoint="100%">
                {!! $project->description !!}
            </div>
            @endif
        </div>
    </section>
    <section class="projectFeatures" data-waypoint="100%">
        <div class="container">
            <div class="titleWrap text-center">
                <h4 class="titleHeadingDetail">{{trans('frontend.project_features')}}</h4>
            </div>
            <div class="row">
                @foreach($project->features_array() as $item)
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="projectFeatures__item">
                        <div class="projectFeatures__item__icon"><img src="{{$item['icon']}}" alt=""></div>
                        <h5 class="projectFeatures__item__title">{{$item[$composer_locale]['title']}}</h5>
                        <p class="projectFeatures__item__content">{{$item[$composer_locale]['description']}}</p>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>
    <section class="projectPictures" data-waypoint="100%">
        <div class="container">
            <div class="titleWrap text-center">
                <h4 class="titleHeadingDetail">{{trans('frontend.project_pictures')}}</h4>
            </div>
        </div>
        <div class="projectPictures__wrapper">
            <div class="projectPictures__inner">
                @foreach($project->pictures_array() as $item)
                <div class="projectPictures__item">
                    <div class="projectPictures__item__images" style="background-image:url('{{$item}}')"><img src="{{$item}}"></div>
                </div>
                @endforeach
            </div>
        </div>
    </section>
    <section class="projectLocation" data-waypoint="100%">
        <div class="container">
            <div class="row projectLocation__inner">
                <div class="col-md-8 col-12">
                    <div class="projectLocation__item">
                        <h4 class="titleIcon titleIcon--location"><span>{{trans('contact.address')}}</span></h4>
                        <p class="projectLocation__item__text">{{$project->address}}</p>
                    </div>
                </div>
                <div class="col-md-2 col-12 d-flex justify-content-center break767">
                    <div class="projectLocation__item">
                        <h4 class="titleIcon titleIcon--location"><span>{{trans('contact.contact_person')}}</span></h4>
                        {{--<p class="projectLocation__item__text"><strong>{{$project->contact_person}}:</strong> {{$project->phone}}</p>--}}
                        <p class="projectLocation__item__text">{{$project->phone}}</p>
                        <p class="projectLocation__item__text">{{System::content('contact_email')}}</p>
                    </div>
                </div>
                <div class="col-md-2 col-12 text-right d-flex align-items-center">
                    <div class="projectLocation__item">
                        <button class="btn btn-submit" type="submit" onclick="location.href='mailto:{{$project->email}}'"> <i class="icon fa fa-envelope"></i>{{trans('contact.email_us')}}</button>
                        {{--<a href="{{getPageUrlByCode('CONTACT')}}"><button class="btn btn-submit"> <i class="icon fa fa-envelope"></i>{{trans('contact.email_us')}}</button></a>--}}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="projectMap" data-waypoint="100%">
        <div id="mapLocation" style="height: 420px;"></div>
    </section>
@endsection

@section('script')
    <script src="//maps.google.com/maps/api/js?key={{ config('services.google.map_key') }}"></script>
    {{-- <script src="https://maps.googleapis.com/maps/api/js?key={{env('GOOGLE_MAP_KEY')}}&callback=initMap"async defer></script> --}}
    <script>
        function initialise() {
            var myLatlng = new google.maps.LatLng({{$project->lat}}, {{$project->lng}}); // Add the coordinates
            var mapOptions = {
                zoom: 15, // The initial zoom level when your map loads (0-20)
                minZoom: 6, // Minimum zoom level allowed (0-20)
                maxZoom: 17, // Maximum soom level allowed (0-20)
                zoomControl:true, // Set to true if using zoomControlOptions below, or false to remove all zoom controls.
                zoomControlOptions: {
                    style:google.maps.ZoomControlStyle.DEFAULT // Change to SMALL to force just the + and - buttons.
                },
                center: myLatlng, // Centre the Map to our coordinates variable
                mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
                scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
                // All of the below are set to true by default, so simply remove if set to true:
                panControl:false, // Set to false to disable
                mapTypeControl:false, // Disable Map/Satellite switch
                scaleControl:false, // Set to false to hide scale
                streetViewControl:false, // Set to disable to hide street view
                overviewMapControl:false, // Set to false to remove overview control
                rotateControl:false // Set to false to disable rotate control
            }
            var map = new google.maps.Map(document.getElementById('mapLocation'), mapOptions); // Render our map within the empty div
            var image = new google.maps.MarkerImage("/frontend/assets/images/icons/icon-pin.png", null, null, null, new google.maps.Size(69,112)); // Create a variable for our marker image.
            var marker = new google.maps.Marker({ // Set the marker
                position: myLatlng, // Position marker to coordinates
                icon:image, //use our image as the marker
                map: map, // assign the market to our map variable
                title: 'Click here for more details' // Marker ALT Text
            });
            google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(myLatlng); }); // Keeps the Pin Central when resizing the browser on responsive sites
        }
        google.maps.event.addDomListener(window, 'load', initialise); // Execute our 'initialise' function once the page has loaded.
    </script>
@endsection