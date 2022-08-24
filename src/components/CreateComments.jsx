import { useEffect, useState, useContext } from 'react'
import {createComment} from '../services/comment.services'
import {AuthContext} from "../context/auth.context"
import {Button} from "react-bootstrap"


function CreateComments({postId, dataFunction}) {

  const {user} = useContext(AuthContext)

  const [message, setMessage] = useState("")

  const handleChange = e=> setMessage(e.target.value)
  const handleSubmit = async e=>{
    e.preventDefault()
    const info = {message, postId, userId: user._id}
    await createComment(info)
    dataFunction()
    setMessage("")
  }

  return (
    <main>

        <form style={{display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center"}}>

          <textarea style={{color: "whitesmoke", background: "black", borderRadius: "5px", padding: "0.5rem"}} onChange={handleChange} value={message} name="message" cols="30" rows="4"></textarea>
          
          <Button variant='outline-primary' onClick={handleSubmit}>Create a comment</Button>

        </form>

    </main>
  )
}

export default CreateComments