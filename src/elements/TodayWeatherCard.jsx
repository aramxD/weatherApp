import React from "react";
import styled from "styled-components";


const windDirection={
    'N':'⬆️',
    'NE':'↗️',
    'E':'➡️',
    'SE':'↘️',
    'S':'⬇️',
    'SW':'↙️',
    'W':'⬅️',
    'NW':'↖️',

}


function TodayWeatherCard({className, day}){

    return(
        <article className={className}>
         <h2>{day?.number}</h2>   
        <p>Day: {day?.name}  {day?.isDaytime?'☀️':'🌜'}</p>
        <p>Date: {day?.startTime.substring(5,10)}</p>
        <p>Temperature: {day?.temperature} °{day?.temperatureUnit}</p>
        <p>Wind Speed: {`${day?.windSpeed} [ ${windDirection[day?.windDirection]} ${day?.windDirection} ]`}</p>
        <p>Forecast: {day?.shortForecast}</p>
      </article>
    )
}

export default styled(TodayWeatherCard)`
    
`