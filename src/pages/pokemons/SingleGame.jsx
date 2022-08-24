import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

function SingleGame() {

    const {url} = useParams()
    const [isFecthing, setIsFetching] = useState(true)

    useEffect(()=>{
        setIsFetching(false)
    }, [])

    if(isFecthing){
      return <h3 className='body dark p-6'>Cargando . . .</h3>
  }

  return (
    <main className='body'>
        <article className='body'>
             <iframe src={`https://www.minijuegos.com/embed/${url}`} style={{height: "100vh", width:"100%"}} allowFullScreen></iframe>
        </article>
    </main>
  )
}

export default SingleGame