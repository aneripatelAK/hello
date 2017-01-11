$( document ).ready(function() {
	function initMap() {
	  var uluru = {lat: -25.363, lng: 131.044};
	  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	  });
	  var marker = new google.maps.Marker({
		position: uluru,
		map: map
	  });
	}
		
	$("#bookFlight").click(function() {
		if(document.getElementById('oneWay').checked) {
			document.getElementById('bookFlight').href = "flightSelectionOneWay.html";
		}
	});
	
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    })
	
	/*Menu-toggle*/
	var medsize = window.matchMedia("(min-width: 767px)");
		if(medsize.matches)
		 {
			 $( ".leftMenuHome" ).show();
		 }
		else
		 {
			 $(".homePage #menu-toggle").click(function(){
				  $(".leftMenuHome" ).toggle("slide" ,{ direction :"right"} );
				  $(".leftRes").toggleClass("in");
				});
		 }
	
	$("#menu-toggle").click(function() {
		$("#wrapper").toggleClass("active");
		$("body").toggleClass("bodyOverflow");
	});
	 /*Menu-toggle*/
	 
	$(".dropdown-menu li a").click(function(){
	  $(this).parents(".dropdown").find('.forSetText').html($(this).text());
	  $(this).parents(".dropdown").find('.forSetText').val($(this).data('value'));
	});
	
	$( ".datepicker" ).datepicker();	
	
    // This button will increment the value
		$('.qtyplus').click(function(e){
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			fieldName = $(this).attr('field');
			// Get its current value
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			// If is not undefined
			if (!isNaN(currentVal)) {
				// Increment
				$('input[name='+fieldName+']').val(currentVal + 1);
			} else {
				// Otherwise put a 0 there
				$('input[name='+fieldName+']').val(0);
			}
		});
		// This button will decrement the value till 0
		$(".qtyminus").click(function(e) {
			// Stop acting like a button
			e.preventDefault();
			// Get the field name
			fieldName = $(this).attr('field');
			// Get its current value
			var currentVal = parseInt($('input[name='+fieldName+']').val());
			// If it isn't undefined or its greater than 0
			if (!isNaN(currentVal) && currentVal > 0) {
				// Decrement one
				$('input[name='+fieldName+']').val(currentVal - 1);
			} else {
				// Otherwise put a 0 there
				$('input[name='+fieldName+']').val(0);
			}
		});
	
    /*Scroll Spy*/
    $('body').scrollspy({ target: '#spy', offset:80});
	
	
});