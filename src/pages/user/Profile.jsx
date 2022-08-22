import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DeletePokemon from "../../components/DeletePokemon"
import {AuthContext} from "../../context/auth.context"
import { getAPokemon } from "../../services/pokemon.services"
import { getAPost } from "../../services/post.services"

const Profile = ()=> {

  const {user, isUserActive} = useContext(AuthContext)
  const navigate = useNavigate()
  const [posts, setPosts] = useState(null)
  const [pokemons, setPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{
    getPosts(user.posts)
    getMyPokemons(user.pokemons)
  }, [])

  const getPosts = async (arr)=>{
    try{
      if(user.posts.length > 0){
        const newArr = []
        arr.forEach(async e=>{
          const post = await getAPost(e)
          newArr.push(post.data)
          setPosts(newArr)
      })
      setIsFetching(false)
      return
      }
      setIsFetching(false)
    }
    catch(error){
      console.log(error)
    }
  }

  const getMyPokemons = async (arr)=>{
    try{
      if(user.pokemons.length > 0){
        const newArr = []
        arr.forEach(async e=>{
          const poke = await getAPokemon(e)
          newArr.push(poke.data)
          setPokemons(newArr)
          return
        })  
      }
      
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
          posts && posts.map(e=>{
              return <h3 key={e._id}>{e.title}</h3>
            })
          }

          <h4>Tus pokemons</h4>
          {
          pokemons && pokemons.map(e=>{
              return <article key={e.id}>
                <img src={e.sprites.front_default} alt="foto" />
                <h4>{e.name}</h4>
                <DeletePokemon name={e.name} dataFunction={getMyPokemons}/>
              </article>
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