import React, { useState } from "react";
import '../../styles/signup.css'

export const Signup = () => {

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
        password: '',
        confirm_password: '',
        birth_date: ''
    });

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [birthDate, setBirthDate] = useState(undefined);

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
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
            alert("Error, el password debe coincidir.")
        }
    }

    return (
        <div className="signup-bg-image pt-5">
            <div className="signup-container-1">
                <form className="signup-container-2" onSubmit={handleSubmit}>
                    <input className="signup-input" type="text" onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" name="first_name" maxLength="50" required />
                    <input className="signup-input" type="text" onChange={(e) => handleInputChange(e)} placeholder="Last Name" name="last_name" maxLength="50" required />
                    <input className="signup-input" type="date" onChange={(e) => handleInputChange(e)} name="birth_date" required />
                    <input className="signup-input" type="email" onChange={(e) => handleInputChange(e)} placeholder="Email Address" name="email_address" maxLength="80" required />
                    <input className="signup-input" type="password" onChange={(e) => handleInputChange(e)} placeholder="Password" name="password" minLength="6" maxLength="50" required />
                    <input className="signup-input" type="password" onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" name="confirm_password" minLength="6" maxLength="50" required />
                    <button className="register-button btn btn-lg">Register</button>
                </form>
            </div >
        </div >
    )
}