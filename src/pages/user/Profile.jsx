import { useContext, useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import DeletePokemon from "../../components/DeletePokemon"
import { AuthContext } from "../../context/auth.context"
import { getAPokemon, getAllPokemons } from "../../services/pokemon.services"
import { getAPost } from "../../services/post.services"
import { Button } from "react-bootstrap"
import UpdatePostForm from "../pokemons/UpdatePostForm"

const Profile = () => {

  const { user, isUserActive } = useContext(AuthContext)
  const navigate = useNavigate()
  const [posts, setPosts] = useState(null)
  const [pokemons, setPokemons] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getPosts(user.posts)
    getMyPokemons(user.pokemons)
  }, [])

  const getPosts = async (arr) => {
    try {
      if (user.posts.length > 0) {
        const newArr = []
        arr.forEach(async e => {
          const post = await getAPost(e)
          newArr.push(post.data)
          setPosts(newArr)
        })
        setIsFetching(false)
        return
      }
      setIsFetching(false)
    }
    catch (error) {
      navigate("/error")
    }
  }

  const getMyPokemons = async () => {
    try {
      const { data: { pokemons } } = await getAllPokemons(user._id)
      if (pokemons.length > 0) {
        const newArr = []
        pokemons.forEach(async e => {
          const poke = await getAPokemon(e)
          newArr.push(poke.data)
        })
        setPokemons(newArr)
        setIsFetching(false)
        return
      }
      setIsFetching(false)

    }
    catch (error) {
      navigate("/error")
    }
  }

  if (isFetching) {
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  if (isUserActive === true) {
    return (
      <main className="body dark p-6">
        <h3 style={{ color: "whitesmoke", marginBottom: "3rem" }}>Welcome {user.username}</h3>

        <div className="profile-layout">
          <div>
            <h4 style={{ color: "whitesmoke" }}>Tus posts</h4>
            <section style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              {
                posts ? posts.map(e => {
                  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={e.title}>
                    <span style={{
                      color: "black",
                      display: "block",
                      borderRadius: "50%",
                      backgroundColor: "whitesmoke",
                      width: "30px", height: "30px",
                      position: "relative",
                      top: "15px",
                      left: "14px",
                      alignSelf: "flex-start"
                    }}>{e.comments.length}</span>
                    <img src={e.picture} alt="foto" width={160} height={190} />
                    <h3 style={{ color: "whitesmoke" }}>{e.title}</h3>
                    <Link to={`/pokemon/${e._id}/news`}> <Button variant='outline-secondary'>Update your post</Button></Link>
                  </div>
                }) : <div>
                  <p style={{ color: "whitesmoke" }}>Sube tu primera noticia</p>
                  <Link to={'/pokemon/news'}><Button variant="outline-primary">News</Button></Link>
                </div>
              }
            </section>
          </div>


          <div>
            <h4 style={{ color: "whitesmoke" }}>Tus pokemons</h4>
            <section style={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "center" }}>
              {
                pokemons ? pokemons.map((e) => {
                  return <article style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "0.5rem", justifyContent: "center", paddingBottom: "2rem" }} key={e.id}>
                    <img src={e.sprites.front_default} alt="foto" />
                    <h4 style={{ color: "whitesmoke" }}>{e.name}</h4>
                    <Link to={`/pokemon/${e.name}/details`}><Button variant="outline-primary">Details</Button></Link>
                    <DeletePokemon pokeId={e.id} dataFunction={setPokemons} />
                  </article>
                }) : <div>
                  <p style={{ color: "whitesmoke" }}>Add your first pokemon</p>
                  <Link to={'/pokemon/all'}><Button variant="outline-primary">Pokedex</Button></Link>
                </div>
              }
            </section>
          </div>
        </div>

      </main>
    )
  }
  else {
    navigate("/login")
  }
}

export default Profile
