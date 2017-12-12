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
