import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import City from "./City";
import MyDate from "./MyDate";
import Current from "./Current";
import Forecast from "./Forecast";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //use an object to set multiple states
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = `d84865a17de3c843a6890a1fad8ba25a`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <form className="form-inline" onSubmit={handleSubmit}>
                <input
                  className="form-control-sm"
                  type="text"
                  placeholder="Enter a city"
                  onChange={handleCity}
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  Search
                </button>
              </form>
            </div>
          </div>
          <City data={weatherData} />
          <MyDate data={weatherData} />
          <Current data={weatherData} />
          <Forecast data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}

export default Weather;
