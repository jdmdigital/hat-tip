// Hat-Tip v 1.3 - No jQuery Dependancy
// https://github.com/jdmdigital/hat-tip
function hattip_die() {
    const hattipElement = document.getElementById('hattip');
    hattipElement.classList.remove('fire', 'loud');

 

    setTimeout(function() {
        const msgElement = document.querySelector('#hattip #msg');
        msgElement.innerHTML = '';
        hattipElement.removeAttribute('class');
    }, 400);
}


function hattip_fire(msg = 'Hello World!', colorClass = 'ht-default', loud = 'keep-calm') {
    const hattipElement = document.getElementById('hattip');
    let hhwaiting = 50;
    hattipElement.dataset.loud = loud;

    if (hattipElement.classList.contains('fire')) {
        hattip_die();
        hhwaiting = 500;
    }

    setTimeout(function() {
        const msgElement = document.querySelector('#hattip #msg');
        msgElement.innerHTML = msg;
        hattipElement.classList.add(colorClass, 'display');

        setTimeout(function() {
            if (hattipElement.dataset.loud === 'dont-panic') {
                hattipElement.classList.add('fire', 'loud');
            } else {
                hattipElement.classList.add('fire');
            }
        }, 30);

        // Auto-hide after 6 seconds if no other notifications are added?
        /*setTimeout(function() {
            hattip_die();
        }, 6000);*/

    }, hhwaiting);
}

document.querySelector('#hattip button').addEventListener('click', function() {
    hattip_die();
});