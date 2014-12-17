$(".logo-head").fitText(1.2, { minFontSize: '32px', maxFontSize: '110px' });


// Picture element HTML5 shiv
document.createElement( "picture" );


// Smoothscroll CSS-Tricks

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top-150
        }, 1000);
        return false;
      }
    }
  });
});



// Sticky Head

var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});




// Up Arrow

var ua = $(".arrowfixed");

$(window).scroll(function() {
  if( $(this).scrollTop() > 900 ) {
    ua.addClass('show');
  } else {
    ua.removeClass('show');
  }
});


$('.number-size').addClass('animated bounce');

