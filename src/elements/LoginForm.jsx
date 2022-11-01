import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


function checkPassword(user, password){
 
  
  //This is the user password 
  const userPassword = password.toLowerCase()
  //This should be the user password
  const superPassword = user.toLowerCase().replace(/[aeiou]/g, '')

  if(userPassword===superPassword){
    return true
  }else{
    return false
  }

   
}

console.log(checkPassword('Aram','arm'))

function LoginForm( {className}) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate =useNavigate()



  const handleLogin = (event)=>{
    event.preventDefault()
    console.log(user, password)
    //navigate('/weatherApp')
  }
  return (
    <form className={className} onSubmit={handleLogin}>
        <input 
        type="text" 
        name='user'
        value={user}
        onChange={(e) => setUser(e.target.value)}/>

        <input 
        type="text" 
        name='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        
        <button type='submit'>LogIn</button>
    </form>
    
  )
}

export default styled(LoginForm)`
    display:flex;
    flex-direction:column;
    
`