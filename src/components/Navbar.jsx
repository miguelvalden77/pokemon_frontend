import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/pokemon/all"}>Pokédex</NavLink>
        <NavLink to={"/pokemon/random"}>Random</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/pokemon/games"}>Pokemon games</NavLink>
    </nav>
  )
}

export default Navbar