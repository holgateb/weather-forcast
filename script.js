var API =
  "https://api.openweathermap.org/geo/1.0/direct?q=seattle&limit=5&appid=a33c8465f73ad3b21cf598e66cd98eb0";
var searchBtn = document.getElementById("search-form");
var inputEl = document.getElementById("search-input");

//handle button clicks to fetch weather info

function getCityName(event) {
  event.preventDefault();
  //fetch the city name from the text <input>
  var cityName = document.getElementById("search-input");
  fetchGeolocation(cityName.value);
}

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
      disaplyCurrentWeather(data.current, city);
      //Display the weather data
    });
}

function disaplyCurrentWeather(currentWeather, cityName) {
  console.log(currentWeather, cityName);

  //variables for API data
  var temp = currentWeather.temp;
  var wind = currentWeather.wind_speed;
  var humidity = currentWeather.humidity;
  var uvi = currentWeather.uvi;
  var unixTS = currentWeather.dt;
  var icon = currentWeather.weather[0].icon;

  var a = new Date(unixTS * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();

  var fullDate = month + ' ' + date + ', ' + year
  //Pull temp, wind, humidity, UVI

  //create elements for the DOM
  var cityEl = document.createElement("h2");
  var windEl = document.createElement("p");
  var humEl = document.createElement("p");
  var uviEl = document.createElement("p");
  var tempEl = document.createElement("p");

  //GIVE content to elements

  //Display icon
  
  cityEl.textContent = cityName + ': ' + fullDate;
  tempEl.textContent = "Temperature: " + temp + " °F";
  windEl.textContent = "Wind: " + wind + " MPH";
  humEl.textContent = "Humidity: " + humidity + " %";
  uviEl.textContent = "UVI: " + uvi;

  document.getElementById("today").append(cityEl, tempEl, windEl, humEl, uviEl);

  

  //work on this before displayFiveDay
}

function displayFiveDay(forcast) {}

searchBtn.addEventListener("submit", getCityName);
