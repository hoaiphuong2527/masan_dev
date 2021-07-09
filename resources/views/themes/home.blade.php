@extends('frontend.layouts.master')

@section('style')
<style>
  .image.effectImg {
    border: 2px solid #f3f3f3;
  }



  .homeSlider a:hover {
    color: #ffffff;

  }
</style>
@endsection

@section('content')
<div class="homeSliderWrapper">
  @foreach ($blocks['BANNER-HOME'][0]->children as $banner)
  <div class="homeSlider">
    @if (!empty($banner))
    <a class="homeSlider__image" href="{{ $banner->url }}">
      <div class="overplay">
        @if ($banner->code == 'BANNER-DESKTOP')
        <div class="image" style="background-image:url('home-banner.jpg')">
          <div class="container">
            <h3 class="aun_h1">{{ trans("home.CONTENT.banner_text1") }}<br />
              {{ trans("home.CONTENT.banner_text2") }}</h3>
            <span class="discovery-btn">{{ trans("home.CONTENT.banner_btn") }} <i class="fa fa-play"
                aria-hidden="true"></i></span>
          </div>
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @elseif($banner->code == 'BANNER-MOBILE')
        <div class="imageFull" style="background-image:url('{{ $banner->photo_translation }}')">
          @if($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
      </div>
    </a>
    <a class="homeSlider__image" href="{{ $banner->url }}">
      <div class="overplay">
        @if ($banner->code == 'BANNER-DESKTOP')
        <div class="image" style="background-image:url('/assets/images/home-banner-2.png')">
          <div class="container">
            <h3 class="aun_h1">{{ trans("home.CONTENT.banner_text1") }}<br />
              {{ trans("home.CONTENT.banner_text2") }}</h3>
            <span class="discovery-btn">{{ trans("home.CONTENT.banner_btn") }} <i class="fa fa-play"
                aria-hidden="true"></i></span>
          </div>
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
        @if ($banner->code == 'BANNER-MOBILE')
        <div class="imageFull" style="background-image:url('{{ $banner->photo_translation }}')">
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
      </div>
    </a>
    <a class="homeSlider__image" href="{{ $banner->url }}">
      <div class="overplay">
        @if ($banner->code == 'BANNER-DESKTOP')
        <div class="image" style="background-image:url('/assets/images/home-banner-3.png')">
          <div class="container">
            <h3 class="aun_h1">{{ trans("home.CONTENT.banner_text1") }}<br />
              {{ trans("home.CONTENT.banner_text2") }}</h3>
            <span class="discovery-btn">{{ trans("home.CONTENT.banner_btn") }} <i class="fa fa-play"
                aria-hidden="true"></i></span>
          </div>
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
        @if ($banner->code == 'BANNER-MOBILE')
        <div class="imageFull" style="background-image:url('{{ $banner->photo_translation }}')">
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
      </div>
    </a>
    <a class="homeSlider__image" href="{{ $banner->url }}">
      <div class="overplay">
        @if ($banner->code == 'BANNER-DESKTOP')
        <div class="image" style="background-image:url('/assets/images/home-banner-4.png')">
          <div class="container">
            <h3 class="aun_h1">{{ trans("home.CONTENT.banner_text1") }}<br />
              {{ trans("home.CONTENT.banner_text2") }}</h3>
            <span class="discovery-btn">{{ trans("home.CONTENT.banner_btn") }} <i class="fa fa-play"
                aria-hidden="true"></i></span>
          </div>
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
        @if ($banner->code == 'BANNER-MOBILE')
        <div class="imageFull" style="background-image:url('{{ $banner->photo_translation }}')">
          @if ($composer_locale == 'en')
          <picture>
            <source type="image/webp" srcset="/upload/images/banner-mobile.webp">
            <source type="image/jxr" srcset="/upload/images/banner-mobile.jxr">
            <source type="/upload/images/banner-mobile.jp2">
            <img src="{{ $banner->photo_translation }}" alt="">
          </picture>
          @else
          <img src="{{ $banner->photo_translation }}" alt="">
          @endif
        </div>
        @endif
      </div>
    </a>
    @endif
  </div>

  @endforeach
</div>
<section class=" mainContent--home">
  <div class="container py-4">
    <?php $cur_url = $_SERVER['REQUEST_URI']; ?>
    @if ($bt = optional($blocks->get('ABOUT'))->first())
    @if ($composer_locale == 'vi')
    <div class="titleHeading" data-waypoint="100%">
      <div class="titleHeading" data-waypoint="100%">{{ $bt->name }}</div>
    </div>
    @else
    <div class="titleHeading" data-waypoint="100%">{{ $bt->name }}</div>
    @endif
    @endif
    <div class="page-content">
      <!-- {!! $page->content !!} -->
      <div class="titleHeading" data-waypoint="100%">{{ trans("home.CONTENT.ourStory") }}
      </div>
      <div class="block-item">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="row">
              <div class="col-lg-1">

              </div>
              <div class="col-lg-11 pl-0">
                <h3 class="sub-title" data-waypoint="100%">{{ trans("home.CONTENT.subTitle_story_1") }} </br>
                  {{ trans("home.CONTENT.subTitle_story_2") }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-1">
                <div class="slash"></div>
              </div>
              <div class="col-lg-11 pl-0">
                <div class="desc">
                  <p>{{ trans("home.CONTENT.desc_story_1") }}</p>
                  <p>
                    {{ trans("home.CONTENT.desc_story_2") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row py-4">
              <div class="col-lg-1">
              </div>
              <div class="col-lg-11 pl-0">
                <button type="button" name="" id="" class="btn btn-gray btn-md ">{{ trans("home.readmoreUP")
                  }}</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <img class="img-responsive story-img" src="/assets/images/story-img.png" alt="">
          </div>
        </div>

      </div>
    </div>
    <div class="milestone py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3 class="sub-title" data-waypoint="100%">Corporate History</h3>
            <div class="" style="background-image:url('/assets/images/milestone-bg.svg')">
              <div id="carouselId" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators story-indicators">
                  <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselId" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner " role="listbox">
                  <div class="carousel-item active">
                    <img src="/assets/images/milestone-first.png" width="100%" alt="First slide">
                  </div>
                  <div class="carousel-item">
                    <img src="/assets/images/milestone-second.png" width="100%" alt="Second slide">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">{{ trans("home.previous") }}</span>
                </a>
                <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">{{ trans("home.next") }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="titleHeading" data-waypoint="100%">{{ trans("home.CONTENT.product") }}
    </div>
    <!-- <div class="titleHeadingDetail" data-waypoint="100%"> {{ trans("home.CONTENT.subTitle_product") }} -->
  </div>
  <div class="container">
  <div class="listLease mediaEffect-2" data-waypoint="100%">
    <div class="product-list-item row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div class="image effectImg" style="background-image:url('/assets/images/tunsteng-product.png')"><a
            href="#"><img class="img-responsive" src=""></a></div>
      </div>
      <div class="col-md-6 col-sm-7 col-md-6">
        <div class="info">
          <h3><a class="title" href="#">{{ trans("home.CONTENT.tungsten") }}</a></h3>
          {{-- <ul>
            <li>Filament in light bulbs</li>
            <li>Material selection in emission gun design</li>
            <li>IC (IC)</li>
            <li>Smart window (window allows color change on Boeing plane) </li>
          </ul> --}}
          <p>
            {{ trans("home.CONTENT.des_tungsten") }}

          </p>
          <a href="{{ route('page.show', ['slug' => 'our-products/tungsten']) }}" class="btn btn-gray btn-xs ">{{
            trans("home.readmoreDOWN") }}</a>
        </div>
      </div>
    </div>
    <div class="product-list-item row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div class="info">
          <h3><a class="title" href="#">
              {{ trans("home.CONTENT.fluorspar") }}</a></h3>
          {{-- <ul>
            <li>Used in manufacturing ceramics and glazed metal</li>
            <li>Used in many industries such as glass production, silicon chips, chemicals, ...
            </li>
            <li>Perforce
            </li>
            <li>Anesthesia in medicine
            </li>
            <li>Fabrication of microscopic lenses, cameras, telescopes
            </li>
          </ul> --}}
          <p>

            {{ trans("home.CONTENT.des_fluorspar") }}

          </p>
          <a href="{{ route('page.show', ['slug' => 'our-products/flourspar']) }}" class="btn btn-gray btn-xs ">{{
            trans("home.readmoreDOWN") }}</a>
        </div>
      </div>
      <div class="col-md-6 col-sm-7 col-md-6">
        <div class="image effectImg" style="background-image:url('/assets/images/florite-product.png')"><a href="#"><img
              class="img-responsive" src=""></a></div>

      </div>
    </div>
    <div class="product-list-item row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div class="image effectImg" style="background-image:url('/assets/images/bismuth-product.png')"><a href="#"><img
              class="img-responsive" src=""></a></div>
      </div>  
      <div class="col-md-6 col-sm-7 col-md-6">
        <div class="info">
          <h3><a class="title" href="#">{{ trans("home.CONTENT.bismuth") }} </a></h3>

          {{-- <ul>
            <li> Fabrication of cars, aircraft, train
            </li>
            <li>Fabrication of sea pipes, industrial water spraying systems
            </li>
            <li>Manufacturing semiconductors in computers, phones, television
            </li>
          </ul> --}}

          <p>
            {{ trans("home.CONTENT.des_bismuth") }}
          </p>
          <a href="{{ route('page.show', ['slug' => 'our-products/bismuth']) }}" class="btn btn-gray btn-xs ">{{
            trans("home.readmoreDOWN") }}</a>
        </div>
      </div>
    </div>
    <div class="product-list-item row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div class="info">
          <h3><a class="title" href="#">{{ trans("home.CONTENT.copper") }}</a></h3>
          {{-- <ul>
            <li> Use as a medicine for gastritis, stomach cancer, burns
            </li>
            <li>Fabrication of cosmetics such as eyeshadow, hair spray, nail polish
            </li>
          </ul> --}}
          <p>
            {{ trans("home.CONTENT.des_copper") }}
          </p>
          <a href="{{ route('page.show', ['slug' => '/our-products/copper']) }}" class="btn btn-gray btn-xs ">{{
            trans("home.readmoreDOWN") }}</a>
        </div>
      </div>
      <div class="col-md-6 col-sm-7 col-md-6">
        <div class="image effectImg" style="background-image:url('/assets/images/copper-product.png')"><a href="#"><img
              class="img-responsive" src=""></a></div>
      </div>
    </div>
  </div>
  </div>
  <div class="news py-4">
    <div class="container-fluid p-0 image" style="background-image:url('/assets/images/bg-news.png')">
      <div class="container">
        <div class="titleHeading" data-waypoint="100%">{{ trans('home.CONTENT.news') }}</div>

        <div class="listLease mediaEffect-2" data-waypoint="100%">
          <div class="news-list-item row">
            <div class="col-md-6 col-sm-7 col-md-6 bg-white p-4">
              @foreach ($latest_news as $item)
              <div class="itemNew my-2">
                <b class="title">{{ summary($item->title, 140) }}</b>
                <p class="mb-1">{{ $item->description }}</p>
                <a href="{{ route('media.news.detail', ['slug' => $item->slug]) }}"><span class="read-more">{{
                    trans("home.readmoreDOWN") }} <i class="fa fa-play blue" aria-hidden="true"></i></span></a>
              </div>
              @endforeach
              <div class="row ">
                <div class="col-12 text-right ">
                  <a class="text-deep-blue" href="#">
                    <span class="mr-2 ">{{ trans('home.CONTENT.show_all_news') }} </span><i class="fa fa-play deep-blue"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="our-business py-4">
    <div class="container">
      <div class="titleHeading" data-waypoint="100%">{{ trans("home.CONTENT.business") }}</div>
      <div id="our-businness-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators dots-indicators">
          <li data-target="#our-businness-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#our-businness-carousel" data-slide-to="1"></li>
          <li data-target="#our-businness-carousel" data-slide-to="2"></li>
        </ol>
        <ol class="carousel-indicators name-indicators">
          <li data-target="#our-businness-carousel" data-slide-to="0" class="active">{{ trans("home.CONTENT.about") }}
          </li>
          <li data-target="#our-businness-carousel" data-slide-to="1">{{ trans("home.CONTENT.products") }}</li>
          <li data-target="#our-businness-carousel" data-slide-to="2">{{ trans("home.CONTENT.sustainability") }}</li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src="/assets/images/our-business.png" width="100%" alt="">
          </div>
          <div class="carousel-item">
            <img src="/assets/images/product.png" width="100%" alt="">
          </div>
          <div class="carousel-item">
            <img src="/assets/images/sustainability.png" width="100%" alt="">
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="media-center py-4">
    <div class="container">
      <div class="titleHeading" data-waypoint="100%">{{ trans("home.CONTENT.media") }}</div>
      <div class="sliderCase">
        @foreach ($media_gallery_photo as $item)
        <div class="sliderCase__item">
          <div class="image effectImg" style="background-image:url('{{ $item->thumbnail }}')"><img
              src="{{ $item->thumbnail }}" alt=""></div>
        </div>
        @endforeach
      </div>
      <div class="row py-5 mt-5 ">
        <h5 class="text-uppercase text-center col-12">
          <a href="#" class="btn btn-gray btn-xs ">{{ trans("home.viewAllDown") }}
          </a>
        </h5>
      </div>

    </div>
  </div>
  </div>
  {{-- <div class="container-fluid p-0">
    <img src="/assets/images/global.png" alt="" style="width: 100%;">
  </div> --}}
</section>
@endsection

@section('script')
@endsection