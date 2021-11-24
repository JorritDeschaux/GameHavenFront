import React, {useEffect, useState} from 'react';
import axios from "../Components/Axios/axios";
import "./Row.css";
import {useParams} from "react-router-dom";
import request from "../Components/Axios/Request";

function Row({title, fetchUrl}) {
    const [games, setGames] = useState([]);

    const { name } = useParams()

    useEffect(() => {
        async function fetchData() {
            let fetch = null;

            if(name === undefined) {
                fetch = await axios.get(fetchUrl);
            }
            else{
                fetch = await axios.get(fetchUrl + name);
            }

            setGames(fetch.data);
            return fetch;
        }

        fetchData();
    }, [])

    console.log(games)

    return(
        <div className="container">
            <h2 className="center">{title}</h2>

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