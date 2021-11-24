import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";
import css from "./Styles/Login.css"

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
        })}

    return(
        <>
            <Layout/>
            <div className="container center">
                <h1 className="center-greeting">Login</h1>
                <div className="grid">
                    <form>
                        <div class="form-group">
                            <label>
                                Email:
                                <input type="text" className="form-control" name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label>
                                Password:
                                <input type="password" className="form-control" name="password"
                                       onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary" value="Submit" onClick={submitHandler}>
                                Login
                        </button>


                    </form>
                </div>

            </div>

        </>
    )
}

export default Login