import React, { useContext, useState } from "react";
import '../../styles/signup.css'
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";

export const Signup = () => {

    // https://3001-jeroginaca-proyectofina-8snowwfk7z4.ws-eu81.gitpod.io/api/signup

    const [data, setData] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDate, setBirthDate] = useState(undefined);

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
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
        if (id === "birth_date") {
            setBirthDate(value);
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.password === data.confirm_password) {
            console.log(data)
            fetch(process.env.BACKEND_URL + "/api/signup",
                {
                    method: "POST",

                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    console.log(response)
                })
        }
        else {
            console.log("error el password no es igual")
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" htmlFor="firstName">First Name </label>
                        <input className="form__input" value={firstName} onChange={(e) => handleInputChange(e)} type="text" id="firstName" placeholder="First Name" name="first_name" />
                    </div>
                    <div className="lastname">
                        <label className="form__label" htmlFor="lastName">Last Name </label>
                        <input type="text" id="lastName" value={lastName} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Last Name" name="last_name" />
                    </div>
                    <div className="birthdate">
                        <label htmlFor="birth_date">Birth Date:</label>
                        <input type="date" id="birth_date" onChange={(e) => handleInputChange(e)} value={birthDate} name="birth_date" />
                    </div>
                    <div className="email">
                        <label className="form__label" htmlFor="email">Email </label>
                        <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Email" name="email_address" />
                    </div>
                    <div className="password">
                        <label className="form__label" htmlFor="password">Password </label>
                        <input className="form__input" value={password} onChange={(e) => handleInputChange(e)} type="password" id="password" placeholder="Password" name="password" />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                        <input className="form__input" value={confirmPassword} onChange={(e) => handleInputChange(e)} type="password" id="confirmPassword" placeholder="Confirm Password" name="confirm_password" />
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    )
}