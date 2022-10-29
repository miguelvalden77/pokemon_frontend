import axios from "axios"
const service = axios.create({baseURL:`${process.env.REACT_APP_SERVER_URL}`})

service.interceptors.request.use((config)=>{

    const token = localStorage.getItem("authToken")

    if(token){
        config.headers = {
            authorization: `Bearer ${token}`
        }
    }

    return config

})

export default service