import { useState, useContext } from 'react'
import { createPost } from '../services/post.services'
import {AuthContext} from "../context/auth.context"

function AddPost({id}) {

    const {user} = useContext(AuthContext)

    const [data, setData] = useState({title: "", picture: "", description: ""})
    const {title, description, picture} = data

    const handleChange = e => setData({...data, [e.target.name]: e.target.value})
    const handleSubmit = e => {
        e.preventDefault()
        const info = {title, description, picture, owner: user._id}
        createPost(info, id)
    }

  return (
    <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>
        <input onChange={handleChange} type="text" name='title' value={title}/>

        <label htmlFor="picture">Picture</label>
        <input onChange={handleChange} type="text" name='picture' value={picture}/>

        <label htmlFor="description">Description</label>
        <textarea onChange={handleChange} name="description" cols="30" rows="10" value={description}></textarea>

        <button>Upload a new post!</button>

    </form>
  )
}

export default AddPost