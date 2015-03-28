jQuery(function($) {'use strict';

	$('a.profile').siblings("span").toggle();

	$('a.profile').click(function() {
		$(this).siblings("span").toggle();
		$(this).toggle();
	});

	$('span.profile').click(function() {
		$(this).toggle();
		$(this).siblings("a").toggle();
	});

// infinitescroll() is called on the element that surrounds 
// the items you will be loading more of
	if(jQuery.infinitescroll)
		$('#content').infinitescroll({
			navSelector  : "div.navigation",            
			               // selector for the paged navigation (it will be hidden)
			nextSelector : "div.navigation a:first",    
			               // selector for the NEXT link (to page 2)
			itemSelector : "#content div.row"          
			               // selector for all items you'll retrieve
		});

	$('#contact .container-wrapper').click(function(){
		window.open('https://goo.gl/maps/tQRCW', 'Synergia Medical Location', '');
		return false;
	});
	$('#contact .contact-form').click(function(e){
		e.preventDefault();
		return false;
	});
	
	
	
});

