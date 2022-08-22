import service from "./config.service"

const addPokemon = (info) =>{
    return service.post(`/user/add/pokemon`, info)
}

const getUser = (id) =>{
    return service.get(`/user/${id}`)
}

const deletePokemon = (name, id)=>{
    return service.patch(`/user/${name}/pokemon`, id)
}

export {addPokemon, getUser, deletePokemon}
