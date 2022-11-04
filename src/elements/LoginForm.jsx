import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function checkPassword(user, password) {
  //This is the user password
  const userPassword = password.toLowerCase();
  //This should be the user password
  const superPassword = user.toLowerCase().replace(/[aeiou]/g, "");

  if (userPassword === superPassword) {
    return true;
  } else {
    return false;
  }
}



function LoginForm({ className }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (checkPassword(user, password)) {
      navigate("/weather");
    } else {
      setError(true);
    }

    
  };
  return (
    <>
      <form className={className} onSubmit={handleLogin}>
        <div className="inputForm">
          <i className="bx bxs-user"></i>
          <input
            placeholder={`Username`}
            type="text"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="inputForm">
          <i className="bx bx-key"></i>
          <input
            placeholder={`Password`}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">LOGIN</button>
        <div className={`${!error && "errorMessage"}`}>
          <h3> Error User or Password is invalid</h3>
        </div>
      </form>
    </>
  );
}

export default styled(LoginForm)`
  display: flex;
  flex-direction: column;

  input,
  input:focus,
  input:hover {
    margin: 10px 0;
    padding:0 5px;
    border: none;
    background-color: #e7ebf3;
    height: 25px;
    width: 90%;
    color: #424242;
  }

  i {
    font-size: 25px;
    color: #424242;
    margin-left:5px;
  }
  .inputForm {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* border:2px solid black; */
    border-radius: 5px;
    background-color: #e7ebf3;
    margin: 10px 0;
  }
  button {
    height: 45px;
    margin: 10px 0;
    color: white;
    background-color: #153a78;
    border-radius: 5px;
  }
 

  .errorMessage {
    font-style: italic;
    display: none;
  }
`;
