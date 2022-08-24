import {Button} from "react-bootstrap"

function TypeFilter({pokeArr, setVisible}) {

    const types = ["normal", "fighting", "flying", "poison", "grass", "ground", "steel", "water", "fire", "bug", "ghost", "rock", "electric", "psychic", "dragon", "ice", "fairy", "dark"]

    const filter = (Arr, type)=>{
        setVisible(pokeArr)
        const newPokeArr = []
        for(let i = 0; i < Arr.length; i++){
            const pokemon = Arr[i]
            const key = Arr[i].types
            for(let i = 0; i < key.length; i++){
                const typePoke = key[i]
                if(typePoke.type.name === type){
                    newPokeArr.push(pokemon)
                }
            }
        }
        setVisible(newPokeArr)
        //getData()
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
        }
      }


  return (
    <section style={{ 
        overflowX: "hidden", 
        borderRadius: "10px", 
        padding: "0.5rem", 
        display: "flex", 
        height: "80px", 
        overflowX: "scroll", 
        maxWidth: "400px"}}>
        {
            types.map(e=>{
                return <Button className="button-filter" variant="outline-light" key={e} onClick={()=> filter(pokeArr, e)} >{e}</Button>
            })
        }
    </section>
  )
}

export default TypeFilter