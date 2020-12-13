import "./Current.css";
import WeatherIcon from "./WeatherIcon";
import TempUnit from "./TempUnit";

export default function Current(props) {
  return (
    <div className="Current">
      <div className="row current">
        <div className="col-6">
          <div className="current-temp">
            <ul className="current-list">
              <li className="Current-Icon">
                <WeatherIcon code={props.data.icon} />
              </li>
              <TempUnit temp={props.data.temperature} />
              {/* <li className="change-temp">
                <a href="/" className="farenheit">
                  {" "}
                  °F{" "}
                </a>{" "}
                |
                <a href="/" className="celsius">
                  {" "}
                  °C
                </a>
              </li> */}
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
