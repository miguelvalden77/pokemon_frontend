import React, { useEffect, useState } from 'react'
import {createComment} from '../services/comment.services'

function CreateComments({postId}) {

  const [message, setMessage] = useState("")

  const handleChange = e=> setMessage(e.target.value)
  const handleSubmit = e=>{
    e.preventDefault()
    const info = {message, postId}
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