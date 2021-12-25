import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";
import '../styles/main.css'

function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {e.preventDefault()
        axios.post('/auth/login', {
        email: email,
        password
    })
        .then(token => {

            try{
                console.log(token)
                localStorage.setItem('token', token.data)
                localStorage.setItem('loggedIn', "true")
                window.location = "/"
            }
            catch (e) {
                console.log(e)
            }
        })}

    return(
        <>
            <Layout/>
            <div className="container">
                <h1 className="text-center text-4xl m-4"><strong>Login</strong></h1>
                <div className="flex flex-col items-center justify-center">
                    <form className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
                        <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Password
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                            </div>

                        <button type="submit" className="btn btn-primary m-3" value="Submit" onClick={submitHandler}>
                                Login
                        </button>


                    </form>
                </div>

            </div>

        </>
    )
}

export default Login