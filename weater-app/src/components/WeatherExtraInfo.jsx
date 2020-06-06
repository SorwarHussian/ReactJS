import React from "react";
import WeatherTemperature from "./WeatherTemperature";

const WeatherExtraInfo = (props) => {
  const { humidity, wind } = props;
  return (
    <div>
      <p>
        <strong>
          {humidity} | {wind}
        </strong>
      </p>
      <WeatherTemperature />
    </div>
  );
};

export default WeatherExtraInfo;
