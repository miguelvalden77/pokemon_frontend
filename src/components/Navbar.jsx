import { useContext } from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {AuthContext} from "../context/auth.context"

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
      <nav className="no-logged-nav">
        <NavLink to={"/"}> <Button variant="outline-light">Home</Button></NavLink>
        <NavLink to={"/profile"}><Button variant="outline-primary">Profile</Button></NavLink>
        <NavLink to={"/pokemon/all"}><Button variant="outline-danger">Pokedex</Button></NavLink>
        <NavLink to={"/pokemon/random"}><Button variant="outline-warning">Random</Button></NavLink>
        <NavLink to={"/pokemon/games"}><Button variant="outline-success">Games</Button></NavLink>
        <NavLink to={"/pokemon/news"}><Button variant="outline-info">News</Button></NavLink>
        <Button variant="outline-secondary" onClick={handleLogout}>Logout</Button>
      </nav>
    )
  } else{
    return (
      <nav className="no-logged-nav-non">
        <NavLink to={"/"}><Button variant="outline-secondary">Home</Button></NavLink>
          <NavLink  to={"/pokemon/all"}><Button variant="outline-danger">Pokedex</Button></NavLink>
          <NavLink  to={"/register"}><Button variant="outline-success">Register</Button></NavLink>
          <NavLink  to={"/login"}><Button variant="outline-primary">Login</Button></NavLink>
      </nav>
    )
  }
}

export default Navbar