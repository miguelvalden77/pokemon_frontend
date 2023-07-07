import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { colorType } from "../../utils/colors"


const Pokedex = ({pokemon}) =>{

    return(
        <article className='pokedex-card' key={pokemon.id}>
            <div>
                <img src={pokemon.sprites.front_default} alt="foto" />
                <h5 style={{color: "black"}}>{pokemon.name}</h5>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {
                pokemon.types.map(obj=>{
                    return <h4 className='pokemonType' style={colorType(obj.type.name)} key={obj.type.name + pokemon.id}>{obj.type.name}</h4>
                })
            }
            </div>
            <Link to={`/pokemon/${pokemon.name}/details`}><Button variant="outline-dark">Details</Button></Link>
        </article>
    )

}

export default Pokedex