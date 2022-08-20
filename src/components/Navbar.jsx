import { useState, useContext } from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {AuthContext} from "../context/auth.context"

function Navbar() {

  const {isUserActive, authenticateUser} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleLogout = ()=>{
    localStorage.removeItem("authToken")
    authenticateUser()
    navigate("/")
  }

  if(isUserActive === true){
    return(
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/pokemon/all"}>Pokédex</NavLink>
        <NavLink to={"/pokemon/random"}>Random</NavLink>
        <NavLink to={"/pokemon/games"}>Games</NavLink>
        <NavLink to={"/pokemon/news"}>News</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    )
  } else{
    return (
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/pokemon/all"}>Pokédex</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </nav>
    )
  }
}

export default Navbar