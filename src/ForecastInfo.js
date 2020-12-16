import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastInfo(props) {
  function showForecastHour() {
    let time = new Date(props.data.dt * 1000);
    let hours = time.getHours();
    return `${hours}:00`;
  }

  function showForecastTemp() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}°F`;
  }

  return (
    <div className="ForecastInfo">
      <h5>{showForecastHour()}</h5>
      <WeatherIcon code={props.data.weather[0].icon} />
      <br />
      <span className="forecast-temp">
        <strong>{showForecastTemp()}</strong>
      </span>
    </div>
  );
}
