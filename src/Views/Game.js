import React, {useEffect, useState} from "react";
import request from "../Components/Axios/Request";
import Layout from "../Components/Layout/Layout";
import axios from "../Components/Axios/axios";
import {useParams} from "react-router-dom";
import '../styles/main.css'

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
            <div class="container items-center">
                <div class="game-header-info">
                <h2 class="text-2xl font-thin">{game.name}</h2>
                <div class="cover blur-md">
                    <img src={game.cover?.url} alt={game.name}/>
                </div>
                </div>
            </div>

        </>
    )
}

export default Game