import { useState, useContext } from "react"
import {NavLink} from "react-router-dom"
import {AuthContext} from "../context/auth.context"

function Navbar() {

  const {isUserActive} = useContext(AuthContext)
  console.log(isUserActive)

  if(isUserActive === true){
    return(
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/pokemon/all"}>Pokédex</NavLink>
        <NavLink to={"/pokemon/random"}>Random</NavLink>
        <NavLink to={"/pokemon/games"}>Games</NavLink>
        <NavLink to={"/pokemon/news"}>News</NavLink>
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