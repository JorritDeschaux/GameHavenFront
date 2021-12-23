import React from "react";
import Layout from "../Components/Layout/Layout";
import request from "../Components/Axios/Request";
import Row from "../GameComponents/Row";
import VerifyUser from "../Components/VerifyUser";

function Home()
{

    const user = VerifyUser()

    if(user) {
        return (
            <>
                <Layout/>
                <div className="container">
                    <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">
                        <h1 className="text-center m-4">Hello {user.username}</h1>
                        <div>

                            <Row
                                title='New and Popular'
                                fetchUrl={request.fetchRecentGamesDiscover}
                            />
                        </div>
                    </div>
                </div>
            </>

        )
    }

    return (
        <>

            <Layout/>
            <div className="container">
                <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">
                    <div>

                        <Row
                            title='New and Popular'
                            fetchUrl={request.fetchRecentGamesDiscover}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
