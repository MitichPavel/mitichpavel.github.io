$(document).ready(function(){
	//Modal
	$('[data-modal=feedback]').on('click', function() {
		$('.overlay, #feedback').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #feedback').fadeOut('slow');
	});

	//Jquery UI range------------
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 25000,
		values: [ 0, 25000 ],
		slide: function( event, ui ) {
			$( "#amount-from" ).val(ui.values[ 0 ] );
			$( "#amount-to" ).val(ui.values[ 1 ] );
		},
	});
	$( "#amount-from" ).val( $( "#slider-range" ).slider( "values", 0 ) );
	$( "#amount-to" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	//Changing location of first pin
	$("input#amount-from").change(function(){
		var value1 = $("input#amount-from").val();
		var value2 = $("input#amount-to").val();

		if(parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			$("input#amount-from").val(value1);
		}
		$("#slider-range").slider("values", 0, value1);
	});

	//Changing location of second pin
	$("input#amount-to").change(function(){
		var value1 = $("input#amount-from").val();
		var value2 = $("input#amount-to").val();

		if(parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			$("input#amount-to").val(value2);
		}
		$("#slider-range").slider("values", 1, value2);
	});

	//Validation values of inputs
	jQuery("#amount-to, #amount-from").keypress(function(event){
		var key, keyChar;
		if(!event){
			var event = window.event;
		}
		if(event.keyCode){
			key = event.keyCode;
		} else if (event.which){
			key = event.which;
		}
		if(key == null || key == 0 || key == 8 || key == 13 || key == 9 ||
			key == 46 || key == 37 || key == 39){
			return true;
		}
		keyChar = String.fromCharCode(key);

		if(!/\d/.test(keyChar)){
			return false;
		}
	});
	//Jquery UI range------------end
});