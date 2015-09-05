(function ($) {
  "use strict";
  $(document).ready(function(){
    var $window = $(window),
    $image = $('.intro_title, .intro_text, .inn_hbg, .carousel-control'),
    $hbg = $('.pbg, .carousel-inner');
    
      $window.on('scroll', function() {
        var top = $window.scrollTop();
        if (top < 0 || top > 1500) { return; }
        $image
          .css('transform', 'translate3d(0px, '+top/4+'px, 0px)')
          .css('opacity', 1-Math.max(top/300, 0));
        $hbg
          .css('transform', 'translate3d(0px, '+top/2+'px, 0px)')
          .css('opacity', 1-Math.max(top/500, 0));
        
        if ($('.navbar').offset().top > 300) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
      });
  });
}(jQuery));

/*
    
    
    
    
    
    var inn_Scrpt = {

        inn: function () {

            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top >300) {
                    $(".navbar-fixed-top").removeClass("navbar-custom animated fadeInDown");
                    $(".navbar-fixed-top").addClass("navbar-default animated fadeInUp");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-default animated fadeInUp");
                    $(".navbar-fixed-top").addClass("navbar-custom animated fadeInDown");
                }
            });


        },

        initialization: function () {
            inn_Scrpt.inn();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        inn_Scrpt.inn();
    });

*/