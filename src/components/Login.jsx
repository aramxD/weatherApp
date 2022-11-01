import React from 'react'
import LoginForm from '../elements/LoginForm'
import styled from 'styled-components'
import heroImg from '../assets/volante-hero.png'



function Login({className}) {




  return (
    <section className={className}>
        <div className="hero-img">
            <img src={heroImg} alt="" />
        </div>
        <div className="hero-login">
            <h2>Volante QuickConnect</h2>
            <p>Please login to your platform</p>
            <LoginForm/>
            <a href="/"> Forgot your password?</a>
        </div>
    </section>
    
  )
}

export default styled(Login)`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-evenly;
    height:100vh;

    .hero-img{
        display: grid;
    place-items: center;
        width:55%;
        background-color:#1A243D;
        
    }
    .hero-img>img{
        max-width:500px;
        width:100%;
        
    }
    .hero-login{
        width:40%;
    }

`