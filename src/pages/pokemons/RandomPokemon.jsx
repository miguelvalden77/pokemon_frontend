import { useEffect, useState } from 'react'
import { allPokemonsRandom, getPokemonById } from '../../services/pokemon.services'

function RandomPokemon() {

    const [randomPokemon, setRandomPokemon] = useState(null)
    const [pokeName, setPokeName] = useState("")
    const [response, setResponse] = useState(null)

    // useEffect(()=>{
    //     getPokeArr()
    // }, [])

    const getPokeArr = async ()=>{

        setResponse(null)
        setPokeName("")
        try{
            const pokeArr = await allPokemonsRandom()
            const randomNum = Math.floor(Math.random()*pokeArr.data.results.length)
            const pokemon = await getPokemonById(randomNum)
            setRandomPokemon(pokemon.data)
            console.log(randomPokemon)
    
        }
        catch(error){
            getPokeArr()
        }
    }

    const handleChange = e => setPokeName(e.target.value)
    const handleSubmit = e =>{
        e.preventDefault()
        if(pokeName.toLocaleLowerCase().trim() === randomPokemon.name.toLocaleLowerCase()){
            setResponse("Correcto")
        }else{
            setResponse("Incorrecto")
        }
    }

  return (
    <main>

        <h3>Guess the pokemon</h3>

        {
            randomPokemon && <article>
            <img src={randomPokemon.sprites.front_default} alt="foto" />
        </article>
        }

        {<p>{response}</p>}

        <button onClick={getPokeArr}>Get a random Pokemon</button>

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={pokeName} />
            <button>Check!</button>
        </form>

    </main>
  )
}

export default RandomPokemon