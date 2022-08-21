import { useEffect, useState, useContext } from 'react'
import AddPost from '../../components/AddPost'
import { getPost, deletePost } from '../../services/post.services'
import {Link} from "react-router-dom"
import CreateComments from '../../components/CreateComments'
import {createComment, deleteComment} from "../../services/comment.services"
import {AuthContext} from "../../context/auth.context"


function PokemonNews() {

    const {user} = useContext(AuthContext)

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

    const deleteTheComment = async (obj)=>{
        try{
            if(obj.owner === user._id){
                await deleteComment(obj._id)
                getData()
                return
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const deleteThePost = async (obj)=>{
        try{
            if(obj.owner === user._id){
                await deletePost(obj._id)
                getData()
                return
            }
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    <main>

        <h3>Pokemon news</h3>

        <AddPost id={user._id}/>

        {
            news.map(e=>{
                return <article key={e._id}>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                    <CreateComments postId={e._id}/>
                    <section>
                        {
                            e.comments.map((e, i)=>{
                                return <div key={e + i}>
                                    <p>{e.message}</p>
                                    <button onClick={()=>deleteTheComment(e)}>Delete comment</button>
                                </div>
                            })
                        }
                    </section>
                    {
                        user._id === e.owner && <button onClick={async ()=> deleteThePost(e)}>Delete</button>
                    } 
                    {
                         user._id === e.owner && <Link to={`/pokemon/${e._id}/news`}><button>Update</button></Link>
                    }
                    
                </article>
            })
        }

    </main>
  )
}

export default PokemonNews