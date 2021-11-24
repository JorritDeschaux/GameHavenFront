import React from 'react';
import axios from "./Axios/axios";
import request from "./Axios/Request";


function VerifyUser()
{
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {

        const config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(request.verifyUserWithToken, config).then(
            res => {
                setUser(res.data)
            },
            err => {
                console.log(err)
            }
        )
    }, []);

    return user;

}

export default VerifyUser;