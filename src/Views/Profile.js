import axios from "../Components/Axios/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../Components/Axios/Request";
import Layout from "../Components/Layout/Layout";
import VerifyUser from "../Components/VerifyUser";

function Profile()
{    

    const getUpdateInfo = () => {
        
            let userInfo = []
        
            const res = axios.get(request.updateInfo, config).then(
            res => {
                setUser(res.data)
                userInfo = res.data
            })
        }

        
    useEffect(() => {
        getUpdateInfo()
    }, [])

    const [user, setUser] = useState([])
    
    const [firstName, setFirstName] = useState(user.firstName);
    const [middleName, setMiddleName] = useState(user.middleName);
    const [lastName, setLastName] = useState(user.lastName);
    const [phone, setPhone] = useState(user.phone);
    const [birthday, setBirthday] = useState(user.birthday);

    const config = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
        
    const submitHandler = (e) => { e.preventDefault()

        const response = axios.post(request.updateInfo, {
            firstName,
            middleName,
            lastName,
            phone,
            birthday,
            }, config).catch(function(error){
                if(error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
            });
        }

    
        return(
            <>
                <Layout/>
                <div className="container">
                    <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">

                        <div className="flex flex-col-2 items-center justify-center">
                            <div>
                                <h1 className="text-center text-4xl m-8"><strong>Profile</strong></h1>
                                
                            </div>                
                        </div>


                        <div className="flex flex-col items-center justify-center">
                            <form className="w-full max-w-sm bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
                                <div className="flex flex-wrap -mx-3 mb-6">

                                    <div className="w-full px-3 my-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <label className="block tracking-wide text-gray-400 text-xs font-bold mb-2">
                                            {user.email}
                                        </label>
                                    </div>

                                    <div className="w-full px-3 my-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Username
                                        </label>
                                        <label className="block tracking-wide text-gray-400 text-xs font-bold mb-2">
                                            {user.username}
                                        </label>
                                    </div>

                                    <div className="w-full px-3 my-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            First name
                                        </label>
                                        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" placeholder={user.firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full px-3 my-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Middle name
                                        </label>
                                        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" placeholder={user.middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full px-3 my-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Last name
                                        </label>
                                        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" placeholder={user.lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>

                                    
                                    <div className="w-full px-3 my-2">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Birthday
                                    </label>

                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="date" placeholder={user.birthday}
                                            onChange={(e) => setBirthday(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full px-3 my-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Phone number
                                        </label>

                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow" type="phone" placeholder={user.phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary m-3 shadow" value="Submit" onClick={submitHandler}>
                                            Update
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </>
        )
}

export default Profile