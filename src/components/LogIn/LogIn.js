import React, { useState } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import './LogIn.scss';
import "../Flights/Flights";
import UserIcon from "../../images/user.png";


function LogIn (){
  return (

    <div className="login-icon">
      <Link exact path="/"></Link>
      <Link to="/contact"><img id="user" src={UserIcon} width="50px" alt="user"/></Link>
    </div>
  )
}

export default LogIn;

