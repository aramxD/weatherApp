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
        {`${day?.windSpeed} [  ${day?.windDirection} ${
          windDirection[day?.windDirection]
        }]`}
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
    font-size: 14px;
  }
`;
