import { useEffect, useState } from 'react'
import { getAllPokemons } from '../../services/pokemon.services'
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

function AllPokemons() {

  // Navigate
  const navigate = useNavigate()

  // Estados
  const [pokemons, setPokemons] = useState([])
  const [isFecthing, setIsFetching] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(()=>{

    getData()

  },[])

  const getData = async ()=>{

    try{
      const pokemonList = await getAllPokemons()
      setPokemons(pokemonList.data.results)
      setIsFetching(false)
    }
    catch(error){
      navigate("/error")
    }
  }

  const passNextPage = ()=> setPage(page + 1)
  const passPreviousPage = ()=> page > 1 && setPage(page - 1)


  if(isFecthing){
    return <h3>Cargando . . .</h3>
  }

  return (
    <main>

      {
        pokemons.map(e=>{
          return <article key={e.name}>
            
            <h3>{e.name}</h3>
            <button><Link to={`/pokemon/${e.name}/details`}>See details</Link></button>
          </article>
        })
      }

      <button onClick={passPreviousPage}>Previous page</button>
      <button disabled>Current page <span>{page}</span></button>
      <button onClick={passNextPage}>Next page</button>
    </main>
  )
}

export default AllPokemons