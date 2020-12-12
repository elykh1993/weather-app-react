import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
// import Search from "./Search";
// import City from "./City";
import MyDate from "./MyDate";
// import WeatherInfo from "./WeatherInfo";
// import Current from "./Current";
// import Forecast from "./Forecast";
// import Author from "./Author";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    //use an object to set multiple states
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      //icon:
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          {/* <Search />
          <City /> */}
          <MyDate data={weatherData} />
          {/* <Date data={weatherData} /> */}
          {/* <Current />
          <Forecast /> */}
        </div>
      </div>
    );
  } else {
    const apiKey = `35752ea57c3f31dae01153f9ca0e9ecf`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse).then();
    return "loading...";
  }
}

export default Weather;
