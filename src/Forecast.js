import axios from "axios";
import { useState } from "react";
import "./Forecast.css";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.data.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastInfo data={forecast.list[0]} />
        <ForecastInfo data={forecast.list[1]} />
        <ForecastInfo data={forecast.list[2]} />
        <ForecastInfo data={forecast.list[3]} />
        <ForecastInfo data={forecast.list[4]} />
        <ForecastInfo data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "d84865a17de3c843a6890a1fad8ba25a";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
