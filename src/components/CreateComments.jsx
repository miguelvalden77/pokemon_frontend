import { useEffect, useState, useContext } from 'react'
import {createComment} from '../services/comment.services'
import {AuthContext} from "../context/auth.context"


function CreateComments({postId}) {

  const {user} = useContext(AuthContext)

  const [message, setMessage] = useState("")

  const handleChange = e=> setMessage(e.target.value)
  const handleSubmit = e=>{
    e.preventDefault()
    const info = {message, postId, userId: user._id}
    createComment(info)
  }

  return (
    <main>

        <form onSubmit={handleSubmit}>

          <textarea onChange={handleChange} value={message} name="message" cols="30" rows="10"></textarea>
          
          <button>Create comment</button>

        </form>

    </main>
  )
}

export default CreateComments