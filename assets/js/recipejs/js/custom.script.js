(function($) {
    "use strict";
    var shift = $(window).width() > 640 ? 550 : 125;

	if($('.picker-btn').length){
		$('.picker-btn').on('click', function(){
			if(parseInt($('.color-picker').css('right')) == 0){
				$('.color-picker').stop().animate({'right': -160}, 500);
			}else{
				$('.color-picker').stop().animate({'right': 0}, 500);
			}
		});
		$('.color-picker .pwrapper div.color').on('click', function(){
			$('body').removeClass('lightgreen blue green lightred red yellow turquoise pink purple');
			$('body').addClass($(this).attr('data-color'));
		});
	}
	
	if($('.zoom').length){
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});
	}	

	function scrolling(){
		var scroll = $('.page-wrapper').scrollTop();

		if($('#menu').length && parseInt($('#menu').offset().top)-shift+scroll < scroll){			
			if($('#menu').hasClass('animate')){
				$('#menu').removeClass('animate');

				var time = -200;
				$('#menu .dish-block').each(function(){
					time += 200;
					var thiz = this;
					setTimeout(function(){
						$(thiz).addClass('animate');						
					}, time)
				})
			}
		}
	}

	$('.page-wrapper').on('scroll', function(){
		scrolling();
	});

	setTimeout(function(){

		if($('.dish-block').length){
			var $container = $('#menu .row');
			
			$container.imagesLoaded( function() {
		  		$container.masonry({
					itemSelector: '.dish-block',
					transitionDuration : 0
				} );
			});
		}
		
	}, 2000);
	
})(jQuery); 

