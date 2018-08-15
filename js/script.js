$( document ).ready( function() {

  // RESOURCES.
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


  // PHOTOGRAPHY ONLY
  if ( $('body').hasClass('page-parent-photography') ) {


    // (2) Navigator additions
    // Hide the label to avoid redundancy in the list
    $('#nav-photography').on('show.bs.collapse', function () {
      $('.nav-photography-active-label').hide();
    });
    $('#nav-photography').on('hide.bs.collapse', function () {
      $('.nav-photography-active-label').show();
    });

    // (3) Image Info Panel Toggler
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

  // PHOTOGRAPHY ONLY
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

  // (6)
  // Enable lightbox gallery through Ekko Lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

} );
