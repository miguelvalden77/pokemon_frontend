import axios from "axios"

const service = axios.create({baseURL:"http://localhost:5005/api"})

const registerUser = (newUser)=>{
    return service.post("/auth/signup", newUser)
}

const loginUser = (newUser)=>{
    return service.post("/auth/login", newUser)
}

export {registerUser, loginUser}