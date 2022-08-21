import React from 'react'
import {useParams} from "react-router-dom"

function SingleGame() {

    const {url} = useParams()

  return (
    <main>
        <article>
             <iframe src={`https://www.minijuegos.com/embed/${url}`} style={{height: "100%", width:"100%"}} allowFullScreen></iframe>
        </article>
    </main>
  )
}

export default SingleGame