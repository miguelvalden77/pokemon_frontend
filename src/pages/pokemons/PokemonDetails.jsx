import { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"
import { getAPokemon } from '../../services/pokemon.services'

function PokemonDetails() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState({})
  const [isFetching, setIsFetching] = useState(true)

  useEffect(()=>{
    getPokemon(id)
  }, [])

  const getPokemon = async id =>{
    try{
      const pokemonFound = await getAPokemon(id)
      setPokemon(pokemonFound.data)
      setIsFetching(false)
    }
    catch(error){
      navigate("/error")
    }
  }


  if(isFetching){
    return <h3>Cargando . . .</h3>
  }

  return (
    <div>

      <article>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt="foto" />
      </article>

    </div>
  )
}

export default PokemonDetails