import React, { useEffect } from 'react';
import axios from "./Axios/axios";
import request from "./Axios/Request";


function VerifyUser()
{

    const [user, setUser] = React.useState(null)

    useEffect(() => {

        try{
            const config = {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }        

            if(config.headers.Authorization === null) { return }
            
            axios.get(request.verifyUserWithToken, config).then(
            res => {
                setUser(res.data)
            },
            err => {
                console.log(err)
            })
        }
        catch(error){
            console.log(error)
            return
        }


    }, []);

    return user;

}

export default VerifyUser;