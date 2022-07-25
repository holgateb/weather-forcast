var API =
  "https://api.openweathermap.org/geo/1.0/direct?q=seattle&limit=5&appid=a33c8465f73ad3b21cf598e66cd98eb0";
var searchBtn = document.getElementById("#search-button");
var inputEl = document.getElementById("#search-input");

//handle button clicks to fetch weather info

function getCityName(event) {
  event.preventDefault();
  //fetch the city name from the text <input>
  var cityName = document.getElementById("search-input");
  fetchGeolocation(cityName.value);
}

//handle button clicks to fetch weather data

var buttonClickHandler = function (event) {

//get the city name from the clicked buttons (event.target) data-city attribute

var city = event.target.getAttribute('data-city');

//call the 'fetchgeolocation' and pass the city name

fetchGeolocation(city);

};

//fetch geolocation data (geocoding API)

function fetchGeolocation(city) {
  var request = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=a33c8465f73ad3b21cf598e66cd98eb0`;

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //access lat and long from data
      fetchOneCallWeather(data[0].lat, data[0].lon, data[0].name);
      // Call fetchOneCallWeather and pass through the lat and lon
    });
}

//pass the geolocation to next function

//fetch weather data (onecall API)
function fetchOneCallWeather(lat, lon, city) {
  var request = `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=a33c8465f73ad3b21cf598e66cd98eb0`;

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      disaplyCurrentWeather(data.current, city);
      //Display the weather data
    });
}

function disaplyCurrentWeather(currentWeather, cityName) {
    console.log(currentWeather, cityName)

    //work on this before displayFiveDay
}

function displayFiveDay(forcast) {

}

searchBtn.addEventListener("submit", getCityName);
