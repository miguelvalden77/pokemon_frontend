import { useContext } from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {AuthContext} from "../context/auth.context"
import houseLogo from "../img/casa-logo.png"
import pokedex from "../img/pokedex.png"
import off from "../img/off.png"
import news from "../img/news-logo.png"
import game from "../img/game.png"
import random from "../img/random.jpg"

// Bootstrap
import { Button } from "react-bootstrap"

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
      <nav style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
        <NavLink to={"/"}><div className="logo logo-home"><img width={110} src={houseLogo} alt="foto"/></div></NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/pokemon/all"}><div datatype="pokedex" className="logo logo-pokedex"><img src={pokedex} alt="foto"/></div></NavLink>
        <NavLink to={"/pokemon/random"}><div className="logo logo-random"><img src={random} alt="foto"/></div></NavLink>
        <NavLink to={"/pokemon/games"}><div className="logo logo-game"><img src={game} alt="foto"/></div></NavLink>
        <NavLink to={"/pokemon/news"}><div className="logo logo-game"><img src={news} alt="foto"/></div></NavLink>
        <div onClick={handleLogout} className="logo logo-off"><img src={off} alt="foto"/></div>
      </nav>
    )
  } else{
    return (
      <nav className="no-logged-nav">
        <NavLink to={"/"}><Button variant="outline-secondary">Home</Button></NavLink>
        <div className="button-container">
          <NavLink  to={"/pokemon/all"}><Button variant="outline-danger">Pokedex</Button></NavLink>
          <NavLink  to={"/register"}><Button variant="outline-success">Register</Button></NavLink>
          <NavLink  to={"/login"}><Button variant="outline-primary">Login</Button></NavLink>
        </div>
      </nav>
    )
  }
}

export default Navbar