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

console.log();

function LoginForm({ className }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (checkPassword(user, password)) {
      navigate("/weatherApp");
    } else {
      setError(true);
    }

    console.log(user, password);
  };
  return (
    <>
      <form className={className} onSubmit={handleLogin}>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">LogIn</button>
        <div className={`${!error && 'errorMessage'}`}>
          <h3>Error User or Password is invalid</h3>
        </div>
      </form>
    </>
  );
}

export default styled(LoginForm)`
  display: flex;
  flex-direction: column;

  .errorMessage {
    font-style: italic;
    display: none;
  }
`;
