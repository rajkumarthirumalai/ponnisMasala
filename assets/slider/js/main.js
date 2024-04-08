


/* ============= Testimonial Slider =========*/
$(document).ready(function () {
	'use strict';
	$('.testimonial-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $(".testimonial-arrow-left"),
		nextArrow: $(".testimonial-arrow-right"),
		autoplay: false,
		autoplaySpeed: 4000,
		speed: 1000,
		cssEase: 'ease-in-out',
		fade: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}

		}]
	});
});
