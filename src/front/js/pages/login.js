import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        const login = await actions.login(email, password)
        console.log(login)
        if (login) {
            navigate("/")
        };
    }



    return (
        <div className="login-bg-image pt-5">

            <div className="login-container-1">
                <div className="login-container-2">
                    <input className="login-input mb-4" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="email" required autoComplete="on"></input>
                    <input className="login-input mb-5" onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required autoComplete="on"></input>
                    <button className="login-button btn btn-lg mb-4" onClick={handleClick}>Login</button><br />
                    <span className="mb-1">Don't have an account?</span>
                    <Link to="/signup">
                        <button className="signup-button btn btn-lg" >Sign up</button>
                    </Link>
                </div>
            </div>
        </div >

    );

};
