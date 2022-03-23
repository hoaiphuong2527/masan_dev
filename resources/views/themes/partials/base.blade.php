<?php $cur_url = $_SERVER['REQUEST_URI'];
if($cur_url == '/our-company')
{
	$alt = '';
}
else
{
	$alt = '';
}?>
<div class="bgBanner" style="background-image:url('{{(isset($blocks) && optional($blocks->get('BANNER'))->first() && $blocks->get('BANNER')->first()->url ? $blocks->get('BANNER')->first()->url : $banner) ?? 'images/business-model/bg-business-model.jpg'}}')">
@if (isset($text))
<div class="container">
	<h3 class="aun_h1 " style="   
	 position: absolute;
    bottom: 10%;
    font-size: 3rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    letter-spacing: 0.1px;
">{{$text}}</h3>
	</div>
	
@endif
	

	<img src="{{(isset($blocks) && optional($blocks->get('BANNER'))->first() && $blocks->get('BANNER')->first()->url ? $blocks->get('BANNER')->first()->url : $banner) ?? 'images/business-model/bg-business-model.jpg'}}" alt="<?php echo $alt;?>">
</div>
{{-- <section class="mainBeardcrumb" >
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 align-self-center">
                @include('frontend.layouts.partials.breadcrumb')
            </div>
        </div>
    </div>
</section> --}}