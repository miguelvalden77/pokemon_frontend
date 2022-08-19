import axios from "axios"

const service = axios.create({baseURL:"http://localhost:5005/api"})

const createPost = info =>{
    return service.post("/post/create", info)
}

const getPost = ()=>{
    return service.get("/post/all")
}

const deletePost = (id)=>{
    return service.delete(`/post/${id}/delete`)
}

export {createPost, getPost, deletePost}