$(document).ready(function () {

    $('.icon-mn-sp').click(function () {
        $('ul.menu').slideToggle('blind');
    });
    // back top
    $(function () {
        var topBtn = $('#page_top');
        topBtn.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
        topBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });


    // tel sp
    var ua = navigator.userAgent.toLowerCase();
    var isMobile = /iphone/.test(ua) || /android(.+)?mobile/.test(ua);

    if (!isMobile) {
        $('a[href^="tel:"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    //viewport

    // var sw = screen.width;
    // var sh = screen.height;
    // if (window.matchMedia("(orientation: landscape)").matches) {
    //     var fw = sh;
    // } else {
    //     var fw = sw;
    // }
    // if (fw < 768) {
    //     var mvp = document.getElementById("testViewport");
    //     mvp.setAttribute("content", "width=device-width,initial-scale=1");
    // }

    var $slider = $('.slider');

    if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');
    
    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide)
        // $(sliderCounter).text(currentSlide + '/' +slidesCount)
    };

    $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
    }

    AOS.init({
        disable: 'mobile',
        once: true,
    });
});