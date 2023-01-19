// ==================================================
// * Project Name   :  Repairon - Multi Repair Services HTML Template
// * File           :  CSS Base
// * Version        :  1.0.0
// * Last change    :  14 January 2022
// * Author         :  
// * Developer      :  Rakibul Islam Dewan
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_section').addClass("sticky")
    } else {
      $('.header_section').removeClass("sticky")
    }
  });
  // sticky header - end
  // --------------------------------------------------

  // Preloader - Start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // Preloader - End
  // --------------------------------------------------

  // Tooltip - Start
  // --------------------------------------------------
  /*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });*/
  // Tooltip - End
  // --------------------------------------------------

  // OffCanvas - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.cart_close_btn, .cart_sidebar_overlay').on('click', function () {
      $('.cart_sidebar').removeClass('active');
      $('.cart_sidebar_overlay').removeClass('active');
    });

    $('.cart_btn').on('click', function () {
      $('.cart_sidebar').addClass('active');
      $('.cart_sidebar_overlay').addClass('active');
    });
  });
  // OffCanvas - End
  // --------------------------------------------------

  // Select Option - Start
  // --------------------------------------------------
  $('select').niceSelect();
  // Select Option - End
  // --------------------------------------------------

  // Background Parallax - Start
  // --------------------------------------------------
  $(".parallaxie").parallaxie({
    offset: 0,
    speed: 0.3,
  });
  // Background Parallax - End
  // --------------------------------------------------

  // Background Color - Start
  // --------------------------------------------------
  $("[data-text-color]").each(function () {
    $(this).css("color", $(this).attr("data-text-color"))
  });
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"))
  });
  // Background Color - End
  // --------------------------------------------------

  // Search - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.search_close').on('click', function () {
      $('.search_body').slideUp();
    });
    $('.search_btn').on('click', function () {
      $('.search_body').slideDown();
    });
  });
  // Search - End
  // --------------------------------------------------

  // About Offcanvas - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.about_close_btn, .about_sidebar_overlay').on('click', function () {
      $('.about_sidebar').removeClass('active');
      $('.about_sidebar_overlay').removeClass('active');
    });

    $('.offcanvas_btn').on('click', function () {
      $('.about_sidebar').addClass('active');
      $('.about_sidebar_overlay').addClass('active');
    });
  });
  // About Offcanvas - End
  // --------------------------------------------------

  // Animation - start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Animation - end
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.popup_video, .popup_video_2').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Price Range - start
  // --------------------------------------------------
  if($("#slider-range").length){
    $("#slider-range").slider({
		range: true,
		min: 0,
		max: 10000,
		values: [800.0, 4000.0],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		},
	});
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }

  $('.ar_top').on('click', function () {
    var getID = $(this).next().attr('id');
    var result = document.getElementById(getID);
    var qty = result.value;
    $('.proceed_to_checkout .update-cart').removeAttr('disabled');
    if( !isNaN( qty ) ) {
      result.value++;
    }else{
      return false;
    }
  });
  // Price Range - end
  // --------------------------------------------------

  // Common Carousels - Start
  // --------------------------------------------------
  $('.common_carousel_1col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    draggable:false,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc1c_left_arrow",
    nextArrow: ".cc1c_right_arrow"
  });

  $('.common_carousel_2col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc2c_left_arrow",
    nextArrow: ".cc2c_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

  $('.common_carousel_3col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc3c_left_arrow",
    nextArrow: ".cc3c_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });

  $('.common_carousel_4col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc4c_left_arrow",
    nextArrow: ".cc4c_right_arrow",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  // Common Carousels - End
  // --------------------------------------------------

  // Product Image Callery - start
  // --------------------------------------------------
  $('.details_image_carousel').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.details_image_carousel_nav'
  });
  $('.details_image_carousel_nav').slick({
    dots: false,
    arrows: false,
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    verticalSwiping: true,
    asNavFor: '.details_image_carousel',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 5,
      }
    }
    ]
  });
  // Product Image Callery - end
  // --------------------------------------------------

  // Testimonial Carousel - Start
  // --------------------------------------------------
  $('.testimonial_carousel').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".tc_left_arrow",
    nextArrow: ".tc_right_arrow"
  });
  // Testimonial Carousel - End
  // --------------------------------------------------

  // Counter Up - Start
  // --------------------------------------------------
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // Counter Up - End
  // --------------------------------------------------

  // Quantity Form - start
  // --------------------------------------------------
  (function() {
    window.inputNumber = function(el) {
      var min = el.attr("min") || false;
      var max = el.attr("max") || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function() {
        init($(this));
      });

      function init(el) {
        els.dec.on("click", decrement);
        els.inc.on("click", increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();
  inputNumber($(".input_number"));
  // Quantity Form - end
  // --------------------------------------------------

$(function () {
	$(".beforeAfter").beforeAfter({
		// is draggable/swipeable
		movable: true,

		// click image to move the slider
		clickMove: true,

		// always show the slider
		alwaysShow: true,

		// intial position of the slider
		position: 50,

		// opacity between 0 and 1
		opacity: 0.4,
		activeOpacity: 1,
		hoverOpacity: 0.8,

		// slider colors
		separatorColor: "#ffffff",
		bulletColor: "#ffffff",
		arrowColor: "#333333",
	});
  
});
  
  

})(jQuery);