
import VerifyUser from "../VerifyUser";
import NavbarBase from "./NavbarBase";

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