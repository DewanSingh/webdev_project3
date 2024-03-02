function picturemessage(){
  alert('Look at this handsome guy!')
}

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:34.429893, lng:-119.713450},
    zoom: 10
  });

  new google.maps.marker.AdvancedMarkerElement({
    position: {lat:34.4237643, lng:-119.705686},
    map,
    title: "SB Pho",
  });

  new google.maps.marker.AdvancedMarkerElement({
    position: {lat:34.4218042, lng:-119.7052485},
    map,
    title: "LOKUM",
  });

  new google.maps.marker.AdvancedMarkerElement({
    position: {lat:34.4226202, lng:-119.7066041},
    map,
    title: "Satellite SB",
  });
}

var dewan = document.getElementById('dewan');

dewan.addEventListener('click', picturemessage);
google.maps.event.addDomListener(window, 'load', initMap);