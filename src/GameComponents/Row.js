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

                        <li key={index} className="gamecard">
                             <div className= "col-sm">
                                <div className= "gamecard-image">
                                    <img src={game.cover?.url}/>
                                </div>
                                <div className="gamecard-title">
                                    {game.name}
                                </div>
                             </div>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default Row;