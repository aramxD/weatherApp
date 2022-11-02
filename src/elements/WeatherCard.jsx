import React from "react";
import styled from "styled-components";

const windDirection = {
  N: "⬆️",
  NE: "↗️",
  E: "➡️",
  SE: "↘️",
  S: "⬇️",
  SW: "↙️",
  W: "⬅️",
  NW: "↖️",
};

function WeatherCard({ className, day }) {
  return (
    <article className={className}>
      <h2>
        {day.temperature} °{day?.temperatureUnit} {day.isDaytime ? "☀️" : "🌜"}
      </h2>
      <p> {day.name} </p>

      <p>{day.startTime.substring(5, 10)} </p>
      <p>
        {" "}
        {`${day?.windSpeed} ${day?.windDirection} ${
          windDirection[day?.windDirection]
        }`}
      </p>
    </article>
  );
}

export default styled(WeatherCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid 2px black;
  border-radius: 15px;
  margin: 10px 20px;
  padding: 15px;
  width: 130px;
  text-align: center;

  :hover {
    background-color: rgba(10, 10, 10);
    color: rgba(250, 250, 250);
  }
  h2 {
    margin: 0;
  }
  h2:hover {
    font-style: italic;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
  p:nth-child(4) {
    margin: 0;
    font-size: 12px;
  }
  @media screen and (max-width: 800px) {
    width:110px;
    margin:10px;
    padding:10px
  }
  h2{
    font-size:22px
  }
   
   
  @media screen and (max-width: 450px) {
    width:100px;
    margin:8px;
    padding:5px
  }
  h2{
    font-size:20px
  }
  p{
    font-size:14px
  }
  p:nth-child(4) {
    
    font-size: 10px;
  }
`;
