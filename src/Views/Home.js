import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";
import request from "../Components/Axios/Request";
import Row from "../GameComponents/Row";

function Home()
{
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <>
            <Layout/>
        <div className="container">
            <h1>Home Page</h1>
            <div>
                <input type="text" placeholder="Search Game..." style={{marginTop: 5}}
                       onChange={event => {
                           setSearchTerm(event.target.value)}}
                />

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