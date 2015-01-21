$(function() {

	$(".grid-block").hover( 
		function() {
			$(".block-hover", this).fadeIn();

		}, function() {
			$(".block-hover", this).fadeOut();
	});

});