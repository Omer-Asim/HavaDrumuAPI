const express = require("express");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
  var link =
    "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=40b46f4fead5a3da313c8caccc44aa5d&lang=tr";

  https.get(link, function (response) {
    response.on("data", function (gelenData) {
      var havaDurumu = JSON.parse(gelenData);

      var derece = havaDurumu.main.temp - 273;

      var durum =
        "Paris'te hava sıcaklığı " +
        Number(derece.toFixed(1)) +
        "'dır ve hava durumu " +
        havaDurumu.weather[0].main;
      res.send(durum);
    });
  });
});

app.listen(5000);
