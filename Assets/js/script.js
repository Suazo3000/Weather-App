function getWeather() {
  var location = document.getElementById("locationInput").value;
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&units=imperial&appid=7b4222d2660e21e21f90c06976110691";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperature = data.main.temp;
      var description = data.weather[0].description;
      document.getElementById("temperature").innerHTML =
        temperature + " &#8457;";
      document.getElementById("description").innerHTML = description;
    })
    .catch(error => console.error(error));
}
