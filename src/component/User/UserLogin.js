import React, { useState } from 'react';

import UserCard from './UserCard'

import './UserLogin.css';

const UserLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        email === "wildify@gmail.com" && password === "wild"
            ? setToken(1)
            : alert("The email address or password you entered is invalid !")
    }

    return (
        <div className="loginWrapper">
            {!token
            ?  <form onSubmit={handleSubmit}>
                <div className = "loginInput">
                    <label>Username :</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className = "loginInput">
                    <label>Password :</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div className = "loginBtn">
                    <button type="submit">Login</button>
                </div>
            </form>
            : <UserCard />
            }
        </div>
    );
}

export default UserLogin;
