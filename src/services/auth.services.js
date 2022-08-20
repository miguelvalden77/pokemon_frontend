import service from "./config.service"

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