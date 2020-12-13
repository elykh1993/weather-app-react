import { useState } from "react";

export default function TempUnit(props) {
  const [temp, setTemp] = useState(props.temp);
  const [unit, setUnit] = useState("°F");

  function showCelsius(event) {
    event.preventDefault();
    let celsius = Math.round(((props.temp - 32) * 5) / 9);
    setTemp(celsius);
    setUnit("°C");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setTemp(props.temp);
    setUnit("°F");
  }

  return (
    <div className="TempUnit">
      <span className="temp-display">
        {temp}
        {unit}
      </span>
      <li className="change-temp">
        <a href="/" onClick={showFarenheit} className="farenheit">
          {" "}
          °F{" "}
        </a>{" "}
        |
        <a href="/" onClick={showCelsius} className="celsius">
          {" "}
          °C
        </a>
      </li>
    </div>
  );
}
