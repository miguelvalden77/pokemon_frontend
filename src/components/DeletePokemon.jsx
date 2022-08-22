import { deletePokemon } from "../services/user.service"
import { useContext } from "react"
import {AuthContext} from "../context/auth.context"

function DeletePokemon({name, dataFunction}) {

    const {user} = useContext(AuthContext)

    const deleteThePokemon = async ()=>{
        try{
            console.log(user._id)
            // Borrar pokemon de array
            const usuario = await deletePokemon(name, {id: user._id})
            const updatedPokemons = user.pokemons.filter(e=> e !== name)
            console.log(usuario)
            user.pokemons = updatedPokemons
            dataFunction(user.pokemons)
            
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <button onClick={deleteThePokemon}>Eliminar pokemon</button>
  )
}

export default DeletePokemon