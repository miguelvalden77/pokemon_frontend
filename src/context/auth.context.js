import { createContext, useContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";

const AuthContext = createContext()

function AuthWrapper (props){

    const [isUserActive, setIsUserActive] = useState(false)
    const [user, setUser] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(()=>{
        authenticateUser()
    }, [])

    const authenticateUser = async ()=>{

        try{
            const response = await verifyService()
            console.log(response.data)

            setIsUserActive(true)
            setUser(response.data)
            setIsFetching(false)
        }
        catch(error){
            console.log(error)
            setIsUserActive(false)
            setUser(null)
            setIsFetching(false)
        }
    }

    const passedContext = {authenticateUser, user, isUserActive}

    if(isFetching === true){
        return <h3>Is validating ...</h3>
    }

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthWrapper, AuthContext}