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
  const [search, setSearch] = useState("/pokemon")
  const [nextSearch, setNextSearch] = useState("")
  const [previousSearch, setPreviousSearch] = useState("")

  useEffect(()=>{

    getData(search)

  },[search])

  const getData = async (url)=>{

    try{
      const pokemonList = await getAllPokemons(url)

      if(pokemonList.data.next){
        setNextSearch(pokemonList.data.next.slice(25))
      }

      if(pokemonList.data.previous){
        setPreviousSearch(pokemonList.data.previous.slice(25))
      } 
      
      setPokemons(pokemonList.data.results)
      setIsFetching(false)
    }
    catch(error){
      navigate("/error")
    }
  }

  // Button previous
  const passPreviousPage = ()=> page > 1 && setPage(page - 1)
  const previousPage = ()=> page > 1 && setSearch(previousSearch)

  // Button next
  const passNextPage = ()=> setPage(page + 1)
  const nextPage = ()=> setSearch(nextSearch)

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

      <button onClick={()=>{passPreviousPage(); previousPage()}}>Previous page</button>
      <button disabled>Current page <span>{page}</span></button>
      <button onClick={()=>{passNextPage(); nextPage()}}>Next page</button>
    </main>
  )
}

export default AllPokemons