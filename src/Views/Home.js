import React, {Component, useState} from "react";
import Layout from "../Components/Layout/Layout";
import request from "../Components/Axios/Request";
import Row from "../GameComponents/Row";
import {Footer} from "../Components/Layout/Footer";
import axios from "../Components/Axios/axios";
import styling from "./Home.css"


export default class Home extends Component
{
    state = {};

    componentDidMount() {

        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.get('auth/verify', config).then (
            res => {
                this.setState({
                    user: res.data
                });
            },
            err => {
                console.log(err)
            }
        )
    }

    render() {
        if(this.state.user){
            return(
                <>
                    {}
                    <Layout/>
                    <div className="container">
                        <h2 className="center-greeting">Hello {this.state.user.username}</h2>
                        <div>

                            <Row
                                title='New and Popular'
                                fetchUrl={request.fetchRecentGamesDiscover}
                            />
                        </div>

                    </div>
                </>

            )
        }

        return (
        <>
                <Layout/>
                    <div className="container">
                        <div>

                            <Row
                                title='New and Popular'
                                fetchUrl={request.fetchRecentGamesDiscover}
                            />
                        </div>

                    </div>

            </>
        )
    }
}
