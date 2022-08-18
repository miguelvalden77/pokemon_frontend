import axios from "axios"

const service = axios.create({baseURL:"https://pokeapi.co/api/v2"})

const getAllPokemons = (url)=>{
    return service.get(url)
}

const getAPokemon = name =>{
    return service.get(`/pokemon/${name}`)
}

const allPokemonsRandom = ()=>{
    return service.get("pokemon?limit=100000&offset=0")
}

export {getAllPokemons, getAPokemon, allPokemonsRandom}