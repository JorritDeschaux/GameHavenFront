import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import request from "../Components/Axios/Request";
import axios from "../Components/Axios/axios";
import Cookie from "js-cookie"
import {Badge} from "react-bootstrap";

function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {e.preventDefault()
        axios.post('http://localhost:5000/api/Authentication/Login', {
        mail: email,
        password
    })
        .then(token => {
            console.log(token)
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('loggedIn', 'true')
        })}

    return(
        <>
            <Layout/>
            <div className="container">
                <h1>Login</h1>
                <div>
                    <form>
                        <label>
                            Email:
                            <input type="text" name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            Password:
                            <input type="text" name="password"
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button type="submit" value="Submit" onClick={submitHandler}>
                                Submit
                        </button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Login