function picturemessage(){
  alert('Look at this handsome guy!')
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.429893, lng: -119.713450 },
    zoom: 15
  });

  var pho = new google.maps.Marker({
    position: { lat:34.4237643, lng:-119.705686 },
    map: map,
    title: "SB Pho"
  });
  var parkingSymbol = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 4
  };

  var lokum = new google.maps.Marker({
    position: { lat:34.4218042, lng:-119.7052485 },
    map: map,
    title: "LOKUM"
  });

  var satellite = new google.maps.Marker({
    position: { lat:34.4226202, lng:-119.7066041 },
    map: map,
    title: "Satellite SB"
  });

  var parking = new google.maps.Marker({
    position: { lat:34.4214242, lng:-119.706124 },
    map: map,
    icon: parkingSymbol,
    title: "Parking"
  });
    
  var datePathCoor = [
    { lat:34.4226202, lng:-119.7066041 },
    { lat:34.4237643, lng:-119.705686 },
    { lat:34.4218042, lng:-119.7052485 },
  ];
  
  var datePath = new google.maps.Polyline({
    path: datePathCoor,
    map: map,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  
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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}