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
         <h2>{day?.name}  {'----->'} {day?.temperature} °{day?.temperatureUnit} <span className="dayIcon">{day?.isDaytime?'☀️':'🌜'}</span></h2>   
        
        {/* <p>Day: {day?.name}  </p> */}
        <h3>{day?.startTime.substring(5,10)}</h3>
        
        <p>Wind Speed: {`${day?.windSpeed} [ ${windDirection[day?.windDirection]} ${day?.windDirection} ]`}</p>
        <p>Forecast: {day?.detailedForecast}</p>
      </article>
    )
}

export default styled(TodayWeatherCard)`
    width:40vw;
    
    .dayIcon{
        font-size:40px;
    }
    
`