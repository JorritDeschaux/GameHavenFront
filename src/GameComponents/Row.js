import React, {useEffect, useState} from 'react';
import axios from "../Components/Axios/axios";

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
        <div className="row">
            <h2>{title}</h2>

            {games.map(game => (
                <ul key={game.id}>
                    <li>
                        <div>{game.name}</div>
                    </li>
                </ul>
            ))}

        </div>
    );
}

export default Row;