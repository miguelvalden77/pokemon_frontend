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
    const [isFecthing, setIsFetching] = useState(true)

    useEffect(()=>{
        getData()
        setIsFetching(false)
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

    const deleteTheComment = async (obj, postId)=>{
        try{
            if(obj.owner === user._id){
                const info = {userId: user._id, postId: postId}
                await deleteComment(obj._id, info)
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
                const deletedPost = await deletePost(obj._id)
                const updatedPosts = user.posts.filter(e=> e !== deletedPost.data._id)
                user.posts = updatedPosts
                getData()
                return
            }
        }
        catch(error){
            console.log(error)
        }
    }

    if(isFecthing){
        return <h3 className='body dark p-6'>Cargando . . .</h3>
    }

  return (
    <main className='body dark p-6'>

        <h3 style={{color: "whitesmoke"}}>Pokemon news</h3>

        <AddPost dataFunction={getData} id={user._id}/>

        {
            news.map(e=>{
                return <article key={e._id}>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                    <CreateComments dataFunction={getData} postId={e._id}/>
                    <section>
                        {
                            e.comments.map((ej, i)=>{
                                return <div key={ej + i}>
                                    <p>{ej.message}</p>
                                    {ej.owner === user._id && <button onClick={()=>deleteTheComment(ej, e._id)}>Delete comment</button>}
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