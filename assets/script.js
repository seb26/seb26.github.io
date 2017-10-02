$(document).ready(function() {
  
  /* For: ALL */
  
  // Allow non-JS and JS styling
  $("body").removeClass("no-js");
  $("body").addClass("js");
  
  // Use Unveil to dynamically load images with this class
  $(".load-dyn").unveil(200);
  
  
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
  
  
  $('.subcat-wrapper').mousedown(function(e){ e.preventDefault(); }); // Prevent double-click selecting on the icon box
  var subcat_list = false;
  $('#subcat-toggle-button').click( function() {
    subcat_list = $(this).next();
    $(subcat_list).toggle();
  });
  $(window).click( function(e) {
    if ( subcat_list ) {
      // User has clicked on an Info bubble
      clicked = $(e.target);
      parents = clicked.parents();
      if ( clicked.hasClass('subcat-toggle') ) {
        // If you click the icon, or the infobox
        return;
      }
      else {
        // If you click anywhere else
        $(subcat_list).hide();
      }
    }
    else {
      // User has not clicked on an Info bubble
      return;
    }
  });
     
  
  
  /* For: index.html
   * Make the Subcategory switcher change
   * according to what section we are on. */
  
  /* DISABLED 
  var page_segments = [ 'people', 'photojournalism', 'environment', 'urban', 'architecture' ];
  $(window).scroll(function() {
    page_segments.forEach(function(segment) {
      var scroll = $(window).scrollTop();
      var theSegment = $('#' + segment);
      var os = theSegment.offset().top;
      var ht = theSegment.prev().prev().height();
      if( scroll > os - ht ) {
        // Change the label
        $('#subcat-toggle-button').text(theSegment.text());
        // Remove the active class
        $('.subcat-menu a').removeClass('item-active');
        // Add the class again to just one item
        $('#subcat-item-' + segment).addClass('item-active');
      }
    });
  });
  $('.subcat-menu a').click(function(e) {
    $(e.target).removeClass('item-active');
    $(e.target).parent().hide();
    clicked_subcat = $(e.target).data('subcat');
    // $('#subcat-menu-' + clicked_subcat).addClass('item-active');
  });
  // When user jumps to top, manually change
  // the label so it says 'People'.
  // I.e., the first category.
  $('#subcat-jump-to-top').click(function(e) {
    $('#subcat-toggle-button').text('People');
  });
  */

    
});