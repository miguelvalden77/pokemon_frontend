// import { useEffect, useState } from 'react'
// import {Link} from "react-router-dom"
// import axios from "axios"
// import { getAPokemon } from '../services/pokemon.services'

// function PokeCards({pokemonArr}) {

//     const [pokeArr, setPokeArr] = useState([])

//     useEffect(()=>{
//         getData()
//     }, [])

    // const getInfo = async ()=>{
    //     const newArr = []
    //     pokemonArr.forEach( e=>{
    //         axios.get(e.url)
    //         .then(response=>{
    //             newArr.push(response.data)
    //             //pokeArr.push(response.data)
    //         })
    //         .catch(err=>console.log(err))
    //     })

    //     //console.log(newArr)

    //     setPokeArr(newArr)
    // }

//   return (
//     <main>
//         {
//           pokeArr &&  pokeArr.map(e=>{
//                 return <article key={e.name}>
//                     <img src={e.sprites.front_default} alt="foto" />
//                     <p>{e.name}</p>
//                 </article>
//             })
//         }
//     </main>
//   )
// }

// export default PokeCards