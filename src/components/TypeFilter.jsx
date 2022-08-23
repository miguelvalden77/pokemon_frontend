

function TypeFilter({pokeArr, setVisible, getData}) {

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
        console.log(newPokeArr)
        setVisible(newPokeArr)
        //getData()
    }


  return (
    <section>
        {
            types.map(e=>{
                return <button key={e} onClick={()=> filter(pokeArr, e)}>{e}</button>
            })
        }
    </section>
  )
}

export default TypeFilter