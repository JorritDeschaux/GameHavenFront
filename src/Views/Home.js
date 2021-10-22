import React, {useState} from "react";
import Layout from "../Components/Layout/Layout";

function Home()
{
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <div>
            <Layout/>
            <div>
                <input type="text" placeholder="Search Game..." style={{marginTop: 5}}
                       onChange={event => {
                           setSearchTerm(event.target.value)}}
                />
            </div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home