import "./Current.css";
export default function Current() {
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
            <ul id="current-list">
              <li>
                <img
                  id="current-icon"
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="sun"
                />
                <span id="temp-display">{current.temp}°F</span>
              </li>
              <li id="change-temp">
                <a href="/" id="farenheit">
                  {" "}
                  °F{" "}
                </a>{" "}
                |
                <a href="/" id="celsius">
                  °C
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul id="current-details">
            <li id="current-description">{current.description} 🌥</li>
            <li>
              Humidity <span id="current-humidity">{current.humidity}</span>%
            </li>
            <li>
              Wind <span id="current-wind">{current.wind}mph</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
