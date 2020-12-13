import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row forecast justify-content-center">
        <div className="col-2">
          <h5>Sun</h5>
          <img
            className="forecast-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sun"
          />
          <span className="forecast-temp">
            <strong>80°</strong>
            <small>/57°</small>
          </span>
        </div>
        <div className="col-2">
          <h5>Mon</h5>
          <img
            className="forecast-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="part cloud"
          />
          <span className="forecast-temp">
            <strong>60°</strong>
            <small>/47°</small>
          </span>
        </div>
        <div className="col-2">
          <h5>Tues</h5>
          <img
            className="forecast-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/rain_s_sunny.png"
            alt="sun with rain"
          />
          <span className="forecast-temp">
            <strong>75°</strong>
            <small>/67°</small>
          </span>
        </div>
        <div className="col-2">
          <h5>Wed</h5>
          <img
            className="forecast-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sun"
          />
          <span className="forecast-temp">
            <strong>70°</strong>
            <small>/59°</small>
          </span>
        </div>
        <div className="col-2">
          <h5>Thurs</h5>
          <img
            className="forecast-icon"
            src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
            alt="fog"
          />
          <span className="forecast-temp">
            <strong>67°</strong>
            <small>/38°</small>
          </span>
        </div>
      </div>
    </div>
  );
}
