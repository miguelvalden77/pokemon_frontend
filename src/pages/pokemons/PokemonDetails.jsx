import { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"
import { getAPokemon } from '../../services/pokemon.services'
import {addPokemon} from "../../services/user.service"
import { useContext } from "react"
import {AuthContext} from "../../context/auth.context"
import {Button} from "react-bootstrap"

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
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  //console.log(pokemon.stats)

  return (
    <div className='body dark p-6'>

      <article className='detail-card'>
        <h3>{pokemon.name}</h3>       
        <img src={pokemon.sprites.front_default} alt="foto" />
        <Button variant='outline-success' style={{marginBottom: "1rem"}} onClick={addToFav}>Añadir a favoritos</Button>
          <p style={{textAlign: "left"}}>Weight: {pokemon.weight}</p>
          <p style={{textAlign: "left"}}>Height: {pokemon.height}</p>
          {
            pokemon.stats.map(obj=>{
              return <section style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} key={obj.stat.name}>
                <p>{obj.stat.name}: {obj.base_stat}</p>
              </section>
                
              
              // obj.map(e=>{
              //   return <section>
              //     <p>{e.name}: {obj.base_stat}</p>
              //   </section>
              // })
            })
          }
      </article>

    </div>
  )
}

export default PokemonDetails