import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodayWeatherCard from "../elements/TodayWeatherCard";
import WeatherCard from "../elements/WeatherCard";

function WeatherApp({ className }) {
  const [weatherData, setWeatherData] = useState([]);

  const [celsius, setCelsius] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.weather.gov/gridpoints/SGX/59,19/forecast?units=si"
      );
      const data = await response.json();
      setWeatherData(data.properties.periods);
    }
    fetchData();
  }, []);

  const weatherDataF = [];
  JSON.parse(JSON.stringify(weatherData)).forEach((day) => {
    day.temperatureUnit = "F";

    day.temperature = (day.temperature * 1.8 + 32).toFixed(2);

    weatherDataF.push(day);
  });

  // Datos en Celsius
  const todayData = weatherData.find((day) => day.name === "Today");
  const tonightData = weatherData.find((day) => day.name === "Tonight");
  const nextFiveDayData = [...weatherData].splice(2, 10);

  // Datos en Farenheit
  const todayDataF = weatherDataF.find((day) => day.name === "Today");
  const tonightDataF = weatherDataF.find((day) => day.name === "Tonight");
  const nextFiveDayDataF = [...weatherDataF].splice(2, 10);

  return (
    <section className={className}>
      <div className="toogleUnits">
        <label htmlFor="units">
          C
          <input
            type="checkbox"
            name="units"
            id="units"
            checked={celsius}
            onChange={() => setCelsius(!celsius)}
          />
          F
        </label>
      </div>

      <h1>Weather App</h1>

      <div className="cityData">
        <p>City: Sandiego</p>
        <p>State: CA</p>
      </div>

      <div className="todayWeather">
        {celsius && todayData ? <TodayWeatherCard day={todayData} /> : null}
        {celsius && tonightData ? <TodayWeatherCard day={tonightData} /> : null}
        {!celsius && todayData ? <TodayWeatherCard day={todayDataF} /> : null}
        {!celsius && tonightData ? (
          <TodayWeatherCard day={tonightDataF} />
        ) : null}
      </div>

      <div className="weatherData">
        {celsius
          ? nextFiveDayData?.map((day) => {
              return <WeatherCard key={day.number} day={day} />;
            })
          : null}
        {!celsius
          ? nextFiveDayDataF?.map((day) => {
              return <WeatherCard key={day.number} day={day} />;
            })
          : null}
      </div>
    </section>
  );
}

export default styled(WeatherApp)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .toogleUnits {
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
  }
  .cityData {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
  .todayWeather {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
  .weatherData {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
