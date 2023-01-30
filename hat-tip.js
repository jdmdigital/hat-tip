// Hat-Tip v 1.2
// https://github.com/jdmdigital/hat-tip
function hattip_die(){
	$('#hattip').removeClass('fire loud');

	setTimeout(function() {
		$('#hattip #msg').html('');
		$('#hattip').removeAttr('class');
	},400);
}

function hattip_fire(msg = 'Hello World!',colorClass = 'ht-default',loud = 'keep-calm'){
	var hhwaiting = 50;
	$('#hattip').data('loud',loud);
	
	if($('#hattip').hasClass('fire')) {
		hattip_die();
		hhwaiting = 500;
	}

	setTimeout(function() {
		$('#hattip #msg').html(msg);
		$('#hattip').addClass(colorClass).addClass('display'); 
	setTimeout(function() { 
        if($('#hattip').data('loud') == 'dont-panic') {
			$('#hattip').addClass('fire loud');
		} else {
			$('#hattip').addClass('fire');
		}
	}, 30);

	// Auto-hide after 6 seconds if no other notifications are added?
	/*setTimeout(function() {
	hattip_die();
	},6000);*/

	},hhwaiting);
}

jQuery('#hattip button').click(function() {
	hattip_die();
});
