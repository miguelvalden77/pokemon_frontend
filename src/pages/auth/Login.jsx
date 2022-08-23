import {useState, useContext} from 'react'
import { loginUser } from '../../services/auth.services'
import {useNavigate} from "react-router-dom"

import {AuthContext} from "../../context/auth.context"

function Login() {

  const {authenticateUser} = useContext(AuthContext)

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
  const [data, setData] = useState({username: "", password: ""})
  const {username, password} = data

  const handleChange = e => setData({...data, [e.target.name]: e.target.value})
  const handleSubmit = async e =>{

    e.preventDefault()
    const credentials = {username: username, password: password}

    try{
      const response = await loginUser(credentials)
      console.log(response.data)

      const authToken = response.data.authToken

      localStorage.setItem("authToken", authToken)

      authenticateUser()

      navigate("/profile")
      
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

      {/* <h3>Login</h3> */}

      {errorMessage && <p>{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="register-form">
        <h3 className='register-title'>Login</h3>
        <div className='input-container'>
          <p className="label">Username</p>
          <input className='input' onChange={handleChange} type="text" name='username' value={username} />
        </div>

        <div className='input-container'>
          <p className="label">Contraseña</p>
          <input className='input' onChange={handleChange} type="password" name='password' value={password}/>
        </div>

        <button className='form-button'>Join us!</button>

      </form>

    </div>
  )
}

export default Login