import axios from "axios"

const service = axios.create({baseURL:"http://localhost:5005/api"})

const createComment = info =>{
    return service.post("/comment/create", info)
}

const deleteComment = id =>{
    return service.delete(`/comment/${id}/delete`)
}


export {createComment, deleteComment}