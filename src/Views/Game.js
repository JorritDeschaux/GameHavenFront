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
            <div className="container">
                <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">
                    <div className="flex flex-col-2 items-center justify-center">
                        <div>
                            <div className="flex justify-center m-4">
                                <img src={game.cover?.url} alt={game.name}/>
                            </div>
                        </div>
                        <div className="game-header-info">
                            <h1 className="text-2xl m-4"><strong>{game.name}</strong></h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Game