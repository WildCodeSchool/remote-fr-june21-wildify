import axios from "axios";
import { useState } from "react";

const Signin = () => {
  // State userRegistration
  const [userNameReg, setUserNameReg] = useState("");
  const [userEmailReg, setUserEmailReg] = useState("");
  const [userPasswordReg, setUserPasswordReg] = useState("");

  // Envoi les infos dans le back
  const signin = () => {
    axios
      .post("http://localhost:3000/auth/signin", {
        userName: userNameReg,
        userEmail: userEmailReg,
        userPassword: userPasswordReg,
      })
      .then((response) => console.log(response));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signin();
      }}
    >
      <div className="loginInput">
        <label>Username :</label>
        <input
          type="text"
          name="text"
          onChange={(e) => setUserNameReg(e.target.value)}
          value={userNameReg}
        />
      </div>
      <div className="loginInput">
        <label>UserEmail :</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setUserEmailReg(e.target.value)}
          value={userEmailReg}
        />
      </div>
      <div className="loginInput">
        <label>Password :</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setUserPasswordReg(e.target.value)}
          value={userPasswordReg}
        />
      </div>
      <div className="loginBtn">
        <button type="submit">Signin</button>
      </div>
    </form>
  );
};

export default Signin;
