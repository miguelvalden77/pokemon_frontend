import { useState } from 'react'
import { registerUser } from '../../services/auth.services'
import {useNavigate} from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
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

      if(error.response.status === 400){
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }
  }

  return (
    <div className='main-form dark body'>


      {errorMessage && <p>{errorMessage}</p>}

      <form className='register-form' onSubmit={handleSubmit}>
        
      <h3 className='register-title'>Register</h3>
        <div className='input-container'>
          <p className='label'>Username</p>
          <input className='input' onChange={handleChange} type="text" name='username' value={username} />
        </div>

        <div className='input-container'>
          <p className='label'>Email</p>
          <input className='input' onChange={handleChange} type="text" name='email' value={email} />
        </div>

        <div className='input-container'>
          <p className='label'>Contraseña</p>
          <input className='input' onChange={handleChange} type="password" name='password' value={password} />
        </div>

        <button className='form-button'>Join us!</button>

      </form>

    </div>
  )
}

export default Register