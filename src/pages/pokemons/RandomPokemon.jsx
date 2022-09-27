import { useEffect, useState } from 'react'
import { allPokemonsRandom, getPokemonById } from '../../services/pokemon.services'
import {Button} from "react-bootstrap"

function RandomPokemon() {

    const [randomPokemon, setRandomPokemon] = useState(null)
    const [pokeName, setPokeName] = useState("")
    const [response, setResponse] = useState(null)
    const [show, setShow] = useState("")
    const [isFecthing, setIsFetching] = useState(true)
    const [points, setPoints] = useState(5)

    useEffect(()=>{
        setIsFetching(false)
    }, [])

    const getPokeArr = async ()=>{

        setResponse(null)
        setPokeName("")
        setShow("")
        try{
            const pokeArr = await allPokemonsRandom()
            const randomNum = Math.floor(Math.random()*560)
            const pokemon = await getPokemonById(randomNum)
            setRandomPokemon(pokemon.data)
    
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
            setPoints(points + 1)
        }else{
            setResponse("Incorrecto")
            setPoints(points - 1)
        }
    }

    const showName = ()=>{
        setShow(randomPokemon.name)
    }

    if(isFecthing){
        return <h3 className='body dark p-6'>Cargando . . .</h3>
    }

  return (
    <main className='dark body p-6'>

        <h3 style={{color: "whitesmoke"}}>Guess the pokemon</h3>

        {
            randomPokemon && <article>
            <img style={{margin: "auto"}} src={randomPokemon.sprites.front_default} alt="foto" />
        </article>
        }

        {<p style={response === "Incorrecto" ? {color: "red"} : {color: "green"}}>{response}</p>}

        <Button style={{marginBottom: "2rem", 
        display: "block", 
        marginInline: "auto",
        position: "relative",
        left: "1.5%"}} 
        variant='outline-light' 
        onClick={getPokeArr}>Get a random Pokemon</Button>

        <section style={{display: "flex", justifyContent: 'center', gap: "0.5rem"}}>
            <Button variant='outline-secondary' onClick={showName}>Show name!</Button>
            <input style={{marginRight: "0.5rem", marginLeft: "0.5rem", padding: "0.35rem"}} className='input' onChange={handleChange} type="text" value={show !== "" ? show : pokeName} />
            {
                show ? <Button onClick={handleSubmit} disabled variant='outline-success'>Check!</Button> : <Button onClick={handleSubmit} variant='outline-success'>Check!</Button>
            }
        </section>
        <h4 style={{color: "whitesmoke", marginTop: "1rem"}}>{points}</h4>
        

    </main>
  )
}

export default RandomPokemon
