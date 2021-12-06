import React, {useEffect, useState} from "react";
import request from "../Components/Axios/Request";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";
import {useParams} from "react-router-dom";
import css from "./Styles/Game.css"

function Game()
{
    const { id } = useParams()

    const [game, setGame] = useState('')

    const getGame = () => {
        axios.get(request.fetchGameById + id)
            .then((response) => {
                setGame(response.data)
                console.log(response)
            })
            .catch(error => console.error('Error: ${error}'))
    }

    useEffect(() => {

        console.log(id)
        getGame()

    }, [])


    return(
        <>

            <Layout/>
            <div className="container center">
                <div className="game-header-info">
                <h2 className="center">{game.name}</h2>
                <img className="cover" src={game.cover?.url} alt={game.name}/>
                </div>
            </div>

        </>
    )
}

export default Game