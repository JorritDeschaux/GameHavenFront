import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";

function Register()
{
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");

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
                <h1 className="text-center text-4xl m-4"><strong>Register</strong></h1>
                <div className="flex flex-col items-center justify-center">
                    <form className="w-full max-w-sm bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
                        <div className="flex flex-wrap -mx-3 mb-6">

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Email<span className="text-red-600">*</span>
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="text" placeholder="johndoe@gmail.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Username<span className="text-red-600">*</span>
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="text" placeholder="JohnDoe123"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                            </div>

                            <div className="w-full md:w-1/2 px-3 mb-8 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    First Name<span className="text-red-600">*</span>
                                </label>
                                    <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" placeholder="John"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                            </div>

                            <div className="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Middle Name
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="text" placeholder="the"
                                        onChange={(e) => setMiddleName(e.target.value)}
                                    />
                            </div>

                            <div className="w-full my-2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Last Name<span className="text-red-600">*</span>
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="text" placeholder="Doe"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                            </div>

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Password<span className="text-red-600">*</span>
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="password" placeholder="*****************"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                <p className="text-xs">Password should contain atleast 1 number and should be 8 characters or longer.</p>
                            </div>

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Confirm Password<span className="text-red-600">*</span>
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="password" placeholder="*****************"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                            </div>

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Birthday
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="date" placeholder="*****************"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                            </div>

                            <div className="w-full px-3 my-2">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Phone number
                                </label>

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="phone" placeholder="061234567"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                            </div>

                            <div>
                                <button className="btn btn-primary m-3">
                                    Register
                                </button>
                            </div>

                            <div>
                                <p className="text-xs m-4"><span className="text-red-600">*</span>Required</p>
                            </div>

                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Register