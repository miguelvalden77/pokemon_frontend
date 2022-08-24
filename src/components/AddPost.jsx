import { useState, useContext } from 'react'
import { createPost } from '../services/post.services'
import {AuthContext} from "../context/auth.context"
import {Button} from "react-bootstrap"
import { upload } from '../services/upload.services'
import {useNavigate} from "react-router-dom"

function AddPost({id, dataFunction, setTheClick}) {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate()

    const [data, setData] = useState({title: "", description: ""})
    const {title, description} = data

    const [urlImage, setUrlImage] = useState("")

    const handleChange = e => setData({...data, [e.target.name]: e.target.value})
    const handleSubmit = async e => {
        e.preventDefault()
        const info = {title, description, owner: user._id, picture: urlImage}

        try{
          const post = await createPost(info, id)
          user.posts.push(post.data._id)
          dataFunction()
          navigate("/pokemon/news")
          setData({title: "", description: ""})
          setUrlImage("")
          setTheClick(false)
        }
        catch(error){
          console.log(error)
        }
    }

    const handleImgUpload = async e=>{

      console.log(e.target.files[0])

      const form = new FormData()
      form.append("image", e.target.files[0])

      try{
        const response = await upload(form)
        console.log(response)
        setUrlImage(response.data.imageUrl)
      }
      catch(error){
        console.log(error)
        //Poner despues los navigate
      }
    }

  return (
    <article className='main-form post' style={{borderBottom: "1px dashed gray", paddingBottom: "2rem"}}>
      <form style={{alignItems: "flex-start"}} className="register-form">

          <div className='input-container'>
            <p className='label post-label'>Title</p>
            <input className='input' onChange={handleChange} type="text" name='title' value={title}/>
          </div>

          <div className='input-container'>
            <p className='label post-picture'>Picture</p>
            <input className='input picture-input' onChange={handleImgUpload} type="file" />
            <img style={{margin: "auto", paddingTop: "0.5rem"}} src={urlImage} alt="foto" width={150} height={190}/>
          </div>

          <div className='input-container'>
          <p className='label textarea'>Description</p>
          <textarea className='input' onChange={handleChange} name="description" cols="30" rows="10" value={description}></textarea>
          </div>


          <Button onClick={handleSubmit} className='form-button' variant='outline-light'>Upload a new post!</Button>

      </form>
    </article>
  )
}

export default AddPost