// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.

var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 

if (locationIndex !== null) {
    // If a location name was specified, use it for header bar title.
    document.getElementById("headerBarTitle").textContent = locationWeatherCache.locationAtIndex[locationIndex].nickname;
    initMap();
    createWeatherTable();
}


function initMap() {
    var locationPosition = {lat: locationWeatherCache.locationAtIndex[locationIndex].latitude, lng: locationWeatherCache.locationAtIndex[locationIndex].longitude}
    
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 8,
        center: locationPosition
    });
    
    var marker = new google.maps.Marker({
        map: map,
        position: locationPosition
    });
        
    var infowindow = new google.maps.InfoWindow ({
        content: locationWeatherCache.locationAtIndex[locationIndex].nickname
    });
        
    infowindow.open(map, marker);
}

function createWeatherTable() {
    
    document.getElementById("tableHeading").innerHTML = "Weather Summary for <span>" + dateString + "</span>";

    document.getElementById("weatherIcon").innerHTML = "<img src='images/" + locationWeatherCache.locationAtIndex[locationIndex].forecasts.daily.data[0].icon + ".png' class='list-avatar mdl-list__item-icon'>";

    document.getElementById("summary").innerHTML = locationWeatherCache.locationAtIndex[locationIndex].forecasts.daily.data[0].summary;
    
    document.getElementById("minTemp").innerHTML = locationWeatherCache.locationAtIndex[locationIndex].forecasts.daily.data[0].temperatureMin;
    
    document.getElementById("maxTemp").innerHTML = LocationWeatherCache.locationAtIndex[locationIndex].forecasts.daily.data[0].temperatureMax;
    
    document.getElementById("humidity").innerHTML = locationWeatherCache.locationAtIndex[locationIndex].forecasts.daily.data[0].humidity;
    
    document.getElementById("windSpeed").innerHTML = locationWeatherCache.locationAtIndex[locationIndex].forecasts.daily.data[0].windSpeed;
}

function dateSlider(days) {
    var date = new Date();
    var milliseconds = date.getTime();
    
    milliseconds += -((30 - daysAgo) * 86400000);
    date.setTime(milliseconds);
    newSimpleDate = date.simpleDateString();
    newFormattedDate = date.forecastDateString();
}







