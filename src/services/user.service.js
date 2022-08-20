import service from "./config.service"

const addPokemon = (userId, name) =>{
    return service.post(`/user/${name}/pokemon`, userId)
}

export {addPokemon}
