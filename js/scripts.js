$(function() {
	var navOut = false;

	//NAV FUNCTIONS
	$(".nav-burger").click(function(event) {
		if(navOut == false){
			$(".ham-ico").hide();
			$(".ham-close").show();	
			$(".nav-bubble").show();
			navOut = true;
		} else if(navOut == true){
			$(".ham-close").hide();	
			$(".ham-ico").show();
			$(".nav-bubble").hide();
			navOut = false;
		}
	});


	//GRID HOVER EFFECTS
	$(".grid-block").hover( 
		function() {
			$(".block-hover", this).fadeIn();
			$(".block-hover .block-link h2", this).delay(250).slideDown();
			$(".block-hover .block-link .sub-title", this).delay(250).animate({
  				opacity: 1
  			}, 500, function() {
    			// Animation complete.
  			});
			// $(".block-hover .sub-title").slideUp();
		}, function() {
			$(".block-hover", this).fadeOut();
			$(".block-hover .block-link h2", this).fadeOut();
			$(".block-hover .block-link .sub-title", this).delay(250).animate({
  				opacity: 0
  			}, 500, function() {
    			// Animation complete.
  			});
	});





});