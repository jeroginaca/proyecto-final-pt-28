import React, { useContext, useState } from "react";
import '../../styles/signup.css'
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" value={firstName} onChange={(e) => handleInputChange(e)} type="text" id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" value={lastName} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="LastName" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" value={password} onChange={(e) => handleInputChange(e)} type="password" id="password" placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" value={confirmPassword} onChange={(e) => handleInputChange(e)} type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>
    )
}