import React, { useState } from "react";
import axios from "axios";

import Login from "./Login";
import Signin from "./Signin";
import UserCard from "./UserCard";

import "./UserLogin.css";

const UserLogin = () => {

  // State userLogin
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [token, setToken] = useState(false);

  // Message connection
  const [loginStatus, setLoginStatus] = useState("");


  console.log(token)

  return (
    <div className="loginWrapper">
      {!token
        ? <Login />
        : <UserCard userName={userName} userPassword={userPassword}/>
      }
    </div>
  );
};

export default UserLogin;
