$(document).ready(function(){
	var navOut = false;
	var myScroll=1;
	var slideDirection = 0;


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
$(".grid-block").hover( function() {

			 // slideDirection = Math.floor((Math.random() * 4) + 1);
			console.log(slideDirection);

			if(slideDirection==1){
				$(".block-hover", this).css({
					'left':'-100%',
				   	'right':'auto',
				   	'top':'auto',
				   	'bottom':'auto'
				});

				$(".block-hover", this).delay(50).animate({ left: "0"}, 500, 'easeOutQuad', function() {});
			} else if(slideDirection==2){
				$(".block-hover", this).css({
					'left' : 'auto',
				   	'right' : '-100%',
				   	'top' : 'auto',
				   	'bottom' : 'auto'
				});
				$(".block-hover", this).delay(50).animate({ right: "0"}, 500, 'easeOutQuad', function() {});
			} else if(slideDirection==3){
				$(".block-hover", this).css({
					'left' : 'auto',
				   	'right' : 'auto',
				   	'top' : '-100%',
				   	'bottom' : 'auto'
				});
				$(".block-hover", this).delay(50).animate({ top: "0"}, 500, 'easeOutQuad', function() {});
			} else if(slideDirection==4){
				$(".block-hover", this).css({
					'left' : 'auto',
				   	'right' : 'auto',
				   	'top' : 'auto',
				   	'bottom' : '-100%'
				});
				$(".block-hover", this).delay(50).animate({ bottom: "0"}, 500, 'easeOutQuad', function() {});
			}


			// $(".block-hover .block-link h2", this).delay(400).slideDown();
			// $(".block-hover .block-link .sub-title", this).delay(500).animate({
  			// 	opacity: 1
  			// }, 500, 'easeOutQuad', function() { /* Animation complete.*/ });
		}, function() {	
			$(".block-hover", this).css({
					'left':'auto',
				   	'right':'auto',
				   	'top':'auto',
				   	'bottom':'auto'
				});

			if(slideDirection==1){				
				$(".block-hover", this).delay(50).animate({ right: "-400px"}, 300, 'easeOutQuad', function() {});
			} else if(slideDirection==2){				
				$(".block-hover", this).delay(50).animate({ left: "-100%"}, 300, 'easeOutQuad', function() {});
			} else if(slideDirection==3){				
				$(".block-hover", this).delay(50).animate({ bottom: "-100%"}, 300, 'easeOutQuad', function() {});
			} else if(slideDirection==4){				
				$(".block-hover", this).delay(50).animate({ top: "-100%"}, 300, 'easeOutQuad', function() {});
			}
	});

	//SCROLL GRID EFFECT
	$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));

	    myScroll++;
		$(".grid-block").css('margin-top', myScroll/2);
	    
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        var finalScroll= myScroll; 
	        console.log(finalScroll);
	    
	        	$(".grid-block").animate({
		    		marginTop: 0
		  		}, 300, 'easeOutQuad', 
		  		function() {
			    	myScroll = 0;
				});
	     // console.log("Haven't scrolled in 100ms!");
	    }, 50));
	});
});