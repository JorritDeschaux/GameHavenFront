import React from "react";
import Layout from "../Components/Layout/Layout";
import request from "../Components/Axios/Request";
import Row from "../GameComponents/Row";

function Top100()
{

    return (
        <>

            <Layout/>
            <div className="container">
                <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">
                    <div>

                        <Row
                            title='Top 100'
                            fetchUrl={request.fetchTop100}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Top100
