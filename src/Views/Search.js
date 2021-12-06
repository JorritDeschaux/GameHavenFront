import React from "react";
import request from "../Components/Axios/Request";
import Layout from "../Components/Layout/Layout";
import Row from "../GameComponents/Row";

function Search()
{
    return(
        <>

            <Layout/>

            <Row
                title='Search Results'
                fetchUrl={request.fetchGamesByName}
            />
        </>
    )
}

export default Search