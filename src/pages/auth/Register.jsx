import { useState } from 'react'
import { registerUser } from '../../services/auth.services'
import {useNavigate} from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [data, setData] = useState({username: "", email: "", password: ""})
  const {username, email, password} = data

  const handleChange = e => setData({...data, [e.target.name]: e.target.value})

  const handleSubmit = async e =>{

    e.preventDefault()
    const user = {username, email, password}

    try{

      await registerUser(user)
      navigate("/login")
    }
    catch(error){
      console.log(error.message)
    }
  }

  return (
    <div>

      <h3>Register</h3>

      <form onSubmit={handleSubmit}>
        
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} type="text" name='username' value={username} />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="text" name='email' value={email} />

        <label htmlFor="password">Contraseña</label>
        <input onChange={handleChange} type="password" name='password' value={password} />

        <button>Join us!</button>

      </form>

    </div>
  )
}

export default Register