import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodayWeatherCard from "../elements/TodayWeatherCard";
import WeatherCard from "../elements/WeatherCard";

function WeatherApp({ className }) {
  const [weatherData, setWeatherData] = useState([]);

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

  const todayData = weatherData[0]
  const tonightData = weatherData[1]
  const nextFiveDayData = [...weatherData].splice(2,10) 
   

  console.log(todayData)


  return (
    <section className={className}>
      <h1>Weather App</h1>
      <div className="cityData">
        <p>City: Sandiego</p>
        <p>State: CA</p>
      </div>
      <div className="todayWeather">
        
        {todayData?<TodayWeatherCard day={todayData}/>:null}
        
        <TodayWeatherCard day={tonightData}/>
      </div>
      <div className="weatherData">
      {nextFiveDayData?.map((day) => {
        return <WeatherCard key={day.number} day={day} />;
      })}
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

  .cityData {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
  .todayWeather{
    display: flex;
    justify-content: space-evenly;
    width: 80%;
  }
  .weatherData{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center
  }
`;
