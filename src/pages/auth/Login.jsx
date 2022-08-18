import {useState} from 'react'

function Login() {

  const [data, setData] = useState({username: "", email: "", password: ""})
  const handleChange = e => setData({...data, [e.target.name]: e.target.value})

  return (
    <div>

      <h3>Login</h3>

      <form>
        
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} type="text" name='username' />

        <label htmlFor="password">Contraseña</label>
        <input onChange={handleChange} type="password" name='password' />

        <button>Join us!</button>

      </form>

    </div>
  )
}

export default Login