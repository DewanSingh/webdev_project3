function picturemessage(){
  alert('Look at this handsome guy!')
}

function dates(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:34.429893, lng:-119.713450},
    zoom: 10
  });
  
  new google.maps.Marker({
    position: {lat:34.4237643, lng:-119.705686},
    map: map,
    title: "SB Pho",
  });
  
  new google.maps.Marker({
    position: {lat:34.4218042, lng:-119.7052485},
    map: map,
    title: "LOKUM",
  });
  
  new google.maps.Marker({
    position: {lat:34.4226202, lng:-119.7066041},
    map: map,
    title: "Satellite SB",
  });
  
}

var dewan = document.getElementById('dewan');

dewan.addEventListener('click', picturemessage);
window.dates = dates;