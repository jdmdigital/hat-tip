// Hat-Tip Bundle v1.1
// Bundle does NOT need you to add the markup or the CSS.  Both get added for you.  Just include the file and call the function.
// https://github.com/jdmdigital/hat-tip

function hattip_die() {
    $('#hattip').removeClass('fire');

    setTimeout(function () {
        $('#hattip #msg').html('');
        $('#hattip').removeAttr('class');
    }, 400);
}

function hattip_fire(msg = 'Top of the morning to ya!', colorClass = 'ht-default') {
    var hhwaiting = 50;

    if ($('#hattip').hasClass('fire')) {
        hattip_die();
        hhwaiting = 500;
    }

    setTimeout(function () {
        $('#hattip #msg').html(msg);
        $('#hattip').addClass(colorClass).addClass('display');
        setTimeout(function () {
            $('#hattip').addClass('fire');
        }, 25);

        // Auto-hide after 10 seconds if no other notifications are added?
        /*setTimeout(function() {
            hattip_die();
        }, 10000);*/

    }, hhwaiting);
}

jQuery(document).ready(function () {
    if (!jQuery('#hattip').length) {
        jQuery("body").prepend('<style>#hattip{position:fixed;display:none;bottom:-150px;max-height:100px;width:100%;background-color:rgba(12,21,38,.9);transition:.35s 0.1s;padding:15px 90px 15px 30px;margin-bottom:0!important;text-align:left}#hattip button,#hattip span{color:rgba(255,255,255,.95)}#hattip button{position:absolute;top:0;right:0;padding:15px 30px;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;float:right;font-size:1.5rem;font-weight:600;line-height:1;text-shadow:0 1px 0 #fff;opacity:.5;text-transform:none;overflow:visible;margin:0;border-radius:0;transition:opacity .15s}#hattip button:not(:disabled){cursor:pointer}#hattip button:not(:disabled):focus,#hattip button:not(:disabled):not(.disabled):hover{opacity:.75;text-decoration:none;outline:0}#hattip button:not(:disabled):active{opacity:1;outline:0}#hattip.fire{bottom:-1px}#hattip.display{display:block}#hattip.ht-success{background-color:rgba(6,134,134,.95)}#hattip.ht-info{background-color:rgba(13,202,240,.95)}#hattip.ht-danger{background-color:rgba(225,27,80,.95)}</style><div id="hattip" role="alert"><span id="msg"></span><button type="button" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
    }

    jQuery('#hattip button').click(function () {
        hattip_die();
    });
});