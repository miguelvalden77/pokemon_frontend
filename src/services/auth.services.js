import axios from "axios"

const service = axios.create({baseURL:"http://localhost:5005/api"})

service.interceptors.request.use((config)=>{

    const token = localStorage.getItem("authToken")

    if(token){
        config.headers = {
            authorization: `Bearer ${token}`
        }
    }

    return config

})

const registerUser = (newUser)=>{
    return service.post("/auth/signup", newUser)
}

const loginUser = (newUser)=>{
    return service.post("/auth/login", newUser)
}

const verifyService = (token)=>{
    return service.get("/auth/verify", token)
}

export {registerUser, loginUser, verifyService}