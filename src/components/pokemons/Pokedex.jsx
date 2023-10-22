import { Link } from "react-router-dom"


const Pokedex = ({ id }) => {

    return (
        <Link style={{ textDecoration: "none" }} key={id} to={`/pokemon/${id}/details`}>
            <article className='pokedex-card'>
                <div>
                    <img width={"100%"} style={{ maxHeight: "270px" }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="foto" />
                </div>
            </article>
        </Link>
    )

}

export default Pokedex