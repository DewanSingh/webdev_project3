function picturemessage(){
  alert('Look at this handsome guy!')
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.429893, lng: -119.713450 },
    zoom: 10
  });

  var pho = new google.maps.marker.AdvancedMarkerElement({
    position: { lat:34.4237643, lng:-119.705686 },
    map: map,
    title: "SB Pho",
  });

  var parkingSymbol = {
    path: google.maps.SymbolPath.CIRCLE
  };
  
  var lokum = new google.maps.marker.AdvancedMarkerElement({
    position: { lat:34.4218042, lng:-119.7052485 },
    map: map,
    title: "LOKUM",
  });

  var satellite = new google.maps.marker.AdvancedMarkerElement({
    position: { lat:34.4226202, lng:-119.7066041 },
    map,
    title: "Satellite SB",
  });
    
  var parking = new google.maps.marker.AdvancedMarkerElement({
    position: { lat:34.4214242, lng:-119.706124 },
    icon: parkingSymbol,
    map: map,
    title: "Parking",
  });
    
  const datePathCoor = [
    { lat:34.4226202, lng:-119.7066041 },
    { lat:34.4237643, lng:-119.705686 },
    { lat:34.4218042, lng:-119.7052485 },
  ];
  
  const datePath = new google.maps.Polyline({
    path: datePathCoor,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })
  
  datePath.setMap(map);
}



var dewan = document.getElementById('dewan');

dewan.addEventListener('click', picturemessage);
window.initMap = initMap;
pho.setMap(map);
lokum.setMap(map);
satellite.setMap(map);
parking.setMap(map);
google.maps.event.addDomListener(window, 'load', initMap);