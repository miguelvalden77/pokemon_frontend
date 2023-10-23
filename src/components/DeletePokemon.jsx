import { deletePokemon } from "../services/user.service"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Button } from "react-bootstrap"

function DeletePokemon({ pokeId, dataFunction }) {

  const { user } = useContext(AuthContext)

  const deleteThePokemon = async () => {
    try {
      // Borrar pokemon de array
      const { data } = await deletePokemon(pokeId, { id: user._id })
      console.log({ data, pokeId })
      dataFunction((prevPokemons) => prevPokemons.filter((pokemon) => {
        console.log(pokemon)
        return pokemon.id != pokeId
      }))

    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Button variant="outline-danger" onClick={deleteThePokemon}>Delete</Button>
  )
}

export default DeletePokemon