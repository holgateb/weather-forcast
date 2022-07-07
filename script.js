var API = "http://api.openweathermap.org/geo/1.0/direct?q=seattle&limit=5&appid=a33c8465f73ad3b21cf598e66cd98eb0"

//handle button clicks to fetch weather info

    //fetch the city name from the text <input>

//handle button clicks to fetch weather data

    //get the city name from the clicked buttons (event.target) data-city attribute

    //call the 'fetchgeolocation' and pass the city name

//fetch geolocation data (geocoding API)

function fetchGeolocation( cityName ) {

    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=a33c8465f73ad3b21cf598e66cd98eb0`

    fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            //access lat and long from data

            // Call fetchOneCallWeather and pass through the lat and lon
        })
}

fetchGeolocation();

//pass the geolocation to next function

//fetch weather data (onecall API)
function fetchOneCallWeather (lat, lon) {

    var lat = $("#lat-field").val();
    var lon = $("#lon-field").val();

    var request = "https://api.openweathermap.org/data/3.0/onecall?appid=a33c8465f73ad3b21cf598e66cd98eb0&lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely"
    
    fetch(request)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        //Display the weather data
    })
}

fetchOneCallWeather();
