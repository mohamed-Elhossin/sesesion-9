new WOW().init();
$(document).ready(function(){
 
    $('div').css({
        'height' : window.innerHeight
    })
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 4000
    });
    $("body").niceScroll({
        cursorcolor : 'red',
        cursorwidth : '16px'
    });

  });