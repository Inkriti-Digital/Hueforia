$(function() {
	var navOut = false;
	var myScroll=1;

	resizeElements();

	//RESIZE-ELEMENTS
	$(window).resize(function() {
		resizeElements();
    });

	function resizeElements(){
		var mainVidHeight = $(window).height();
    	console.log(mainVidHeight);
    	$('.main-vid').css( "height", mainVidHeight );
	}

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
			// $(".block-hover", this).css('left', 0);
			$(".block-hover", this).animate({
		    // opacity: 0.25,
		    left: "0"
		  }, 500, function() {
		    // Animation complete.
		  });
			// fadeIn();
			$(".block-hover .block-link h2", this).delay(400).slideDown();
			$(".block-hover .block-link .sub-title", this).delay(500).animate({
  				opacity: 1
  			}, 500, function() {
    			// Animation complete.
  			});
			// $(".block-hover .sub-title").slideUp();
		}, function() {
			// $(".block-hover", this).fadeOut();
			$(".block-hover", this).animate({
		    // opacity: 0.25,
		    left: "-100%"
		  }, 500, function() {
		    // Animation complete.
		  });
			$(".block-hover .block-link h2", this).fadeOut();
			$(".block-hover .block-link .sub-title", this).delay(400).animate({
  				opacity: 0
  			}, 500, function() {
    			// Animation complete.
  			});
	});

	//SCROLL GRID EFFECT
	// $(window).scroll(function(){
	// 	console.log('scroll');
		
	// });


	$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));

	    myScroll++;
		$(".grid-block").css('margin-top', myScroll/5);
	    
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        var finalScroll= myScroll; 
	        console.log(finalScroll);

	    
	        	$(".grid-block").animate({
		    		marginTop: 0
		  		}, 300, 'easeOutQuad', 
		  		function() {
			    	myScroll = 0;
				});

				

				
	        

	        console.log("Haven't scrolled in 100ms!");
	    }, 100));
	});





});