$(document).ready(function(){
    
    
    
    
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
