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
}

var dewan = document.getElementById('dewan');

dewan.addEventListener('click', picturemessage);
window.dates = dates;