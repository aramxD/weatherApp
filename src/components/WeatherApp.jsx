import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

  //console.log(weatherData);

  return (
    <section className={className}>
      <h1>Weather App</h1>
      <div className="cityData">
        
        <p>City: Sandiego</p>
        <p>State: CA</p>
      </div>
      
      {weatherData?.map((day)=>{
        return(<WeatherCard key={day.number} day={day}/>)
      })}
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
`;
