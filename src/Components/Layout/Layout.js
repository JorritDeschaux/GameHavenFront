import React, {useEffect, useState} from 'react';
import VerifyUser from "../VerifyUser";
import NavbarBase from "./NavbarBase";
import background from "./bg.jpg"

const Layout = (props) =>{

    const user = VerifyUser()

    if(user)
    {
        return(
            NavbarBase(user)
        )

    }

    return(
        NavbarBase()
    )
}

export default Layout;