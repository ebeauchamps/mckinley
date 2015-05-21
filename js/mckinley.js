
var message="Sorry, right-click has been disabled for your safety.";

function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

$(".mastheader").height($(window).height());
$(".about-me").height($(window).height());

document.oncontextmenu=new Function("return false");
$(document).keyup(function(e) {
  if (e.keyCode == 27) { window.location = 'http://www.j1c.us'; } // if esc key press
  else if (e.keyCode == 81) { // if spacebar key press stop rotating letters
  	$('a span#sitenamespan.mirror').css({'-moz-animation-iteration-count': '1'});
  	$('a span#sitenamespan.mirror').css({'-webkit-animation': 'none'});
  	$('a span#sitenamespan.mirror').css({'-webkit-animation-play-state': 'initial'});
  	$('a span#sitenamespan.mirror').css({'-moz-animation-iteration-count': '1'});
  	$('a span#sitenamespan.mirror').css({'-o-animation-iteration-count': '1'});
  	$('a span#sitenamespan.mirror').css({'animation-iteration-count': '1'});
  	}
});


$(document).ready(function() {scaleFont();getHeight();});

    function scaleFont() {

      var viewPortWidth = $(window).width();

      if (viewPortWidth > 1900) {$('body').addClass('extraWide').removeClass('wide, standard, narrow, extraNarrow')}
      else if (viewPortWidth > 1400) {$('body').addClass('wide').removeClass('extraWide, standard, narrow, extraNarrow')}
      else if (viewPortWidth > 1000) {$('body').addClass('standard').removeClass('extraWide, wide, narrow, extraNarrow')}
      else if (viewPortWidth > 700) {$('body').addClass('narrow').removeClass('extraWide, standard, wide, extraNarrow')}
      else {$('body').addClass('extraNarrow').removeClass('extraWide, standard, wide, narrow')};
      setTimeout(scaleFont, 100);
    }

function getHeight() {

$(".mastheader").height($(window).height());
$('.mastheader').css({'background-position': 'center center'});
$('.mastheader').css({'background-size': 'cover'});

	}



$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


