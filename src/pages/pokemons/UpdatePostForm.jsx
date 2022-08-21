import { useEffect, useState, useContext } from 'react'
import { getAPost, updatePost } from '../../services/post.services'
import {useParams, useNavigate} from "react-router-dom"
import {AuthContext} from "../../context/auth.context"

function UpdatePostForm() {

  const {user} = useContext(AuthContext)

  const {id} = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState({title: "", description: "", picture: ""})
  const {title, description, picture} = data

  useEffect(()=>{
    getValues()
  }, [])

  const getValues = async ()=>{

    try{
      const post = await getAPost(id)
      setData({title: post.data.title, description: post.data.description, picture: post.data.picture})
    }
    catch(error){
      console.log(error)
    }

  }

  const handleChange = e => setData({...data, [e.target.name]: e.target.value})
  
  const handleSubmit = async e => {

    e.preventDefault()
    const info = {title, description, picture}

    try{

      const post = await getAPost(id)
      console.log(post.data.owner)
      if(user._id === post.data.owner._id){
        await updatePost(id, info)
        navigate("/pokemon/news")
      }
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