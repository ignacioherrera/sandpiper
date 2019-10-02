// Custom Scripts for Array Template //

jQuery(function ($) {
  "use strict";

  // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
  var mainbottom = $('#main').offset().top;

  // Collapse navbar on click

  $(document).on('click.nav', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
      $(this).removeClass('in').addClass('collapse');
    }
  });

  /* ------ jQuery for Easing min -- */
  (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

  })(jQuery); // End of use strict


  /*----- Preloader ----- */

  $(window).on('load', function () {
    setTimeout(function () {
      $('#loading').fadeOut('slow', function () {
      });
    }, 3000);
  });


  /*----- Subscription Form ----- */

  $(document).ready(function () {
    var clientHeight = $(window).height();
    var width = $(window).width();
    //Header al 100% de la pantalla del cliente
    console.log(clientHeight, width);
    if (width >= 768 && width>= clientHeight) {
      $('.fullHeightHeader').height(clientHeight);
      $('.fullHeightNoMenu').height(clientHeight-130);
    }
    else{
      $('.fullHeightHeader').css("height", "");
      $('.fullHeightNoMenu').css("height", "");
    }
    
    $(window).resize(function () {
      clientHeight = $(window).height();
      width = $(window).width();
      //Header al 100% de la pantalla del cliente
      if (width > 768 && width>= clientHeight) {
        $('.fullHeightHeader').height(clientHeight);
        $('.fullHeightNoMenu').height(clientHeight-130);
      }
      else{
        $('.fullHeightHeader').css("height", "");
        $('.fullHeightNoMenu').css("height", "");
      }
    });


    //gallery section
    $(".carousel-link").click(function (event) {
      event.preventDefault();
      var href = $(this).attr("href");
      $('.gallery-container .active, .carousel-link.active').removeClass('active');
      $(href).addClass('active');
      $(this).addClass('active');
    });
    $(".img-gallery").click(function (event) {
      $('.gallery-container .active, .carousel-link.active').removeClass('active');
      $(this).addClass('active');
      var id = $(this).attr("id");
      $('.carousel-link').each(function (index,element) {
        if ($(element).attr("href") === '#'+id) {
          $(element).addClass("active");
        }
      });
    });



    // jQuery Validation
    $("#chimp-form").validate({
      // if valid, post data via AJAX
      submitHandler: function (form) {
        $.post("assets/php/subscribe.php", { email: $("#chimp-email").val() }, function (data) {
          $('#response').html(data);
        });
      },
      // all fields are required
      rules: {
        email: {
          required: true,
          email: true
        }
      }
    });
  });

});
