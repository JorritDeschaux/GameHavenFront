import React from 'react'
import Layout from "../Components/Layout/Layout";

function Logout()
{
    localStorage.clear()
    window.location = "/"

    return(
        <>
            <Layout/>
        </>
    )
}

export default Logout;