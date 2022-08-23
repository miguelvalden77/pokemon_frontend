import { useEffect, useState, useContext } from 'react'
import { getAllPokemons, getAPokemon } from '../../services/pokemon.services'
import {Link} from "react-router-dom"
import axios from 'axios'
import Search from '../../components/Search'
import TypeFilter from '../../components/TypeFilter'
import {AuthContext} from "../../context/auth.context"

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

  const {pokemones} = useContext(AuthContext)

  const [pokemons, setPokemons] = useState([])
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons)
  const [search, setSearch] = useState("")
  const [isFecthing, setIsFetching] = useState(true)

  useEffect(()=>{
    //firstDataCall()
    getData()
  }, [])

  const allPokemonsAgain = ()=>{
    setVisiblePokemons(pokemons)
  }

  const getData = async ()=>{
    //const num = 387
    try{
      // const PokeArr = []
      // for(let i = 1; i < num; i++){
      //   const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      //   PokeArr.push(pokemon.data)
      // }
    
      setPokemons(pokemones)
      setVisiblePokemons(pokemones)
      setIsFetching(false)
      
    }
    catch(error){
      console.log(error)
    }
  }

  const filterSearch = (search)=>{

    const newArr = pokemons
    const filteredArr = newArr.filter(e =>{
      if( e.name.includes(search.toLowerCase().trim())){
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

const colorType = (type)=>{
  switch (type) {
    case "grass":
      return {backgroundColor: "green"}
    
    case "fire":
        return {backgroundColor: "red"}

    case "bug":
      return {backgroundColor: "yellowgreen"}

    case "water":
      return {backgroundColor: "darkblue"}

    case "rock":
      return {backgroundColor: "darkgoldenrod"}

    case "steel":
      return {backgroundColor: "steelblue"}

    case "flying":
      return {backgroundColor: "lightgray"}

    case "fairy":
      return {backgroundColor: "pink"}

    case "electric":
      return {backgroundColor: "yellow"}

    case "poison":
      return {backgroundColor: "purple"}

    case "ghost":
      return {backgroundColor: "darkpurple"}

    case "psychic":
      return {backgroundColor: "#F11D68"}
    
    case "dragon":
      return {backgroundColor: "#aa00ff"}

    case "ground":
      return {backgroundColor: "#ffb700"}

    case "normal":
      return {backgroundColor: "grey"}

    case "fighting":
      return {backgroundColor: "#ad1f4e"}

    case "ice":
      return {backgroundColor: "#9ef8fa"}

    case "dark":
      return {backgroundColor: "#454854"}
    
    // case "ghost":
    //   return {backgroundColor: "red"}

    default: return null
      break;
  }
}


  if(isFecthing){
    return <h3>Cargando . . .</h3>
  }

  return(
    <main className='dark body p-6'>
      <h2>Pokédex</h2>

        <button onClick={allPokemonsAgain}>All pokemons</button>
        <TypeFilter pokeArr={pokemons} setVisible={setVisiblePokemons} getData={getData}/>

        <label htmlFor="search">Search</label>
        <input onChange={handleChange} type="text" name='search' value={search}/>

      <section className='pokedex-section'>
      {
        visiblePokemons && visiblePokemons.map(e=>{
          return  <article className='pokedex-card' key={e.id}>
                      <div>
                        <img src={e.sprites.front_default} alt="foto" />
                      </div>
                      <div>
                        <h5 style={{color: "whitesmoke"}}>{e.name}</h5>
                        {
                        e.types.map(obj=>{
                          
                          return <h4 style={colorType(obj.type.name)} key={obj.type.name + e.id}>{obj.type.name}</h4>
                        })
                        }
                      </div>
                      <Link to={`/pokemon/${e.name}/details`}><button>Details</button></Link>
                  </article>
        })
      }
      </section>
    </main>
  )

}

export default AllPokemons