// Hat-Tip Bundle v1.1
// Bundle does NOT need you to add the markup or the CSS.  Both get added for you.  Just include the file and call the function.
// https://github.com/jdmdigital/hat-tip
// Hat-Tip v 1.2 - BUNDLE
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


jQuery(document).ready(function () {
    if (!jQuery('#hattip').length){
        jQuery("body").prepend('<style>#hattip{position: fixed;display: none;bottom:-150px;max-height: 100px;width: 100%;background-color:rgba(12,21,38,0.90);transition: all 0.35s;transition-delay: 0.1s;padding:15px 90px 15px 30px;margin-bottom:0!important;z-index: 88;}#hattip span, #hattip button{color:rgba(255,255,255,0.95);}#hattip button{position: absolute;top: 0;right: 0;padding: 0.75rem 1.25rem;background-color: transparent;border: 0;-webkit-appearance: none;-moz-appearance: none;appearance: none;padding: 15px 30px;float: right;font-size: 1.5rem;font-weight: 600;line-height: 1;text-shadow: 0 1px 0 #fff;opacity: .5;text-transform: none;overflow: visible;margin: 0;border-radius: 0;transition: opacity 0.15s;}#hattip button:not(:disabled){cursor: pointer;}#hattip button:not(:disabled):focus, #hattip button:not(:disabled):not(.disabled):hover {opacity: .75;text-decoration: none;outline: none;}#hattip button:not(:disabled):active{opacity: 1;outline: none;}#hattip.display{display: block;}#hattip.loud{-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}#hattip.ht-success{background-color:rgba(6,134,134,0.95);}#hattip.ht-info{background-color:rgba(13,202,240,0.95);}#hattip.ht-danger{background-color:rgba(225,27,80,0.95);}@-webkit-keyframes bounce {from, 20%, 53%, to {-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}40%, 43% {-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform: translate3d(0, -20px, 0) scaleY(1.1);transform: translate3d(0, -20px, 0) scaleY(1.1);}70% {-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform: translate3d(0, -10px, 0) scaleY(1.01);transform: translate3d(0, -10px, 0) scaleY(1.01);}80% {-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);-webkit-transform: translate3d(0, 0, 0) scaleY(0.99);transform: translate3d(0, 0, 0) scaleY(0.99);}90% {-webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);transform: translate3d(0, -4px, 0) scaleY(1.02);}}@keyframes bounce {from, 20%, 53%, to {-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}40%, 43% {-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform: translate3d(0, -20px, 0) scaleY(1.1);transform: translate3d(0, -20px, 0) scaleY(1.1);}70% {-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);-webkit-transform: translate3d(0, -10px, 0) scaleY(1.01);transform: translate3d(0, -10px, 0) scaleY(1.01);}80% {-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);-webkit-transform: translate3d(0, 0, 0) scaleY(0.99);transform: translate3d(0, 0, 0) scaleY(0.99);}90% {-webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);transform: translate3d(0, -4px, 0) scaleY(1.02);}}#hattip.fire{bottom:-1px;}#hattip.fire.loud{-webkit-animation-name: bounce;animation-name: bounce;-webkit-transform-origin: center bottom;transform-origin: center bottom;}@media screen and (min-width:1170px){#hattip #msg{font-size:1.25rem;}}</style><div id="hattip" data-loud="" role="alert"><span id="msg"></span><button type="button" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
    }
	
    jQuery('#hattip button').click(function() {
	    hattip_die();
    });
});