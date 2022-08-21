import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContext} from "../../context/auth.context"
import { getAPost } from "../../services/post.services"
import { getUser } from "../../services/user.service"

const Profile = ()=> {

  const {user, isUserActive} = useContext(AuthContext)
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{
    getPosts(user.posts)
  }, [])

  // Renderizar posts en perfil, pero primero hacer que
  const getPosts = async (arr)=>{
    try{
      const newArr = []
      arr.forEach(async e=>{
        const post = await getAPost(e)
        //console.log(post.data)
        newArr.push(post.data)
      })
      setPosts(newArr)
      console.log(posts)
      setIsFetching(false)
    }
    catch(error){
      console.log(error)
    }
  }

  if(isFetching){
    return <h3>Cargando . . .</h3>
  }

  if(isUserActive === true){
    return (
      <main>
          <h3>Bienvenido a tu perfil {user.username}</h3>

          <h4>Tus posts</h4>
          {
            posts.map(e=>{
              return <h3 key={e.title}>{e.title}</h3>
            })
          }
          
      </main>
    )
  }
  else{
    navigate("/login")
  }
}

export default Profile