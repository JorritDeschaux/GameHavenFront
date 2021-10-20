import React, {useEffect, useState} from "react";
import Axios from "axios"
import Layout from "../Components/Layout/Layout";

function Games()
{
    const url = "/api/Games/GetGamesByName?gameName=Portal"
    const [game, setGame] = useState(null)

    useEffect(() =>{
        Axios.get(url)
            .then(response => {
            setGame(response.data)
        })
    }, [url])

    console.log(game)

    if(game)
    {
        return(
<>
            <Layout />
                <div className="row">
                    {game.value.map(g => (

                            <div className="col-sm-3">
                                <h1>{g.name}</h1>
                                <strong>{g.rating}</strong><br/>
                                <cite>{g.summary}</cite>
                            </div>

                    ))}
                </div>
</>
        )
    }

    return(
        <div>

        </div>
    )
}

export default Games