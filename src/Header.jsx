import React, { use, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AppContext } from "./App";
export default function Header({ name }) {
  const {email} = useContext(AppContext); 
  
  return (
    <div className="App-Header-Row" style={{ backgroundColor: "pink" }}>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {email ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/cart"></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}