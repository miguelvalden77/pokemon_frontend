import service from "./config.service"

const addPokemon = (info) =>{
    return service.post(`/user/add/pokemon`, info)
}

export {addPokemon}
