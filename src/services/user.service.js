import service from "./config.service"

const addPokemon = (info) =>{
    return service.post(`/user/add/pokemon`, info)
}

const getUser = (id) =>{
    return service.get(`/user/${id}`)
}

export {addPokemon, getUser}
