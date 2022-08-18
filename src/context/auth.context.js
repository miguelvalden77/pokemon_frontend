import { createContext, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext()

function AuthWrapper (props){

    const [isUserActive, setIsUserActive] = useState(false)
    const [user, setUser] = useState(null)

    const authenticateUser = async ()=>{

        try{
            const response = await verifyService()
            console.log(response.data)

            setIsUserActive(true)
            setUser(response.data)
        }
        catch(error){
            console.log(error)
            setIsUserActive(false)
            setUser(null)
        }
    }

    const passedContext = {authenticateUser, user, isUserActive}

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthWrapper, AuthContext}