import { useState } from "react";
import axios from "axios";

 // Envois les infos dans le back qui verifie les identifiant.
 const isLogged = () => {
  axios
    .post("http://localhost:3000/auth/login", {
      userName: userName,
      userPassword: userPassword,
    })
    .then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(`${response.data.userName} is connected.`);
        setToken(true)
      }
    });
};

const handleSubmit = (e) => {
  e.preventDefault();
  isLogged();
};

const Login = () => {
  // State userLogin
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Message connection
  const [loginStatus, setLoginStatus] = useState("");

  // Envois les infos dans le back qui verifie les identifiant.
  const loginExists = () => {
    axios
      .post("http://localhost:3000/auth/login", {
        userName: userName,
        userPassword: userPassword,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(`${response.data.userName} is connected.`);
        }
      });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <h4>{loginStatus}</h4>
      <div className="loginInput">
        <label>Username :</label>
        <input
          type="text"
          name="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <div className="loginInput">
        <label>Password :</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
        />
      </div>
      <div className="loginBtn">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
