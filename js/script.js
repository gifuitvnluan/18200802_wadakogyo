$(document).ready(function () {

    // back top
    var topBtn = $('.backtop'); 
    topBtn.hide(); 
    $(function() {
        $(window).scroll(function() { 
            if ($(this).scrollTop() > 100) { 
                topBtn.fadeIn(); 
            } else {
                topBtn.fadeOut();
            }
        });
        topBtn.click(function() { 
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

    $('#sec_slide .btn_scroll a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 0
                }, 900);
                return false;
            } else {
                $('html,body').animate({
                    scrollTop: target.offset().top - 0
                }, 900);
            }
        }
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


    var $status = $('.pagingInfo');
    var $slickElement = $('.slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        if (!slick.$dots) {
            return;
        }

        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + (slick.$dots[0].children.length));
    });

    $slickElement.slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function (slider, i) {
            var numslide = i + 1;
            if(numslide<10){
                numslide = "0" + numslide;
            }
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dot">' + numslide + '</a>';
        },
    });


    AOS.init({
        disable: 'mobile',
        once: true,
    });

    $(".hamber_menu").click(function (){
        if ($(".add_header").length > 0) {
            $(".add_header").remove();
        }else{
            $(this).parents("header.hd_all_page").before("<div class='add_header' style='width: 100%; height: "+$(this).parents("header").outerHeight()+"px'></div>")
        }
        $(this).parent().toggleClass("active");
        $(this).parents("header").toggleClass("active");
        $(window).delay(1).queue(function(next){
            $(".hamber_menu").css("z-index",3);
            next();
        }); 
    })

    
    $("<div class='bg_add'></div>").appendTo("#rec01 .all_txt").delay(100).queue(function(next){
        $(".bg_add").css("width",$("#rec01 h2").width()+((($(window).width() + 20) - $(".gird-1200").width()) / 2));
        next();
    }); 
});