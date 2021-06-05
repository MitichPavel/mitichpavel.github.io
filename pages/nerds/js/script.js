$(document).ready(function(){
	//Slick slider
	$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	//Modal
	$('[data-modal=feedback]').on('click', function() {
		$('.overlay, #feedback').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #feedback').fadeOut('slow');
	});
});