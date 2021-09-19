//Menu
$(function ($) {


    $toggleMenu = $('.header__toggle');
    $toggleHeader = $('.header');
    $toggleMenu.bind('click', function (e) {
        var el = $(this);
        el.toggleClass('active');
        $toggleHeader.toggleClass("sticky");
        $('.menuMain').slideToggle(200);
        e.preventDefault();
    });

    $expand = $('.expand');

    $expand.click(function () {
        el = $(this);
        elUl = $(this).next("ul");
        $childUl = el.parent('li').parent('ul').find('ul.menuChild');
        $childExpand = el.parent('li').parent('ul').find('.expand');
        $childUl.hide();
        if (el.hasClass('active')) {
            el.removeClass('active');
            elUl.stop().slideUp(200);
        } else {
            $childExpand.removeClass('active');
            $childUl.stop().slideUp(200);
            el.addClass('active');
            elUl.stop().slideDown(200);
        }
    });
});
function searchBox() {
    var sButton = $('.navbar-search-btn'),
        sForm = $('.navbar-search');

    sButton.bind('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (sForm.hasClass('active')) {
            sForm.removeClass('active');
            sButton.removeClass('active');
        } else {
            sForm.addClass('active');
            sButton.addClass('active');
        }
    });

    $(document).click(function () {
        if (sForm.hasClass('active')) {
            sForm.removeClass('active');
            sButton.removeClass('active');
        }
    });
    sForm.bind('click', function (e) {
        e.stopPropagation();
    });
}
function sliderHome() {
    var el = $('.homeSlider');
    if (el.length) {
        el.on('init', function (event, slick) {
            el.find('.slick-dots').wrap('<div class="homeSlider__dots"><div class="container"></div></div>')
        }).slick({
            infinite: true,
            arrows: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: 'linear',
            dots: true,
            prevArrow: '<a class="arrow arrow--prev" href="#"><i class="ic-left"></i></a>',
            nextArrow: '<a class="arrow arrow--next" href="#"><i class="ic-right"></i></a>', responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false
                    }
                }
            ]

        });
    }
}
function slidePartner() {
    var el = $('.slidePartner');
    var $slick = el.slick({
        infinite: true,
        slidesToShow: 5,
        //variableWidth: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // autoplaySpeed: 0,
        speed: 2000,
        // pauseOnHover:false,
        // pauseOnFocus:false,
        // swipeToSlide:false,
        cssEase: 'linear',
        prevArrow: '<a class="arrow--1 arrow--prev" href="javascript:void(0)"><i class="ic-left-1"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--next" href="javascript:void(0)"><i class="ic-right-1"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    // el.mouseover(function() {
    //     el.slick('slickPause')
    //     console.log(1);

    // });
    // el.mouseout(function() {
    //     el.slick('slickPlay')
    //     console.log(2);
    // });

}

function slideTeam() {
    var el = $('.teamSlide');
    el.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<a class="arrow--2 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--2 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        // slideIndex = $(this).index();
        // $( '.slideshow' ).slickGoTo( parseInt(slideIndex) );
        var slideno = $(this).data('slide');
        $('.teamSlide').slick('slickGoTo', slideno - 1);
    });

}

//slider in news page
function slideNews() {
    var el = $('.slideNews');
    el.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        //autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<a class="arrow--1 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}
//slide detail photo
function sildePhoto() {
    var bigEl = $('.bigImg'),
        navEl = $('.navImg');
    bigEl.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '0px',
        cssEase: 'linear',
        prevArrow: '<a class="arrow--1 arrow--2 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--1  arrow--2 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        asNavFor: navEl
    });
    navEl.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: bigEl,
        centerMode: true,
        prevArrow: '<a class="arrow--1 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}

function sildePhotoNews() {
    var bigEl = $('.bigImgContent'),
        navEl = $('.navImgContent');
    bigEl.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true, autoplay: true,
        autoplaySpeed: 4000,
        centerPadding: '0px',
        cssEase: 'linear',
        prevArrow: '<a class="arrow--1 arrow--2 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--2 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        asNavFor: navEl
    });
    navEl.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: bigEl,
        centerMode: true, autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        // prevArrow: '<a class="arrow--1 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        //nextArrow: '<a class="arrow--1 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        centerPadding: '0px',
        focusOnSelect: true
    });
}

function slideCase() {
    var el = $('.sliderCase');
    el.slick({
        slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 250, autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        centerPadding: '200px',
        centerMode: true,
        // variableWidth: true,
        cssEase: 'linear',
        prevArrow: '<a class="arrow--1 arrow--3 arrow--prev" href="javascript:void(0)"><i class="ic-left"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--3 arrow--next" href="javascript:void(0)"><i class="ic-right"></i></a>',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '60px',
                }
            }
        ]
    });
}

function slideMutiManager() {
    var el = $('.sliderMutiManager');
    el.slick({
        slidesToShow: 3,
        // slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 250, autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        centerPadding: '200px',
        centerMode: true,
        // variableWidth: true,
        cssEase: 'linear',
        prevArrow: '<a class="arrow--1 arrow--3 arrow--prev" href="javascript:void(0)"><i class="ic-left"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--3 arrow--next" href="javascript:void(0)"><i class="ic-right"></i></a>',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '60px',
                }
            }
        ]
    });
}

function hashTag() {
    var navbox = $('#navTop'),
        headerHeight = $('.header').height(),
        bannerHeight = $('.bgBanner').height(),
        offsetTop = headerHeight + bannerHeight - 50;
    // if we have a hash in the address bar
    if (window.location.hash) {
        console.log(offsetTop);
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);

    }
}
// function changeSelect(){
//     var elbtn=$('#btn-clear');
//         elbtn.hide();
//     $('select.selectpicker').on('change', function() {
//         console.log(this.value)
//         elbtn.show();
//         //alert( this.value );
//     });
// }
function clearBtn() {
    var elbtn = $('#btn-clear'),
        elSlt = $('.selectpicker');
    elSltV = $('.selectpicker').title;
    // console.log(this.title);
    elbtn.hide();
    $('select.selectpicker').on('change', function () {
        //console.log(this.value)
        elbtn.show();
        //alert( this.value );
    });
    elbtn.click(function (e) {
        e.preventDefault();
        $('select.selectpicker').val('').trigger('change');
        $(this).hide();
    });
}
clearBtn();
// Totop
$('.footer__totop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

/*  Go to top ------------------------------------------------------------------ */
function gotoTop() {
    var topTop = $('.footer__totop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topTop.stop().fadeIn(200);
        } else {
            topTop.stop().fadeOut(200);
        }
    });
    topTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}

function waypointEl() {
    var way = $('[data-waypoint]')
    way.each(function () {
        var _el = $(this),
            _ofset = _el.data('waypoint'),
            _up = _el.data('waypointup');
        _el.waypoint(function (direction) {
            if (direction == 'down') {
                _el.addClass('active');
            } else {
                if (_up) {
                    _el.removeClass('active');
                }
            }
        }, { offset: _ofset });
    });
}

function animateEffect() {
    var way = $('[data-animated-effect]');
    way.addClass('animated').waypoint({
        offset: '70%',
        triggerOnce: true,
        handler: function () {

            var el = $(this.element).length ? $(this.element) : $(this);

            el.each(function (i, elem) {
                var elem = $(elem),
                    type = $(this).data('animated-effect'),
                    delay = $(this).data('animated-delay');

                setTimeout(function () {
                    elem.addClass(type);
                }, delay);
            });

            if (typeof this.destroy !== 'undefined' && $.isFunction(this.destroy)) {
                this.destroy();
            }
        }
    });
}
function responheight() {
    var hheader = $('.header').outerHeight();
    var height = $(window).height();
    $('.menuMain').css({ top: hheader - 1 });
    $('.menuMain').css({ paddingBottom: hheader });
    $('.imageFull').css({ height: height - hheader + 15 });
}


function sliderPicture() {
    $('.projectPictures__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<a class="arrow arrow--prev" href="#"><i class="ic-left"></i></a>',
        nextArrow: '<a class="arrow arrow--next" href="#"><i class="ic-right"></i></a>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}
function newsPhoto() {
    $('.newsPhoto').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        prevArrow: '<a class="arrow--3 arrow--prev" href="#"><i class="ic-left"></i></a>',
        nextArrow: '<a class="arrow--3 arrow--next" href="#"><i class="ic-right"></i></a>'
    });
}

function slideCareer() {
    var el = $('#slideCareer');
    el.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplaySpeed: 3000,
        prevArrow: '<a class="arrow--1 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}


function slideManager() {
    var el = $('.sliderManager');
    el.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 250,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: false,
        // dots: true,
        // centerPadding: '20px',
        // centerMode: true,
        //    variableWidth: true,
        cssEase: 'linear',
        prevArrow: '<a class="arrow--1 arrow--prev" href="javascript:void(0)"><i class="ic-left-2"></i></a>',
        nextArrow: '<a class="arrow--1 arrow--next" href="javascript:void(0)"><i class="ic-right-2"></i></a>',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}


function removeText() {
    var el = $('.btnRemove'),
        elInput = $('.searchHeading__form input.form-control');
    el.click(function () {
        $(this).siblings('.form-control').val('');
        $(this).hide();
    });
    elInput.keypress(function () {
        el.show();
    })
}

//load more------
function loadMoreItem() {
    var loadMore = $('.loadMore');
    loadMore.each(function () {
        var el = $(this),
            numberShowItem = el.data('show'),
            numberLoadItem = el.data('load');
        elShow = el.parents('.loadMoreGroup').find(".showBox");
        elShow.slice(0, numberShowItem).show();

        el.on('click', function (e) {
            e.preventDefault();
            el.parents('.loadMoreGroup').find(".showBox:hidden").slice(0, numberLoadItem).slideDown();
            // console.log(elHide.length);
            if (el.parents('.loadMoreGroup').find(".showBox:hidden").length == 0) {
                el.fadeOut('slow');
            }

        });
    });
}

//show we chat
function wechat() {
    var el = $('.showwechat');
    el.click(function (e) {
        e.preventDefault();
        $('.box_weChat').toggleClass("active");


    })
    $(document).click(function () {
        if ($('.box_weChat').hasClass('active')) {
            $('.box_weChat').removeClass('active');
        }
    });
    el.bind('click', function (e) {
        e.stopPropagation();
    });
}
wechat()
loadMoreItem();
//call function
searchBox();
sliderPicture();
sliderHome();
slidePartner();
gotoTop();
waypointEl();
animateEffect();
removeText();
slideTeam();
slideNews();
newsPhoto();
sildePhoto();
sildePhotoNews();
slideCareer();
slideCase();
hashTag();
slideManager();
$().ready(function () {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true,
                number: true
            },
        }
    });
});
$(".header").sticky({ topSpacing: 0 });
responheight();
$(window).resize(function () {
    $(".header").sticky({ topSpacing: 0 });
    responheight();

});


$('.manager-nav li a').click(function (e) {
    e.preventDefault();
    $('.manager-nav li').removeClass('active');
    $(this).parent('li').addClass('active');
    let target = $(this).parent('li').attr('data-target');
    $('.sliderManager').removeClass('active')
    $(`#${target}`).addClass('active');

});

$(document).ready(function () {
    if ($(window).width() < 854) {
        
        $('#carousel-time-line').carousel({
            interval: false,
        })
    } else {
        $('.carousel').carousel({
            interval: 3000,
        })
    }
});
$(".hover-active").children().children().hover(function (e) {
    $(this).addClass('active');
    $(this).parent().parent().children().children().removeClass('active')
});

const root = document.querySelector(":root");
let heightContent = document.querySelector('.timeline-content').offsetHeight;

let lineHeight = document.querySelector('timeline-dot', '::after');

root.style.setProperty('--heightLine', heightContent * 2 - 100 + 'px');

(function () {

    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
        elH = document.querySelectorAll(".timeline li > div"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow-time-line"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow-time-line__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow-time-line__next"),
        firstItem = document.querySelector(".timeline li:first-child"),
        lastItem = document.querySelector(".timeline li:last-child"),
        xScrolling = 280,
        disabledClass = "disabled";

    //const ele_timeline = document.querySelector(".timeline");
    //let isDown = false;
    //let startX;
    //let scrollLeft;

    // START
    window.addEventListener("load", init);

    function init() {

        animateTl(xScrolling, arrows, timeline);
        setKeyboardFn(arrowPrev, arrowNext);
        setSwipeFn(timeline, arrowPrev, arrowNext);

    }

    function setSwipeFn(tl, prev, next) {
        const hammer = new Hammer(tl);
        hammer.on("swipeleft", () => next.click());
        hammer.on("swiperight", () => prev.click());
    }

    function isElementInViewport(el) {

        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
        if (flag) {

            el.classList.add(disabledClass);

        } else {

            if (el.classList.contains(disabledClass)) {
                el.classList.remove(disabledClass);
            }

            el.disabled = false;

        }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {

        let counter = 0;

        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", function () {

                if (!arrowPrev.disabled) {

                    arrowPrev.disabled = true;

                }

                if (!arrowNext.disabled) {

                    arrowNext.disabled = true;

                }

                const sign = (this.classList.contains("arrow__prev")) ? "" : "-";

                if (counter === 0) {

                    tl.style.transform = `translateX(-${scrolling}px)`;

                } else {

                    const tlStyle = getComputedStyle(tl);
                    // add more browser prefixes if needed here
                    const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
                    const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
                    tl.style.transform = `translateX(${values}px)`;

                }

                setTimeout(() => {
                    isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
                    isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
                }, 100);

                counter++;
            });
        }
    }

    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
        document.addEventListener("keydown", (e) => {

            if ((e.which === 37) || (e.which === 39)) {

                const timelineOfTop = timeline.offsetTop;
                const y = window.pageYOffset;

                if (timelineOfTop !== y) {

                    window.scrollTo(0, timelineOfTop);

                }

                if (e.which === 37) {

                    prev.click();

                } else if (e.which === 39) {

                    next.click();

                }
            }

        });
    }

})();
// $(document).ready(function(){

//   });
jQuery(document).ready(function ($) {

    //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
    if (getCookie('popupCookie') != 'submited') {
        if (getCookie('popupCookie') != 'closed') {
            $('.popup-overlay').css("display", "flex").hide().fadeIn();
        }
    }

    $('a.close').click(function () {
        $('.popup-overlay').fadeOut();
        //sets the coookie to one minute if the popup is closed (whole numbers = days)
        // setCookie('popupCookie', 'closed', .00069444444);
    });

    $('a.submit').click(function () {
        $('.popup-overlay').fadeOut();
        //sets the coookie to five minutes if the popup is submited (whole numbers = days)
        // setCookie('popupCookie', 'submited', .0034722222);
    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        // var d = new Date();
        // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        // var expires = "expires=" + d.toUTCString();
        // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
});