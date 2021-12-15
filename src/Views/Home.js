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
                    <h2 className="center-greeting">Hello {user.username}</h2>
                    <div>

                        <Row
                            title='New and Popular'
                            fetchUrl={request.fetchRecentGamesDiscover}
                        />
                    </div>

                </div>
            </>

        )
    }

    return (
        <>

            <Layout/>
            <div className="container">
                <div>

                    <Row
                        title='New and Popular'
                        fetchUrl={request.fetchRecentGamesDiscover}
                    />
                </div>

            </div>

        </>
    )
}

export default Home
