import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";
import VerifyUser from "../Components/VerifyUser";
import {Redirect} from "react-router";

function Profile()
{

    if(localStorage.getItem("loggedIn") !== "true")
    {
        return (
            window.location.href = "/login"
        )
    }

    return(
        <>
            <Layout/>
            <div className="container center">
                <h1 className="center-greeting">Profile</h1>
                <div className="grid">
                    <form>


                    </form>
                </div>

            </div>

        </>
    )
}

export default Profile