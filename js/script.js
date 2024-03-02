function picturemessage(){
  alert('Look at this handsome guy!')
}

function initMap(){
  alert('it works');
}

var dewan = document.getElementById('dewan');

dewan.addEventListener('click', picturemessage);
google.maps.event.addDomListener(window, 'load', initMap);