$(document).ready(function(){
    
    //for way point sticky nav
    $('.js--section-bio').waypoint(function(direction){
       if(direction == "down"){
           $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
       } 
    },{
        offset: '60px'
    });
    
    //Scorll on buttons
    $('.js--scroll-to-bio').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-bio').offset().top},1000); 
    });
    
    //Nav scrolling animation
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    
    
    
    
    
    
    
    //For contact map
    var map = new GMaps({
      div: '.map',
      lat: 41.2227041,
      lng: -111.9,
      zoom:11
    });
    
    map.addMarker({
      lat: 41.2227041,
      lng: -111.95,
      title: 'Ogden',
      infoWindow: {
          content: '<p>I am in Ogden</p>'
        }
    });
    
});
