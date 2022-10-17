import { createContext, useContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";
import axios from "axios"

const AuthContext = createContext()

function AuthWrapper (props){

    const [isUserActive, setIsUserActive] = useState(false)
    const [user, setUser] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const [pokemones, setPokemons] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getData()
        authenticateUser()
    }, [])


    const getData = async ()=>{
        const num = 100
        try{
          const PokeArr = []
          for(let i = 1; i < num; i++){
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            PokeArr.push(pokemon.data)
          }
        
          setPokemons(PokeArr)
          
        }
        catch(error){
          console.log(error)
        }
      }

    const authenticateUser = async ()=>{

        try{
            const response = await verifyService()

            setIsUserActive(true)
            setUser(response.data)
            setIsFetching(false)
        }
        catch(error){
            console.log(error)
            setIsUserActive(false)
            setUser(null)
            setIsFetching(false)
        }
    }

    const passedContext = {authenticateUser, user, isUserActive, setUser, setIsUserActive, pokemones}

    if(isFetching === true){
        return <h3>Is validating ...</h3>
    }

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthWrapper, AuthContext}