import { useEffect, useState, useContext } from 'react'
import { getAPost, updatePost } from '../../services/post.services'
import { useParams, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import { Button } from "react-bootstrap"
import { upload } from '../../services/upload.services'

function UpdatePostForm() {

  const { user } = useContext(AuthContext)

  const { id } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState({ title: "", description: "", picture: "" })
  const { title, description } = data
  const [isFecthing, setIsFetching] = useState(true)
  const [urlImage, setUrlImage] = useState("")

  useEffect(() => {
    getValues()
    setIsFetching(false)
  }, [])

  const getValues = async () => {

    try {
      const post = await getAPost(id)
      setData({ title: post.data.title, description: post.data.description, picture: post.data.picture })
    }
    catch (error) {
      navigate("/error")
    }

  }

  const handleChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = async e => {

    e.preventDefault()
    const info = { title, description, picture: urlImage }

    try {

      const post = await getAPost(id)

      if (user._id === post.data.owner._id) {
        await updatePost(id, info)
        navigate("/pokemon/news")
      }
    }
    catch (error) {
      navigate("/error")
    }
  }

  const handleImgUpload = async e => {

    const form = new FormData()
    form.append("image", e.target.files[0])

    try {
      const response = await upload(form)
      setUrlImage(response.data.imageUrl)
    }
    catch (error) {
      navigate("/error")
    }
  }

  if (isFecthing) {
    return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  return (
    <main className='dark body main-form p-6'>
      <form className='register-form'>

        <p className='label'>Title</p>
        <input className='input' onChange={handleChange} type="text" name='title' value={title} />

        {/* <p className='label'>Picture</p>
        <input className='input' onChange={handleChange} type="text" name='picture' value={picture}/> */}
        <div className='input-container'>
          <p className='label post-picture'>Picture</p>
          <input className='input picture-input' onChange={handleImgUpload} type="file" />
          <img style={{ margin: "auto", paddingTop: "0.5rem" }} src={urlImage ? urlImage : data.picture} alt="foto" width={150} height={190} />
        </div>

        <p className='label'>Description</p>
        <input className='input' onChange={handleChange} type="text" name='description' value={description} />

        <Button onClick={handleSubmit} variant='outline-light' className='button-form'>Update your new!</Button>

      </form>
    </main>
  )
}

export default UpdatePostForm
