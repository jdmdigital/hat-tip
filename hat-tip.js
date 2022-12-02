// Hat-Tip v 1.0
// https://github.com/jdmdigital/hat-tip
jQuery(document).ready(function(){
	function hattip_die(){
		$('#hattip').removeClass('fire');

		setTimeout(function() {
			$('#hattip #msg').html('');
			$('#hattip').removeAttr('class');
		},400);
	}

	function hattip_fire(msg = 'Hello World!',colorClass = 'ht-default'){
		var hhwaiting = 50;

		if($('#hattip').hasClass('fire')) {
			hattip_die();
			hhwaiting = 500;
		} 			   

		setTimeout(function() {
			$('#hattip #msg').html(msg);
			$('#hattip').addClass(colorClass).addClass('display'); 
		setTimeout(function() { 
			$('#hattip').addClass('fire');
		}, 25);

		// Auto-hide after 6 seconds if no other notifications are added?
		/*setTimeout(function() {
		hattip_die();
		},6000);*/

		},hhwaiting);
	}
	
	$('#hattip button').click(function() {
		hattip_die();
	});
});