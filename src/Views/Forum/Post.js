import React, {useEffect, useState} from "react";
import request from "../../Components/Axios/Request";
import Layout from "../../Components/Layout/Layout";
import axiosForum from "../../Components/Axios/axiosForum";
import {useParams} from "react-router-dom";
import '../../styles/main.css'
import axios from "../../Components/Axios/axios";

function Post()
{
    const { id } = useParams()

    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [poster, setPoster] = useState('')

    const getPost = () => {
        axiosForum.get(request.fetchPostById + id)
            .then((response) => {
                setPost(response.data)
                setComments(response.data.comments)
            })
            .catch(error => console.error('Error: ${error}'))
    }

    const getUser = () => {
        axios.get(request.publicInfo)
            .then((response) => {
                setPoster(response.data)
            })
            .catch(error => console.error('Error: ${error}'))
    }

    useEffect(() => {
        getPost()
    }, [])

    console.log(post)

    return(
        <>
            <Layout/>
            <div className="container">
                <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col sm:mx-8">
                    <div className="row items-center justify-center">
                        <div className="flex justify-center m-4 ">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="items-center justify-center text-center">
                            <p>{post.body}</p>
                        </div>
                    </div>

                    {comments.map((comment, index) => (
                        <li key={index}>
                            
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Post