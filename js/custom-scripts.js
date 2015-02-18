$(document).ready(function(){
	var navOut = false;
	var myScroll=1;
	var slideDirection = 0;
	var blockCount = 1;
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
	$( ".nav-burger" ).mouseenter(function() {
		$(".ham-line").animate({ 
			marginBottom: "6px",
			marginTop: "6px",
			top: '-5px'
		}, 150, 'easeOutQuad', function() {});	
	});
	$( ".nav-burger" ).mouseleave(function() {
		$(".ham-line").animate({ 
			marginBottom: "3px",
			marginTop: "3px",
			top: '0px'

		}, 150, 'easeOutQuad', function() {});	
	});


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

			slideDirection = Math.floor((Math.random() * 4) + 1);
			// console.log(slideDirection);

			if(slideDirection==1){
				$(".block-hover", this).css({
					'left':'-100%',
				   	'right':'auto',
				   	'top':'auto',
				   	'bottom':'auto',
				   	'display': 'block'
				});

				$(".block-hover", this).delay(50).animate({ left: "0"}, 500, 'easeOutQuad', function() {});
			} else if(slideDirection==2){
				$(".block-hover", this).css({
					'left' : 'auto',
				   	'right' : '-100%',
				   	'top' : 'auto',
				   	'bottom' : 'auto',
				   	'display': 'block'
				});
				$(".block-hover", this).delay(50).animate({ right: "0"}, 500, 'easeOutQuad', function() {});
			} else if(slideDirection==3){
				$(".block-hover", this).css({
					'left' : 'auto',
				   	'right' : 'auto',
				   	'top' : '-100%',
				   	'bottom' : 'auto',
				   	'display': 'block'
				});
				$(".block-hover", this).delay(50).animate({ top: "0"}, 500, 'easeOutQuad', function() {});
			} else if(slideDirection==4){
				$(".block-hover", this).css({
					'left' : 'auto',
				   	'right' : 'auto',
				   	'top' : 'auto',
				   	'bottom' : '-100%',
				   	'display': 'block'
				});
				$(".block-hover", this).delay(50).animate({ bottom: "0"}, 500, 'easeOutQuad', function() {});
			}


			 $(".block-hover .block-link h2", this).delay(400).slideDown();
			 $(".block-hover .block-link .sub-title", this).delay(500).animate({
  			 	opacity: 1
  			 }, 500, 'easeOutQuad', function() { /* Animation complete.*/ });
		}, function() {	

			$(".block-hover", this).fadeOut();

			 $(".block-hover .block-link h2", this).delay(200).slideUp();
			 $(".block-hover .block-link .sub-title", this).delay(200).animate({
  			 	opacity: 0
  			 }, 500, 'easeOutQuad', function() { /* Animation complete.*/ });
	});

	//SCROLL GRID EFFECT
	$(window).scroll(function() {
	    

		var eTop = $('.grid-ctnr').offset().top; //get the offset top of the element
		var hideLockup = (eTop - $(window).scrollTop());
  		//console.log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

  		if(hideLockup<=30){
  			$(".lockup").hide();
  		} else if( hideLockup >= 30){
  			$(".lockup").show();
  		}
	   

	    clearTimeout($.data(this, 'scrollTimer'));

	    myScroll++;
	  	var gridRand1 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand2 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand3 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand4 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand5 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand6 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand7 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand8 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand9 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	  	var gridRand10 = (1+(Math.floor((Math.random() * 10) + 1))/(10));
	    // console.log(randomMargin)
		$("#gBlock1 img").css('top', (myScroll)*1.2);
		$("#gBlock2 img").css('top', (myScroll)*1.9);
		$("#gBlock3 img").css('top', (myScroll)*1.5);
		$("#gBlock4 img").css('top', (myScroll)*1.1);
		$("#gBlock5 img").css('top', (myScroll)*1.7);
		$("#gBlock6 img").css('top', (myScroll)*1);
		$("#gBlock7 img").css('top', (myScroll)*1.3);
		$("#gBlock8 img").css('top', (myScroll)*1.75);
		$("#gBlock9 img").css('top', (myScroll)*1.4);
		$("#gBlock10 img").css('top', (myScroll)*1.8);
		$("#gBlock11 img").css('top', (myScroll)*1.3);
	   
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        var finalScroll= myScroll; 
	        // console.log(finalScroll);
	    
         	$(".grid-block img").animate({
	   			top: 0
	 		}, 300, 'easeOutQuad', 
	 		function() {
		    	myScroll = 0;
		    	// randomMargin = 0;
	 		});
	     // console.log("Haven't scrolled in 100ms!");
	     }, 100));
	});


	$( ".grid-block" ).each(function( index ) {
		
		var newId = 'gBlock'+blockCount;
		$(this).attr('id', newId);
		blockCount++;
	  
	  	//console.log( index + ": " + $( this ).attr("id"));
	});
});