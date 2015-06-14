

// turn off right click for everyone (be safe!)
var message="Sorry, right-click has been disabled for your safety.";

function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {
	if (document.layers||(document.getElementById&&!document.all)) {
	if (e.which==2||e.which==3) {(message);return false;}}}
	if (document.layers){
			document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;
		}
	else {
			document.onmouseup=clickNS;document.oncontextmenu=clickIE;
		}

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
document.onkeyup = (function(e) {
  if (e.keyCode == 27) { window.location = 'https://jamescampbell.us'; } // if esc key press
  else if (e.keyCode == 187) { overlay(); }// if equal sign pressed, display special message (see overlay function)
});

 function overlay() { // overlay easteregg when keycode pressed above
    el = document.getElementById("overlay");
   el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
 }

function randomimagehome() {
    var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']; // any image files you want to use here!
    var rando = images[Math.floor(Math.random() * images.length)]; // make the randomness!
    var classy = document.getElementsByClassName('mastheader');
    classy = classy[0];
    var urllink = 'url(_themes/mckinley/img/'+rando+')';
    classy.style.backgroundImage=urllink;
   };

function scaleFont() {

  var viewPortWidth = window.innerWidth;

  if (viewPortWidth > 1900) {
	  document.body.className = '';
	  document.getElementsByTagName('body')[0].className+='extraWide';
  }
  else if (viewPortWidth > 1400) {
	  document.body.className = '';
	  document.getElementsByTagName('body')[0].className+='wide';
	  }
  else if (viewPortWidth > 1000) {
	  document.body.className = '';
	  document.getElementsByTagName('body')[0].className+='standard';
  }
  else if (viewPortWidth > 700) {
	  document.body.className = '';
	  document.getElementsByTagName('body')[0].className+='narrow';
  }
  else {
	  document.body.className = '';
	  document.getElementsByTagName('body')[0].className+='extraNarrow';
  };
  setTimeout(scaleFont, 100);
}

resize();
scaleFont();
randomimagehome();


// FUCKING SMOOTH SCROLL TO LOCAL # REFERENCE LINK WITHOUT JQUERY
function smoothScroll(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


