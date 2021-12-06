import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";

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