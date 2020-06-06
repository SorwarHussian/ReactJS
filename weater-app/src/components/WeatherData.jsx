import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import Location from "./Location";

const WeatherData = () => {
  return (
    <div className="bg-light border border-primary p-2">
      <Location city='Barcelona'  country='Spain'/>
      <WeatherExtraInfo />
    </div>
  );
};

export default WeatherData;
