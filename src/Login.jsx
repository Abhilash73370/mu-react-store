import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";

export default function Login() {
  const[user,setUser] = useState({});
   const {users,} = useContext(AppContext); 
   const handleLogin = () =>{
    console.log(user)

  }
  return (
    <div>
      <h2>Login Form</h2>
      <p><input type="text"onChange={(e) => setUser({ ...users, email: e.target.value })}
          placeholder="Enter Email Address" /></p>
      <p><input type="password"onChange={(e) => setUser({ ...users, pass: e.target.value })}
          placeholder="New Password" /></p>
      <p><button onClick={handleLogin}>Login</button></p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}