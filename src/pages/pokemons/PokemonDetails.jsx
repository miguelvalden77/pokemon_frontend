import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { getAPokemon } from '../../services/pokemon.services'
import { addPokemon } from "../../services/user.service"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Button } from "react-bootstrap"
import PhotoSection from "../../components/pokemons/PhotoSection"

const PokemonDetails = () => {

  const { user } = useContext(AuthContext)


  const { id } = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState({})
  const [click, setClick] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    getPokemon(id)
  }, [])

  const getPokemon = async id => {
    try {
      const pokemonFound = await getAPokemon(id)
      setPokemon(pokemonFound.data)
      setIsFetching(false)
    }
    catch (error) {
      navigate("/error")
    }
  }

  const addToFav = async () => {
    try {
      if (!user.pokemons.includes(id)) {
        const info = { userId: user._id, name: id }
        await addPokemon(info)
        user.pokemons.push(id)
        return
      }
    }
    catch (error) {
      navigate("/error")
    }
  }

  const handleClick = () => setClick(true)

  if (isFetching) {
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  return (
    <div className='body dark p-6'>

      <article className='detail-card'>
        <h3>{pokemon.name}</h3>
        <PhotoSection photo_1={pokemon.sprites.back_default} photo_2={pokemon.sprites.front_default} photo_3={pokemon.sprites.front_shiny} />
        {
          click && <p style={{ color: "green", margin: "0.5rem 0" }}>{user.pokemons.includes(pokemon.name) ? "Ya lo tienes agregado" : `You captured ${pokemon.name}`}</p>
        }
        <Button className='capture_button' onClick={() => { handleClick(); addToFav() }} variant='outline-success' style={{ marginBottom: "1rem" }}>Añadir a favoritos</Button>
        <section className='stats_section'>
          <p className='stats-description'>Weight: {pokemon.weight}</p>
          <p className='stats-description'>Height: {pokemon.height}</p>
          {
            pokemon.stats.map(obj => {
              return <p className='stats-description' key={obj.stat.name}>{obj.stat.name}: {obj.base_stat}</p>
            })
          }
        </section>
      </article>

    </div>
  )
}

export default PokemonDetails
