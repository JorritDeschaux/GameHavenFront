import React, {useEffect, useState} from "react";
import Axios from "axios"

function Product()
{
    const url = "http://localhost:49153/api/Game/GetGamesByName?gameName=Pokemon Unite"
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
            <div>

            </div>
        )
    }

    return(
        <div>

        </div>
    )
}

export default Product