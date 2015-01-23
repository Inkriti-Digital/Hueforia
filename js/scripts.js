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

		}, function() {
			$(".block-hover", this).fadeOut();
	});





});