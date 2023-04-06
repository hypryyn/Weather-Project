const express = require("express");
const https = require("https");

const app = express();


app.get("/", function (req, res) {

    let city = "Tumpang"
    const APIkey = "505481f86e7738cdb25b64968517079b"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIkey

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherDescription);
            console.log(temp);
        })
    })

    res.send("Server is up and running.")
})










app.listen(3000, function () {
    console.log("Server is running on port 3000")
})