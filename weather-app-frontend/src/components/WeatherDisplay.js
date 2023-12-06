import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { city, temperature, icon, description } = weatherData;
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{city}</h2>
      <img src={imageUrl} alt="Weather icon" />
      <h3>{temperature}°C</h3>
      <p>{description}</p>
    </div>
  );
};

export default WeatherDisplay;
