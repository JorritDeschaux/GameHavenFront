import React from "react";
import request from "../Components/Axios/Request";
import Layout from "../Components/Layout/Layout";
import Row from "../GameComponents/Row";

function Games()
{
    return(
        <div className="homeScreen">

            <Layout/>

            <Row
                title='FOUND GAMES'
                fetchUrl={request.fetchGamesByName}
            />

        </div>
    )
}

export default Games