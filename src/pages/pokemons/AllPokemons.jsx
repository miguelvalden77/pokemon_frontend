import { useEffect, useState, useContext } from 'react'
import { getAllPokemons, getAPokemon } from '../../services/pokemon.services'
import {Link} from "react-router-dom"
import axios from 'axios'
import Search from '../../components/Search'
import TypeFilter from '../../components/TypeFilter'
import {AuthContext} from "../../context/auth.context"
import {Button} from "react-bootstrap"


function AllPokemons(){

  const {pokemones} = useContext(AuthContext)

  const [pokemons, setPokemons] = useState([])
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons)
  const [search, setSearch] = useState("")
  const [isFecthing, setIsFetching] = useState(true)

  useEffect(()=>{
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
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  return(
    <main className='dark body p-6'>
      <h2 style={{color: "whitesmoke", marginBottom: "2rem"}}>Pokédex</h2>

        <Button onClick={allPokemonsAgain} style={{marginBottom: "2rem"}} variant='outline-light'>All pokemons</Button>

        <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
            <TypeFilter pokeArr={pokemons} setVisible={setVisiblePokemons}/>
            <div display={{position: "relative"}}>
              <label style={{color: "whitesmoke", padding: "2rem"}} htmlFor="search">Search</label>
              <input onChange={handleChange} type="text" name='search' value={search}/>
            </div>
        </div>

      <section className='pokedex-section'>
      {
        visiblePokemons && visiblePokemons.map(e=>{
          return  <article className='pokedex-card' key={e.id}>
                      <div>
                        <img src={e.sprites.front_default} alt="foto" />
                        <h5 style={{color: "black"}}>{e.name}</h5>
                      </div>
                      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        {
                        e.types.map(obj=>{
                          
                          return <h4 className='pokemonType' style={colorType(obj.type.name)} key={obj.type.name + e.id}>{obj.type.name}</h4>
                        })
                        }
                      </div>
                      <Link to={`/pokemon/${e.name}/details`}><Button variant="outline-dark">Details</Button></Link>
                  </article>
        })
      }
      </section>
    </main>
  )

}

export default AllPokemons
