<?php $cur_url = $_SERVER['REQUEST_URI'];
if($cur_url == '/our-company')
{
	$alt = 'About BW Industrial';
}else if($cur_url == '/business-model')
{
	$alt = 'Our business in factory for rent industry';
}
else if($cur_url == '/property-type')
{
	$alt = 'Our property type';
}
else if($cur_url == '/project-category/ready-built-factory-for-rent')
{
	$alt = 'Ready-built factory for rent in Vietnam';
}
else if($cur_url == '/project-category/warehouse-vietnam-services')
{
	$alt = 'Logistics warehouses service in Vietnam';
}
else if($cur_url == '/project-category/built-to-suit-factory-for-rent')
{
	$alt = 'Built to suit factory for rent in Vietnam';
}
else if($cur_url == '/project-category/sale-and-leaseback')
{
	$alt = 'Sale and lease back in Vietnam';
}
else if($cur_url == '/value-added-viet-nam-factory-services')
{
	$alt = 'Value added Vietnam factory service';
}
else if($cur_url == '/property-leasing/property-for-lease')
{
	$alt = 'Factory for rent in Vietnam';
}
else if($cur_url == '/service/invest-in-vietnam-guide')
{
	$alt = 'Guideline to invest in Vietnam';
}
else
{
	$alt = '';
}?>
<div class="bgBanner" style="background-image:url('{{(isset($blocks) && optional($blocks->get('BANNER'))->first() && $blocks->get('BANNER')->first()->url ? $blocks->get('BANNER')->first()->url : $banner) ?? 'images/business-model/bg-business-model.jpg'}}')">
    <img src="{{(isset($blocks) && optional($blocks->get('BANNER'))->first() && $blocks->get('BANNER')->first()->url ? $blocks->get('BANNER')->first()->url : $banner) ?? 'images/business-model/bg-business-model.jpg'}}" alt="<?php echo $alt;?>">
</div>
<section class="mainBeardcrumb" >
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 align-self-center">
                @include('frontend.layouts.partials.breadcrumb')
            </div>
        </div>
    </div>
</section>