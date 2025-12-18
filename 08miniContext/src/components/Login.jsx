import React from 'react'
import { useState, useContext } from 'react'
import Usercontext from '../context/Usercontext'


function Login() {

const [username, setUsername]= useState("")
const [password, setPassword]=useState("")

const {setUser} = useContext(Usercontext);

const handleSubmit=(e)=>{
  e.preventDefault();
    setUser({username, password});
  console.log("Username:", username);
  console.log("Password:", password);
}

  return (
    <div>
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username: </label>
                <input 
                  type="text" 
                  value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder='Username'
                />
            </div>
            <div>
                <label>Password: </label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder='Password'
                />
            </div>
            
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
