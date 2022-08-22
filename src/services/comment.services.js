import service from "./config.service"


const createComment = info =>{
    return service.post("/comment/create", info)
}

const deleteComment = (id, info) =>{
    return service.post(`/comment/${id}/delete`, info)
}


export {createComment, deleteComment}