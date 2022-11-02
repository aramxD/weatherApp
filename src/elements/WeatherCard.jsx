import React from "react";
import styled from "styled-components";


function WeatherCard({className, day}){

    return(
        <article className={className}>
         <h2>{day?.number}</h2>   
        <p>Day: {day.name}  {day.isDaytime?'☀️':'🌜'}</p>
        <p>Date: {day.startTime.substring(5,10)}</p>
        <p>Temperature: {day.temperature} C</p>
        {/* <p>Wind Speed: {`${day.windSpeed} [ ↗️ ${day.windDirection} ]`}</p> */}
        {/* <p>Forecast: {day.shortForecast}</p> */}
      </article>
    )
}

export default styled(WeatherCard)`
    
`