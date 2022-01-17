import React from "react";
import Layout from "../../Components/Layout/Layout";
import VerifyUser from "../../Components/VerifyUser";
import Post from "../../ForumComponents/PostCard";

function Forum()
{

    const user = VerifyUser()

    if(user)
    {
        return(
            <>
                <Layout/>
                <div className="container">
                    <div className="rounded-lg shadow-lg mb-2 h-max flex flex-col sm:mx-8">
                        <h1 className="text-center m-4">Hello {user.username}</h1>

                        <Post/>

                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Layout/>
            <div className="container">
                <div className="rounded-lg shadow-lg mb-2 h-max flex flex-col sm:mx-8">

                    <Post/>

                </div>
            </div>
        </>
    )
}

export default Forum
