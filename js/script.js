$( document ).ready( function() {

  // RESOURCES
  //
  // http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen
  // Mike Dunn.
  $.fn.visible = function() {
    var viewport = {};
    viewport.top = $( window ).scrollTop();
    viewport.bottom = viewport.top + $( window ).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    return ( ( bounds.top <= viewport.bottom ) && ( bounds.bottom >= viewport.top ) );
  };

  // FUNCTIONS
  //

  // (1) Lazy Loading
  $('.lazy').show().Lazy();

  // (2) Subcategory Navigator
  //
  // Nominate the element to act as the dynamic header
  if ( $('body').hasClass('page-parent-photography') ) {
    var navTarget = '.sc';
    // Nomiante the invisible element which
    // will allow the dynamic header to return when
    // the user hovers over the bottom end of the page.
    var navTargetHover = '.sc-hover';
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $( navTarget ).outerHeight();
    $( window ).scroll( function( event ) {
      didScroll = true;
    } );
    setInterval( function() {
      if ( didScroll ) {
        hasScrolled();
        didScroll = false;
      }
    }, 250 );

    function stickyHeaderToggle() {
      // Check if we are on the last image. Make the nav:
      // * become static again
      // * appear contiguously at the end of the page.
      if ( $( '.end-of-images' ).visible() ) {
        $( navTarget ).removeClass( 'sticky' ).addClass( 'static' ).addClass( 'mobile-show' );
        $( navTargetHover ).hide();
      } else {
        $( navTarget ).addClass( 'sticky' ).removeClass( 'static' ).removeClass( 'mobile-show' );
        $( navTargetHover ).show();
      }
      return;
    }

    function hasScrolled() {
      var st = $( this ).scrollTop();
      // Make sure they scroll more than delta
      if ( Math.abs( lastScrollTop - st ) <= delta ) return;
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if ( st > lastScrollTop && st > navbarHeight ) {
        // On Scroll Down
        $( navTarget ).removeClass( 'sc-down' ).addClass( 'sc-up' );
        stickyHeaderToggle();
      } else {
        // On Scroll Up
        if ( st + $( window ).height() < $( document ).height() ) {
          $( navTarget ).removeClass( 'sc-up' ).addClass( 'sc-down' );
        }
        stickyHeaderToggle();
      }
      lastScrollTop = st;
    };
    $( navTargetHover ).hover( function() {
      $( navTarget ).removeClass( 'sc-up' ).addClass( 'sc-down' );
    } );
    $( navTarget + ' .nav-link.active' ).click( function( e ) {
      // Stop the active link from disrupting mobile's click toggle behaviour
      e.preventDefault();
      $( navTarget ).toggleClass( 'mobile-show' );
    } );


    // (3) Image Info Panel Toggler
    //
    //
    $('.ii').each( function(i) {
      var ii = $( this );
      var children = ii.find('.m-toggle, .share');
      var mToggle = $( children[0] );
      var mShare = $( children[1] );

      mToggle.click( function() {
        ii.toggleClass('m-hide m-show');
      });

      mShare.click( function() {
        $( this ).toggleClass('share-hide share-show');
      });
    });


  }


  // (4) Show/Hide contact form
  // For use on about.html
  if ( $('body').hasClass('page-about') ) {

    $('#about-contact-form-toggle').click( function(e) {
      // Prevent normal click
      e.preventDefault();
      $('#about-contact-form').toggle();
    });

  }

  // (5) Switch between English (en) and Spanish (es)
  // For use on blog pages
  if ( $('body').hasClass('page-blog') ) {

    var blog = $('article.blog');

    if ( blog.hasClass('bilingual') ) {
      // Logic for the language switch

      var current_lang = blog.attr('lang');
      var change_to;
      if ( current_lang == 'en' ) {
        change_to = 'es';
      } else if ( current_lang == 'es' ) {
        change_to = 'en';
      } else {
        change_to = 'en-fail';
      }

      // And hide the minority language first
      $('.blog-text-content.' + change_to).hide();
      $('.change-language-label.' + current_lang).hide();

      $('#change-language').click( function(e) {
        // Prevent normal click
        e.preventDefault();

        // Redo logic
        var current_lang = blog.attr('lang');
        var change_to;
        if ( current_lang == 'en' ) {
          change_to = 'es';
        } else if ( current_lang == 'es' ) {
          change_to = 'en';
        } else {
          change_to = 'en-fail';
        }

        // Switch body text
        $('.blog-text-content.' + current_lang).hide();
        $('.blog-text-content.' + change_to).show();

        // Switch current language link label
        $('.change-language-label.' + current_lang).show();
        $('.change-language-label.' + change_to).hide();

        // And then update the parameter
        blog.attr('lang', change_to);

      });
    }
  }

} ); // All code above this.
