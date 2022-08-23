import { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"
import { getAPokemon } from '../../services/pokemon.services'
import {addPokemon} from "../../services/user.service"
import { useContext } from "react"
import {AuthContext} from "../../context/auth.context"

const PokemonDetails = ()=> {

  const {user} = useContext(AuthContext)


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

  const addToFav = async ()=>{
    try{
      if(!user.pokemons.includes(id)){
        const info = {userId: user._id, name: id}
        await addPokemon(info)
        user.pokemons.push(id)
        return
      }
    }
    catch(error){
      console.log(error)
    }
  } 


  if(isFetching){
    return <h3>Cargando . . .</h3>
  }

  //console.log(pokemon.stats)

  return (
    <div>

      <article>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt="foto" />
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
          {
            pokemon.stats.map(obj=>{
                console.log(obj)
              return <section key={obj.stat.name}>
                <p>{obj.stat.name}: {obj.base_stat}</p>
              </section>
                
              
              // obj.map(e=>{
              //   return <section>
              //     <p>{e.name}: {obj.base_stat}</p>
              //   </section>
              // })
            })
          }
        <button onClick={addToFav}>Añadir a favoritos</button>
      </article>

    </div>
  )
}

export default PokemonDetails