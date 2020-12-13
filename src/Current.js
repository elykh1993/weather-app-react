import "./Current.css";
import WeatherIcon from "./WeatherIcon";

export default function Current(props) {
  let current = {
    temp: 75,
    description: "Mostly Cloudy",
    humidity: 10,
    wind: "NE 8",
  };
  return (
    <div className="Current">
      <div className="row current">
        <div className="col-6">
          <div className="current-temp">
            <ul className="current-list">
              <li>
                <WeatherIcon code={props.data.icon} />
                <span className="temp-display">{current.temp}°F</span>
              </li>
              <li className="change-temp">
                <a href="/" className="farenheit">
                  {" "}
                  °F{" "}
                </a>{" "}
                |
                <a href="/" className="celsius">
                  {" "}
                  °C
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul className="current-details">
            <li className="current-description">{props.data.description} </li>
            <li>
              Humidity{" "}
              <span className="current-humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind <span className="current-wind">{props.data.wind}mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
