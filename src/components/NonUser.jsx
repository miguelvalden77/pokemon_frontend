import {useContext, useState} from 'react'
import { Navigate } from 'react-router-dom'
import {AuthContext} from "../context/auth.context"

function NonUser(props) {

    const {isUserActive} = useContext(AuthContext)

    if(isUserActive === false){
        return props.children
    } else { 
        return <Navigate to={"/profile"}/>
    }
}

export default NonUser