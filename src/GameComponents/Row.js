import React, {useEffect, useState} from 'react';
import axios from "../Components/Axios/axios";
import "./Row.css";

function Row({title, fetchUrl}) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setGames(request.data);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.log(games)

    return(
        <div className="container">
            <h2>{title}</h2>

            <ul className="row">
            {games.map((game, index) => (

                        <li key={index} className="gamecard col-sm">
                            <img src="//images.igdb.com/igdb/image/upload/t_thumb/em1y2ugcwy2myuhvb9db.jpg"/>
                            <div>{game.name}</div>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default Row;