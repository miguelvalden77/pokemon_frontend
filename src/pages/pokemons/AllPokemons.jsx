import { useEffect, useState, useContext } from 'react'
import TypeFilter from '../../components/TypeFilter'
import { AuthContext } from "../../context/auth.context"
import { Button } from "react-bootstrap"
import Pokedex from '../../components/pokemons/Pokedex'
import pokemones from "../../pokemons.json"


function AllPokemons() {

  const [pokemons, setPokemons] = useState([])
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons)
  const [search, setSearch] = useState("")
  const [isFecthing, setIsFetching] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const allPokemonsAgain = () => {
    setVisiblePokemons(pokemons)
  }

  const getData = async () => {

    try {

      setPokemons(pokemones)
      setVisiblePokemons(pokemones)
      setIsFetching(false)

    }
    catch (error) {
      console.log(error)
    }
  }

  const filterSearch = (search) => {

    const newArr = pokemons
    const filteredArr = newArr.filter(e => {
      if (e.name.includes(search.toLowerCase().trim())) {
        return e
      }
    })
    setVisiblePokemons(filteredArr)
  }

  const handleChange = e => {
    setSearch(e.target.value)
    setVisiblePokemons(pokemons)
    filterSearch(e.target.value)
  }

  if (isFecthing) {
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  return (
    <main className='dark body p-6'>
      <h2 style={{ color: "whitesmoke", marginBottom: "2rem" }}>Pokédex</h2>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
        <div display={{ position: "relative" }}>
          <label style={{ color: "whitesmoke", padding: "2rem" }} htmlFor="search">Search</label>
          <input onChange={handleChange} type="text" name='search' value={search} />
        </div>
      </div>

      <section className='pokedex-section'>
        {
          visiblePokemons && visiblePokemons.map((e, index) => {
            return <Pokedex id={index + 1} key={e.id} />
          })
        }
      </section>
    </main>
  )

}

export default AllPokemons
