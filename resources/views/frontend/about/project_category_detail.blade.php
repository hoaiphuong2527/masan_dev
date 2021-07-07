@extends('frontend.layouts.master')

@section('style')
@endsection

@section('meta-title')
    <title>{{$project_category->name}}</title>
@endsection

@section('content')
    <section class="mainLogistic">
        <div class="container">
            <h1 class="titleHeading" >{{$project_category->name}}</h1>
            <div class="document" data-waypoint="100%">
                {!! $project_category->description !!}
            </div>
            
            <?php 
			//aun 20200325//
			if($_SERVER['REQUEST_URI'] == '/project-category/ready-built-factory-for-rent')
			{ ?>
             <div class="slideDetail slideDetailVideo">
                    <div class="slideDetailVideo__inner">
                        <div class="image imageEffect" style="background-image:url('/upload/images/video/vid-factory.png')"><img src="/upload/images/video/vid-factory.png" alt=""></div><a class="playVideo" href="javascript:void(0)" id="play01"><i></i></a>
                        <iframe class="videoInner" id="video01" width="100%" height="100%" src="https://www.youtube.com/embed/w7BRAQvm8n0?enablejsapi=1&amp;showinfo=0&amp;rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    </div>
                </div>
                <script>
                    var player01;
                    function onYouTubePlayerAPIReady() {
                        player01 = new YT.Player('video01', {
                            events: {
                                'onReady': onPlayerReady
                                //'onStateChange': onPlayerStateChange
                            }
                        });
                    }
                    function onPlayerReady(event) {

                        var playButton01 = document.getElementById("play01");
                        playButton01.addEventListener("click", function() {
                            player01.playVideo();
                            this.parentElement.className += " showvideo";
                        });

                    }
                    // Inject YouTube API script
                    var tag = document.createElement('script');
                    tag.src = "//www.youtube.com/player_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                </script>
                
                <div style="text-align: justify; margin-top:20px;">
BW provides high-quality ready-built factory for rent in Vietnam

</div>
<div>&nbsp;</div>

<div style="text-align:center;"><strong><a class="btnLink" href="https://www.bwidjsc.com/property-leasing/property-for-lease
"> Our property for lease 
</a></strong></div>
                
                <?php } ?>
              
       
         	<?php if($_SERVER['REQUEST_URI'] != '/project-category/ready-built-factory-for-rent')
			{ ?>
            <section class="logisticList" data-waypoint="100%">
                <div class="row">
                    @foreach($projects as $item)
                               <?php $alt_slug = $item->slug; 
			   if($alt_slug == 'factory-for-rent-bau-bang-ip-binh-duong')
{
	$alt = 'Factory for rent in Bau Bang IP Binh Duong';
} else  if($alt_slug == 'factory-for-rent-my-phuoc-3-ip-binh-duong')
{
	$alt = 'Factory for rent in My Phuoc 3IP Binh Duong';
} else  if($alt_slug == 'factory-for-rent-nhon-trach-2-ip-dong-nai')
{
	$alt = 'Factory for rent in Nhon Trach Dong Nai';
} else  if($alt_slug == 'vsip-bac-ninh-ip-bac-ninh')
{
	$alt = 'Factory for rent in VSIP Bac Ninh ';
} else  if($alt_slug == 'factory-for-rent-in-vsip-bac-ninh-2-ip-bac-ninh')
{
	$alt = 'Factory for rent in VSIP Bac Ninh 2';
}else  if($alt_slug == 'vsip-hai-duong-ip-hai-duong-4')
{
	$alt = 'Factory for rent in Hai Duong';
}else  if($alt_slug == 'factory-for-rent-vsip-hai-phong-ip-hai-phong-4')
{
	$alt = 'Factory for rent in VSIP Hai Phong';
}else {
	$alt ='';
}?>
                    <div class="col-lg-4 col-md-3 col-sm-6 col-12">
                        <div class="logisticList__item">
                            <div class="image effectImg"><a style="background-image:url('{{$item->thumbnail}}')" href="{{route('frontend.project_detail',['slug'=>$item->slug])}}"><img src="{{$item->thumbnail}}" alt="<?php echo $alt; ?>"></a></div>
                            <div class="info">
                                <div class="info__inner"><a href="{{route('frontend.project_detail',['slug'=>$item->slug])}}">
                                        {{$item->name}}<i class="ic_logistic_arrow"></i></a></div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <nav class="text-center">
                    {{ $projects->links() }}
                </nav>
            </section>
            <?php } ?>
             <!-- //aun 20200325//  -->
            <div>&nbsp;</div>
            <!-- //aun 20200325//  -->
        </div>
    </section>
@endsection

@section('script')
@endsection