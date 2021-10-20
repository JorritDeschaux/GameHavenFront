import React, {useEffect, useState} from "react";
import Axios from "axios"

function Product()
{
    const url = "/api/Games/GetGamesByName?gameName=Pokemon"
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
            <div className="container">
                {game.value.map(g => (
                    <ol>
                        <h1>{g.name}</h1>
                            <strong>{g.rating}</strong><br/>
                        <cite>{g.summary}</cite>
                    </ol>
                ))}
            </div>
        )
    }

    return(
        <div>

        </div>
    )
}

export default Product