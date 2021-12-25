import React, {useEffect, useState} from 'react';
import axios from "../Components/Axios/axios";
import {useParams} from "react-router-dom";
import "../styles/main.css";

function Row({title, fetchUrl}) {

    const [games, setGames] = useState([]);

    const { name } = useParams()

    useEffect(() => {

        async function fetchData() {

            let fetch;

            if(name === undefined) {
                fetch = await axios.get(fetchUrl);
            }
            else{
                fetch = await axios.get(fetchUrl + name);
            }

            return fetch;
        }

        fetchData().then(fetch => {
            setGames(fetch.data);
        })
    }, [])

    console.log(games)

    const imageClick = (props) => {
        window.location.href = "/game/" + props
    }

    return(
        <div className="m-2">
            <h1 className="text-center text-4xl m-8"><strong>{title}</strong></h1>

            <ul className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 p-0"> 
            {games.map((game, index) => (
                <li key={index} className="flex flex-auto bg-gray-300 rounded-lg shadow" onClick={() => imageClick(game.id)} >
                    <div className="flex flex-none items-center">
                        <img className="bg-black m-2 rounded-lg hover:blur-xs duration-300" src={game.cover?.url} alt=""/>
                    </div>
                    <p className="m-2 text-gray-900 text-sm font-medium hover:text-gray-500">{game.name}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Row;