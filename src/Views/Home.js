import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import request from "../Components/Axios/Request";
import Row from "../GameComponents/Row";
import {Footer} from "../Components/Layout/Footer";

function Home()
{
    return(
        <>
            <Layout/>
                <div className="container">
                    <h1>Home Page</h1>
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