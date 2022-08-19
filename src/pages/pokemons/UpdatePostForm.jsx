import React, { useState } from 'react'
import { updatePost } from '../../services/post.services'
import {useParams} from "react-router-dom"

function UpdatePostForm() {

  const {id} = useParams()

  const [data, setData] = useState({title: "", description: "", picture: ""})
  const {title, description, picture} = data

  const handleChange = e => setData({...data, [e.target.value]: e.target.value})
  const handleSubmit = async e => {

    e.preventDefault()
    const info = {title, description, picture}

    try{
      await updatePost(id, info)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="title">Title</label>
      <input onChange={handleChange} type="text" name='title' value={title}/>

      <label htmlFor="picture">Picture</label>
      <input onChange={handleChange} type="text" name='picture' value={picture}/>

      <label htmlFor="description">Description</label>
      <input onChange={handleChange} type="text" name='description' value={description}/>

      <button>Update your new!</button>

    </form>
  )
}

export default UpdatePostForm