(function ($) {
	
    'use strict';

	function counter_count(){
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});	
	}
	
	function hover_tab(){	
		jQuery('.bgcall-block').on('mouseover', function() {
			var index = $('.bgcall-block').index(this);
			jQuery('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
		});	
	}

	jQuery(document).ready(function() {
		
		
		counter_count(),	
		hover_tab()	
	}); 


})(window.jQuery);