import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";

function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {e.preventDefault()
        axios.post('/auth/login', {
        mail: email,
        password
    })
        .then(token => {
            console.log(token)
            localStorage.setItem('token', token.data)
            localStorage.setItem('loggedIn', 'true')
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