var APIkey = "73761c0b9996cb9b9d5264d11876f11a"
var city = 'Loma Linda'
var searchInput = document.querySelector("#searchInput")
var searchBtn =document.querySelector(("#searchBtn"))


searchBtn.addEventListener('click', function(){
    city = searchInput.value
    console.log(city)
})




var lat
var lon

var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIkey;

function fetchgeo(){
    fetch(geoURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        lat = data[0].lat;
        console.log(lat)
        lon = data[0].lon;
        console.log(lon)
    });
}
var weatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey + "&units=imperial";

fetch(weatherURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });