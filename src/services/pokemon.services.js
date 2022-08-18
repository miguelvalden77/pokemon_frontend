import axios from "axios"

const service = axios.create({baseURL:"https://pokeapi.co/api/v2"})

const getAllPokemons = ()=>{
    return service.get("/pokemon")
}

const getAPokemon = name =>{
    return service.get(`/pokemon/${name}`)
}


export {getAllPokemons, getAPokemon}