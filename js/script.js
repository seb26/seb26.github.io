$(document).ready(function() {

  /* For: ALL */

  // Use Unveil to dynamically load images with this class
  // $(".load-dyn").unveil(200);



  // Nominate the element to act as the dynamic header
  var navTarget = '.sc';
  // Nomiante the invisible element which
  // will allow the dynamic header to return when
  // the user hovers over the bottom end of the page.
  var navTargetHover = '.sc-hover';
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $(navTarget).outerHeight();
  $(window).scroll(function(event){
      didScroll = true;
  });
  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $(navTarget).removeClass('sc-down').addClass('sc-up');
        // Also hide the expanded mobile panel when user scrolls back down
        $(navTarget).removeClass('sc-mobile-show');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $(navTarget).removeClass('sc-up').addClass('sc-down');
        }
    }
    lastScrollTop = st;
  };
  $(navTargetHover).hover(function() {
    $(navTarget).removeClass('sc-up').addClass('sc-down');
  });
  $(navTarget + ' .nav-link.active').click(function(e) {
    // Stop the active link from disrupting mobile's click toggle behaviour
    e.preventDefault();
    $(navTarget).toggleClass('sc-mobile-show');
  });


  /* For: index.html
   * Make the image info panel toggleable. */

  $('.ii-icon').mousedown(function(e){ e.preventDefault(); }); // Prevent double-click selecting on the icon box
  var image_info_overlay = false;
  $('.ii-icon').click( function() {
    // The overlay text (ii-body)
    // is found just one element prior
    image_info_overlay = $(this).prev();
    $(image_info_overlay).toggle();
  });
  $(window).click( function(e) {
    if ( image_info_overlay ) {
      // User has clicked on an Info bubble
      clicked = $(e.target);
      parents = clicked.parents();
      if ( clicked.hasClass('ii-icon')
          ||  parents.hasClass('ii')
          || parents.hasClass('ii-icon')
      ) {
        // If you click the icon, or the infobox
        return;
      }
      else {
        // If you click anywhere else,
        // Then hide *all* info overlays
        $('.ii').hide();
      }
    }
    else {
      // User has not clicked on an Info bubble
      return;
    }
  });


});
