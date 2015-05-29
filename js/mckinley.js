

// turn off right click for everyone (be safe!)
var message="Sorry, right-click has been disabled for your safety.";

function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

// get client height and set it for background image and scroll panes
var contained = document.getElementsByClassName("mastheader");
var aboutsection = document.getElementsByClassName("about-me");
aboutsection = aboutsection[0] // only need the first one
contained = contained[0] // only need the first one

// set height for containers based on window height
function resize() {
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerWidth,
    viewportheight = window.innerHeight
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
    viewportwidth = document.documentElement.clientWidth,
    viewportheight = document.documentElement.clientHeight
}

// older versions of IE

else {
    viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
    viewportheight = document.getElementsByTagName('body')[0].clientHeight
}
contained.style.height = viewportheight+"px";
aboutsection.style.height = viewportheight+"px";
}

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

function randomimagehome() {
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']; // any image files you want to use here!
    var rando = images[Math.floor(Math.random() * images.length)]; // make the randomness!
    var classy = document.getElementsByClassName('mastheader');
    classy = classy[0];
    var urllink = 'url(_themes/mckinley/img/'+rando+')';
    classy.style.backgroundImage=urllink;
   };

function scaleFont() {

  var viewPortWidth = $(window).width();

  if (viewPortWidth > 1900) {$('body').addClass('extraWide').removeClass('wide, standard, narrow, extraNarrow')}
  else if (viewPortWidth > 1400) {$('body').addClass('wide').removeClass('extraWide, standard, narrow, extraNarrow')}
  else if (viewPortWidth > 1000) {$('body').addClass('standard').removeClass('extraWide, wide, narrow, extraNarrow')}
  else if (viewPortWidth > 700) {$('body').addClass('narrow').removeClass('extraWide, standard, wide, extraNarrow')}
  else {$('body').addClass('extraNarrow').removeClass('extraWide, standard, wide, narrow')};
  setTimeout(scaleFont, 100);
}

resize();
scaleFont();
randomimagehome();




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


