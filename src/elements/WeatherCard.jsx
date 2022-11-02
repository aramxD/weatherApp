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

function WeatherCard({className, day}){

    return(
        <article className={className}>
         <h2>{day?.number}</h2>   
        <p>{day.startTime.substring(5,10)} <span>{day.name} </span></p>
         
        <p>{day.temperature} °{day?.temperatureUnit} {day.isDaytime?'☀️':'🌜'} </p>
        <p> {`${day?.windSpeed} [  ${day?.windDirection} ${windDirection[day?.windDirection]}]`}</p>
        
      </article>
    )
}

export default styled(WeatherCard)`
    
    p{
      margin:0;
    }
`