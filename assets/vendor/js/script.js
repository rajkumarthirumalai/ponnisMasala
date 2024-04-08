(function($) {
  'use strict';
  var blog_owl = $(".sakthi-product-section-owl")
  if( blog_owl.length ){ 
      blog_owl.owlCarousel({
        autoplay: true,
        rtl:false,
        loop:true,
        margin:0,
        nav:true,
        navText:["<div class='sakthi-product_prev_div'><i class='fa fa-chevron-left'></i></div>","<div class='sakthi-product_next_div'><i class='fa fa-chevron-right'></i></div>"],
        responsive:{ 0:{ items:1 }, 600:{ items:1 }, 1000:{ items:1 } }
      }); 
  }
  var blog_owl = $(".sakthi-service-section-owl")
  if( blog_owl.length ){ 
      blog_owl.owlCarousel({
        autoplay: true,
        rtl:false,
        loop:true,
        margin:0,
        nav:true,
        navText:["<div class='sakthi-services_prev_div'><i class='fa fa-long-arrow-left'></i> &nbsp; PREV </div>","<div class='sakthi-services_next_div'>NEXT &nbsp; <i class='fa fa-long-arrow-right'></i></div>"],
        responsive:{ 0:{ items:1 }, 600:{ items:1 }, 1000:{ items:1 } }
      }); 
  }
  var blog_owl = $(".testimonial_owlCarousel")
  if( blog_owl.length ){ 
      blog_owl.owlCarousel({
        autoplay: true,
        rtl:false,
        loop:true,
        margin:0,
        nav:true,
        navText:["<div class='sakthi-product_prev_div'><i class='fa fa-chevron-left'></i></div>","<div class='sakthi-product_next_div'><i class='fa fa-chevron-right'></i></div>"],
        responsive:{ 0:{ items:1 }, 600:{ items:1 }, 1000:{ items:1 } }
      }); 
  }
})(jQuery);

