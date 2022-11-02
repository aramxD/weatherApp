import React from "react";
import styled from "styled-components";


function TodayWeatherCard({className, day}){

    return(
        <article className={className}>
        <h3>{day.name}  {day.isDaytime?'☀️':'🌜'}</h3>  
         
        <p>Date: {day.startTime.substring(5,10)}</p>
        <p>Temperature: {day.temperature} C</p>
        <p>Wind Speed: {`${day.windSpeed} [ ↗️ ${day.windDirection} ]`}</p>
        <p>Forecast: {day.shortForecast}</p>
      </article>
    )
}

export default styled(TodayWeatherCard)`
    
`