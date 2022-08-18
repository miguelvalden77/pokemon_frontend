import { useEffect, useState } from 'react'
import { allPokemonsRandom } from '../../services/pokemon.services'

function RandomPokemon() {

    const [randomPokemon, setRandomPokemon] = useState(null)
    const [pokeName, setPokeName] = useState("")
    const [response, setResponse] = useState(false)

    useEffect(()=>{
        getPokeArr()
    }, [])

    const getPokeArr = async ()=>{
        try{
            const pokeArr = await allPokemonsRandom()
            const randomNum = Math.floor(Math.random()*pokeArr.data.results.length)
            setRandomPokemon(pokeArr.data.results[randomNum])
    
        }
        catch(error){
            console.log(error)
        }
    }

    const handleChange = e => setPokeName(e.target.value)
    const handleSubmit = e =>{
        e.preventDefault()
        if(pokeName === randomPokemon.name){
            setResponse(true)
            console.log("Correcto")
        }else{
            setResponse(false)
            console.log("No es correcto")
        }
    }

  return (
    <main>

        <h3>Guess the pokemon</h3>

        <article>
            <h4>{randomPokemon?.name}</h4>
        </article>

        {response && <p>Correcto</p>}

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={pokeName} />
            <button>Check!</button>
        </form>

    </main>
  )
}

export default RandomPokemon