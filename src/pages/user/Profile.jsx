import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../../context/auth.context"

const Profile = ()=> {

  const {user, isUserActive} = useContext(AuthContext)
  const navigate = useNavigate()

  if(isUserActive === true){
    return (
      <main>
          <h3>Bienvenido a tu perfil {user.username}</h3>
      </main>
    )
  }
  else{
    navigate("/login")
  }
}

export default Profile