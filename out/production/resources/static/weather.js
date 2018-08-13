$(document).ready(function(){
    init();

});

function init(){
    enabled();


}

function enabled() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&APPID=2a1b7d0093ab43ef9902790457e79daa",
        "method": "GET",
        "dataType": "json",
        "headers": {},
        "data": "{}"
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#data").text("City: " + response.name);
        $("#data1").text("Description: " + response.weather[0].description);
        $("#data2").text("Humidity: " + response.main.humidity);
        $("#data3").text("Wind Speed: " + response.wind.speed);
        $("#data4").text("Temperature: " + response.main.temp);




    });
}
