import axiosForum from "../Components/Axios/axiosForum";
import { useEffect, useState } from "react";
import React from 'react'
import request from "../Components/Axios/Request";
import axios from "../Components/Axios/axios";

function Post () {
  
    const [posts, setPosts] = useState([]);
    const [poster, setPoster] = useState('')

    useEffect(() => {

        async function fetchData() {
            return await axiosForum.get(request.fetchPosts);
        }

        fetchData().then(fetch => {
            setPosts(fetch.data);
        })

        getUser(10)

    }, [])

    const getUser = (id) => {
        axios.get(request.publicInfo + id)
            .then((response) => {
                setPoster(response.data)
            })
            .catch(error => console.error('Error: ${error}'))
    }

    const postClick = (id) => {
        window.location.href = "/forum/post/" + id;
    }

    return(
        <div className="m-2">
            <h1 className="text-center text-4xl m-8"><strong>Posts</strong></h1>

            <ul className="grid gap-3 p-0"> 
            {posts.map((post, index) => (
                <li key={index} className="col text-center bg-gray-300 rounded-lg hover:scale-105 transition-all" onClick={() => postClick(post.id)}>
                    <h2 className=" text-lg">{post.title}</h2>
                    <p>Posted by: {poster.username}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Post