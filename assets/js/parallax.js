var $win = $(window);
var $doc = $(document);
var $body = $("body");

var parallax = function(bgImgSelector,parallaxEffSpeed){
	
	var scrollHandler = function(){
		var scrollTop = $win.scrollTop();
		var winHeight = $win.height();
		for(var x =0; x<totalPages; x++){
			var $page = $(pages[x]);
			var yPos = -scrollTop + $page.offset().top;
			$('[data-type="sakthiparallaxImg"]', $page).each(function(){
				var $self = $(this); // console.log($self);
				var targetY = parseInt($self.attr('data-y'));
				var speed = parseFloat($self.attr('data-speed'));
				
				$self.css({top: (targetY + yPos*speed)+'px'})
			});	
		}		
	}
	
	this.scroll = function(){
		scrollHandler();
	}
	
	this.init = function(context){
		var setup = function(){
			
			backImages = $(bgImgSelector).each(function(index, element) {
				
                backImageYPos.push(parseInt($(this).css('top')));
            });;
			pages = $('section').each(function(index, element) {
                $(this).data('index',index);
            });
			
			$('[data-type="sakthiparallaxImg"]').each(function(){
				$(this).attr('data-x', parseInt($(this).css('left')));
			});	
			$('[data-type="sakthiparallaxImg"]').each(function(){
				$(this).attr('data-y', parseInt($(this).css('top')));
			});
				
			totalPages = pages.length;
			$currentPage = $(pages[0]);
			$win.bind('scroll', function(event){
				event.preventDefault();
				scrollHandler();
				});
			scrollHandler();			
			
		}
		
		setup();
		return context;
	}(this)
}