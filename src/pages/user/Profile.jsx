import { useContext } from "react"
import {AuthContext} from "../../context/auth.context"

function Profile() {

  const {user} = useContext(AuthContext)
  console.log(user)

  return (
    <main>
        <h3>Bienvenido a tu perfil {user.username}</h3>
    </main>
  )
}

export default Profile