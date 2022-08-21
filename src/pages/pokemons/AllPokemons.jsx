import { useEffect, useState } from 'react'
import { getAllPokemons, getAPokemon } from '../../services/pokemon.services'
import {Link} from "react-router-dom"
import axios from 'axios'
import Search from '../../components/Search'

// function AllPokemons() {

//   // Navigate
//   const navigate = useNavigate()

//   // Estados
//   const [pokemons, setPokemons] = useState([])
//   //const [pokemonInfo, setPokemonInfo] = useState([])
//   const [isFecthing, setIsFetching] = useState(true)
//   //const [page, setPage] = useState(1)
//   const [search, setSearch] = useState("/pokemon")
//   const [nextSearch, setNextSearch] = useState("")
//   const [previousSearch, setPreviousSearch] = useState("")

//   useEffect(()=>{

//     getData(search)
//     getFullData()

//   },[search])


//   const getData = async (url)=>{

    
//     try{
//       const pokemonList = await getAllPokemons(url)

//       if(pokemonList.data.next){
//         setNextSearch(pokemonList.data.next.slice(25))
//       }

//       if(pokemonList.data.previous){
//         setPreviousSearch(pokemonList.data.previous.slice(25))
//       }

//       setPokemons(pokemonList.data.results)
//       setIsFetching(false)

//     }
//     catch(error){

//       console.log(error)
//     }
//   }

//   const getFullData = async ()=>{
//     const num = page * 20
//     console.log(num)
//     const arr = []
//     if(page > 1){
//       for(let i = num - 20; i < num; i++){
//         const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//         arr.push(pokemon.data)
//       }
//     } else{
//       for(let i = 1; i < 21; i++){
//         const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//         arr.push(pokemon.data)
//       }
//     }
//     console.log(arr)
//     setPokemonInfo(arr)
//   }

//   // const getFullData = ()=>{
//   //   const index = pokemons.map(e=>e.url.split("/")[6])

//   //     const arr = []
//   //     index.forEach(e=>{
//   //         axios.get(`https://pokeapi.co/api/v2/pokemon/${e}/`)
//   //         .then(res=> arr.push(res.data))
//   //         .catch(err=>console.log(err))
//   //     })
      
//   //     setPokemonInfo(arr)
//   //     console.log(pokemonInfo)
//   // }


//   // Button previous
//   const passPreviousPage = ()=> page > 1 && setPage(page - 1)
//   const previousPage = ()=> page > 1 && setSearch(previousSearch)

//   // Button next
//   const passNextPage = ()=> setPage(page + 1)
//   const nextPage = ()=> setSearch(nextSearch)

//   if(isFecthing){
//     return <h3>Cargando . . .</h3>
//   }

//   return (
//     <main>

//       {
//         pokemonInfo && pokemonInfo.map(e=>{

//           return <article key={e.name}>
//             <h3>{e.name}</h3>
//             <img src={e.sprites.front_default} alt="foto" />
//             <Link to={`/pokemon/${e.name}/details`}><button>Details</button></Link>
//           </article>

//         })
//       }

//       <button onClick={()=>{passPreviousPage(); previousPage()}}>Previous page</button>
//       <button disabled>Current page <span>{page}</span></button>
//       <button onClick={()=>{passNextPage(); nextPage()}}>Next page</button>
//     </main>
//   )
// }

function AllPokemons(){

  const [pokemons, setPokemons] = useState([])
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons)
  const [search, setSearch] = useState("")
  const [isFecthing, setIsFetching] = useState(true)

  useEffect(()=>{
    getData()
  }, [])

  const getData = async ()=>{
    const num = 387
    try{
      const PokeArr = []
      for(let i = 1; i < num; i++){
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        PokeArr.push(pokemon.data)
      }
      setPokemons(PokeArr)
      setVisiblePokemons(PokeArr)
      setIsFetching(false)
    }
    catch(error){
      console.log(error)
    }
  }

  const filterSearch = (search)=>{

    const newArr = pokemons
    const filteredArr = newArr.filter(e =>{
      if( e.name.includes(search.trim())){
        return e
      }
    })
    setVisiblePokemons(filteredArr)
  }

  const handleChange = e =>{
    setSearch(e.target.value)
    setVisiblePokemons(pokemons)
    filterSearch(e.target.value)
}


  if(isFecthing){
    return <h3>Cargando . . .</h3>
  }

  return(
    <main>
      <h2>Pokédex</h2>

      {/* //<Search filterArr={filterSearch}/> */}

        <label htmlFor="search">Search</label>
        <input onChange={handleChange} type="text" name='search' value={search}/>

      {
        visiblePokemons && visiblePokemons.map(e=>{
          return <article key={e.id}>
            <h3>{e.name}</h3>
            <img src={e.sprites.front_default} alt="foto" />
            <Link to={`/pokemon/${e.name}/details`}><button>Details</button></Link>
          </article>
        })
      }
    </main>
  )

}

export default AllPokemons