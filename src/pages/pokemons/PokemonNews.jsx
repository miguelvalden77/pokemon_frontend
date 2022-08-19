import { useEffect, useState } from 'react'
import AddPost from '../../components/AddPost'
import { getPost, deletePost } from '../../services/post.services'


function PokemonNews() {

    const [news, setNews] = useState([])

    useEffect(()=>{
        getData()
    }, [])

    const getData = async ()=>{
        try{
            const response = await getPost()
            setNews(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <main>

        <h3>Pokemon news</h3>

        <AddPost/>

        {
            news.map(e=>{
                return <article key={e._id}>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                    <button onClick={async ()=>{
                        await deletePost(e._id)
                        getData()
                    }}>Delete</button>
                </article>
            })
        }

    </main>
  )
}

export default PokemonNews