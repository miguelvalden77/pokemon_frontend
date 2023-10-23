import axios from "axios"

const service = axios.create({ baseURL: "https://pokeapi.co/api/v2" })

const getAllPokemons = (userId) => {
    return axios.get(`http://localhost:5005/api/user/getAllPokemon/${userId}`)
}

const getAPokemon = name => {
    return service.get(`/pokemon/${name}`)
}

const allPokemonsRandom = () => {
    return service.get("pokemon?limit=100000&offset=0")
}

const getPokemonById = (id) => {
    return service.get(`pokemon/${id}`)
}

export { getAllPokemons, getAPokemon, allPokemonsRandom, getPokemonById }