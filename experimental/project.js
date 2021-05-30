$( document ).ready( function() {


  /*
   * VIDEO functionality
   */
      // Expand or contract deeper project info
      $('.project-thumb').click( function(e) {
        // Prevent normal click
        // e.preventDefault();
        var current_projectname = $( this ).data('projectname');

        // Turn off all other projects
        $('.infodeep').hide();
        $('.project-thumb').removeClass('active');

        // Switch on ours
        $('#project-' + current_projectname).show();
        $( this ).addClass('active');
      });

      // Add 'Back' button which contracts the info
      // Without necessarily showing another project
      $('.infodeep-close').click( function(e) {
        e.preventDefault();
        // Turn off all other projects
        $('.infodeep').hide();
        $('.project-thumb').removeClass('active');
      });




});
