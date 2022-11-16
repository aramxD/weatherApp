import React from "react";
import LoginForm from "../elements/LoginForm";
import styled from "styled-components";
import heroImg from "../assets/volante-hero.png";

function Login({ className }) {
  return (
    <section className={className}>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
      <div className="hero-login">
        <div className="content-login">
          <h2>Volante QuickConnect</h2>
          <p>Please login to your platform</p>
          <p>User = any name</p>
          <p>Password = same name without vowels</p>
          <LoginForm />
          <a href="/"> Forgot your password?</a>
        </div>
        <div className="loginFooter">
          <p>2022 © Volante Quick Connect, Volante Technologies Inc.</p>
        </div>
      </div>
    </section>
  );
}

export default styled(Login)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  .hero-img {
    display: grid;
    place-items: center;
    width: 50%;
    height: 100vh;
    background-color: #1a243d;
  }
  .hero-img > img {
    max-width: 500px;
    width: 100%;
  }
  .hero-login {
    width: 50%;
  }
  .content-login {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .content-login h2 {
    font-size: 24px;
  }
  a {
    text-decoration: none;
  }

  .loginFooter{
    text-align:center;
    position: absolute;
    bottom: 0;
    width:50%;
   
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;

    .hero-img {
      width: 100vw;
      height: 40%;
    }
    .hero-img > img {
      max-width: 250px;
      width: 100%;
    }
    .hero-login {
    height: 60%;
    width:100%
  }
  .loginFooter{
     
    width:100%;
   
  }
  }
`;
