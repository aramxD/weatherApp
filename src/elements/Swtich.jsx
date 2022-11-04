import React from "react";
import styled from "styled-components";



function Swtich({ className, label,celsius,setCelsius }) {
     
     
    return (
      <div className={className}>
         <label htmlFor="units">{label[1]}
         <input type="checkbox"
            name="units"
            id="units"
            checked={celsius}
            onChange={() => setCelsius(!celsius)} /><span/>{label[2]}</label>
         </div>
    );
  }
  
  export default styled(Swtich)`
    
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
  
  `;