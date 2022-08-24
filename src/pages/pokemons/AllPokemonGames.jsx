import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"

function AllPokemonGames() {

  const [isFecthing, setIsFetching] = useState(true)

  useEffect(()=>{
    setIsFetching(false)
  },[])

  if(isFecthing){
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  return (
    <main style={{display: "flex", gap: "2rem", flexWrap: "wrap", padding: "2rem", paddingTop: "7rem", justifyContent: "space-evenly"}} className='dark body p-6'>
        <article>
        {/* <iframe src='https://www.minijuegos.com/embed/pokemon-mystery-dungeon-red-rescue-team' style={{height: "100%", width:"100%"}} allowfullscreen></iframe> */}
        <img  style={{margin: "auto", borderRadius: "6px"}} src="https://www3.minijuegosgratis.com/v3/games/thumbnails/205843_1.jpg" alt="foto" />
        <h3 style={{color: "whitesmoke"}}>Mystery Dungeon</h3>
        <Link to={"/pokemon/pokemon-mystery-dungeon-red-rescue-team/games"}><Button variant="outline-light">Jugar</Button></Link>
        </article>

        <article>
            <img style={{margin: "auto", borderRadius: "6px"}} src="https://www.pokeclicker.com/assets/images/pokeclickerlogo.png" width={330} height={200} alt="foto" />
            {/* <iframe src='https://www.minijuegos.com/embed/pokeclicker-io' style='width:100%;height:100%;' frameborder='0' allowfullscreen></iframe> */}
            <h3 style={{color: "whitesmoke"}}>Pokeclicker</h3>
            <Link to={"/pokemon/pokeclicker-io/games"}><Button variant="outline-light">Jugar</Button></Link>
        </article>

        <article>
          <img style={{margin: "auto", borderRadius: "6px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tyoHn0WpK4ddYO5IVFWRV9K6xIuqi6pLq34GdHCCAecJI-oCyWcpNR0cYnJj6TTa-dk&usqp=CAU" alt="foto" width={330} height={200} />
          <h3 style={{color: "whitesmoke"}}>Pokemon Unbound</h3>
          <Link to={"/pokemon/pokemon-unbound/games"}><Button variant="outline-light">Jugar</Button></Link>
        </article>

        <article>
          <img style={{margin: "auto", borderRadius: "6px"}} src="https://www2.minijuegosgratis.com/v3/games/thumbnails/219327_1.jpg" alt="foto" width={330} height={200} />
          <h3 style={{color: "whitesmoke"}}>Pokemon Clover</h3>
          <Link to={"/pokemon/pokemon-clover/games"}><Button variant="outline-light">Jugar</Button></Link>
        </article>

        <article>
          <img style={{margin: "auto", borderRadius: "6px"}} src="https://www2.minijuegosgratis.com/v3/games/thumbnails/207822_1.jpg" alt="foto" width={330} height={200} />
          <h3 style={{color: "whitesmoke"}}>Pokemon Dark Rising 2</h3>
          <Link to={"/pokemon/pokemon-dark-rising-2/games"}><Button variant="outline-light">Jugar</Button></Link>
        </article>

        <article style={{height: "300px", overflow: "hidden"}}>
          <img style={{margin: "auto", borderRadius: "6px"}} src="https://www5.minijuegosgratis.com/v3/games/thumbnails/208310_1.jpg" alt="foto" width={330} height={200} />
          <h3 style={{color: "whitesmoke"}}>Pokemon Sapphire</h3>
          <Link to={"/pokemon/pokemon-sapphire/games"}><Button variant="outline-light">Jugar</Button></Link>
        </article>

    </main>
  )
}

export default AllPokemonGames