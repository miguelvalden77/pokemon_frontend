import { useState, useContext } from 'react'
import { createPost } from '../services/post.services'
import {AuthContext} from "../context/auth.context"
import {Button} from "react-bootstrap"
import { upload } from '../services/upload.services'

function AddPost({id, dataFunction}) {

    const {user} = useContext(AuthContext)

    const [data, setData] = useState({title: "", description: ""})
    const {title, description} = data

    const [urlImage, setUrlImage] = useState("")

    const handleChange = e => setData({...data, [e.target.name]: e.target.value})
    const handleSubmit = async e => {
        e.preventDefault()
        const info = {title, description, owner: user._id}
        const post = await createPost(info, id)
        user.posts.push(post.data._id)
        dataFunction()
    }

    const handleImgUpload =async e=>{

      const form = new FormData()
      form.append("image", e.target.file[0])

      try{
        const response = await upload(form)
        setUrlImage(response.data.imageUrl)
      }
      catch(error){
        console.log(error)
        //Poner despues los navigate
      }
    }

  return (
    <article className='main-form post'>
      <form onSubmit={handleSubmit} style={{alignItems: "flex-start"}} className="register-form">

          <div className='input-container'>
            <p className='label post-label'>Title</p>
            <input className='input' onChange={handleChange} type="text" name='title' value={title}/>
          </div>

          <div className='input-container'>
            <p className='label post-label'>Picture</p>
            <input className='input' onChange={handleImgUpload} type="file" name='picture' value={urlImage}/>
            <img src={urlImage} alt="foto" />
          </div>

          <div className='input-container'>
          <p className='label textarea'>Description</p>
          <textarea className='input' onChange={handleChange} name="description" cols="30" rows="10" value={description}></textarea>
          </div>

          <input type="file" />

          <Button className='form-button' variant='outline-light'>Upload a new post!</Button>

      </form>
    </article>
  )
}

export default AddPost