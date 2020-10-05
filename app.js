const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", function (req, res) {
  const apiKey = "ea4e57b793a9bf9af73dd2c8c4d867fa";
  const cityName = req.body.cityName;
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  https.get(url, function (response, err) {
    if (err) {
      console.log(err);
    } else {
      console.log(response.statusCode);
    }

    response.on("data", function (data) {

      const JSONData = JSON.parse(data);

      if ( response.statusCode === 200) {
        
        const temp = JSONData.main.temp;
        const Wdescription = JSONData.weather[0].description;
        const icon = JSONData.weather[0].icon;
        const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        const id = JSONData.weather[0].id;

        res.render("res", {
          name: cityName,
          temp: temp,
          Wdescription: Wdescription,
          icon: iconURL,
          ic: id,
        });
      } else {
        res.render('error')
      }
    });
  });
});

app.post("/post", function (req, res) {
  res.redirect("/");
});

app.listen( process.env.PORT || 1609, function () {
  console.log("working 1609");
});

// ea4e57b793a9bf9af73dd2c8c4d867fa
