import { useContext } from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {AuthContext} from "../context/auth.context"

// Bootstrap
import { Button } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';

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
      // <nav className="no-logged-nav">
      //   <NavLink to={"/"}> <Button variant="outline-light">Home</Button></NavLink>
      //   <NavLink to={"/profile"}><Button variant="outline-primary">Profile</Button></NavLink>
      //   <NavLink to={"/pokemon/all"}><Button variant="outline-danger">Pokedex</Button></NavLink>
      //   <NavLink to={"/pokemon/random"}><Button variant="outline-warning">Random</Button></NavLink>
      //   <NavLink to={"/pokemon/games"}><Button variant="outline-success">Games</Button></NavLink>
      //   <NavLink to={"/pokemon/news"}><Button variant="outline-info">News</Button></NavLink>
      //   <Button variant="outline-secondary" onClick={handleLogout}>Logout</Button>
      // </nav>
      <Nav className="navbar" variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      
          <NavLink to={"/"}> Home </NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
          <NavLink to={"/profile"}> Profile </NavLink>
    
      </Nav.Item>
      <Nav.Item>
      
          <NavLink to={"/pokemon/all"}> Pokedex </NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
          <NavLink to={"/pokemon/news"}> News </NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
          <NavLink to={"/pokemon/games"}> Games </NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
          <NavLink to={"/pokemon/random"}> Random </NavLink>
        
      </Nav.Item>
      <Nav.Item>
        <Button variant="outline-secondary" onClick={handleLogout}>Logout</Button>
      </Nav.Item>
    </Nav>
    )
  } else{
    return (
      // <nav className="no-logged-nav-non">
      //   <NavLink to={"/"}><Button variant="outline-secondary">Home</Button></NavLink>
      //     <NavLink  to={"/register"}><Button variant="outline-success">Register</Button></NavLink>
      //     <NavLink  to={"/login"}><Button variant="outline-primary">Login</Button></NavLink>
      // </nav>

      <Nav className="navbar" variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      
        <NavLink to={"/"}> Home </NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
        <NavLink to={"/login"}> Login </NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
        <NavLink to={"/register"}> Register </NavLink>
        
      </Nav.Item>
    </Nav>
    )
  }
}

export default Navbar