import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./components/WeatherDisplay";
// import "../styles/style.css";

const API_KEY = "a01896a455ac98eb57240329f6388c43";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`/api/weather/${city}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      // Handle error message to user
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!city) return;
    getWeather(city);
    setCity("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
        />
        <button type="submit">Get weather</button>
      </form>
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default App;
