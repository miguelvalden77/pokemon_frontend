import service from "./config.service"


const createComment = info =>{
    return service.post("/comment/create", info)
}

const deleteComment = id =>{
    return service.delete(`/comment/${id}/delete`)
}


export {createComment, deleteComment}