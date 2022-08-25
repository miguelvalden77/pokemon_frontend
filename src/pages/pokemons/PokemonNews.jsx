import { useEffect, useState, useContext } from 'react'
import AddPost from '../../components/AddPost'
import { getPost, deletePost } from '../../services/post.services'
import {Link} from "react-router-dom"
import CreateComments from '../../components/CreateComments'
import {createComment, deleteComment} from "../../services/comment.services"
import {AuthContext} from "../../context/auth.context"
import {Button} from "react-bootstrap"


function PokemonNews() {

    const {user} = useContext(AuthContext)

    const [news, setNews] = useState([])
    const [isFecthing, setIsFetching] = useState(true)
    const [click, setClick] = useState(false)

    useEffect(()=>{
        getData()
        setIsFetching(false)
    }, [])

    const getData = async ()=>{
        try{
            const response = await getPost()
            setNews(response.data.reverse())
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

    const handleClick = ()=> setClick(true)

    if(isFecthing){
        return <h3 className='body dark p-6'>Cargando . . .</h3>
    }

  return (
    <main className='body dark p-6'>

        <h3 style={{color: "whitesmoke"}}>Pokemon news</h3>
        
        {
            click ? <AddPost setTheClick={setClick} dataFunction={getData} id={user._id}/> : <Button style={{marginBottom: "1.5rem"}} variant='outline-success' onClick={handleClick}>Upload a new!</Button>
        }
        <div style={{display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-evenly", alignItems: "center"}}>
        {
            news.map(e=>{
                return <article style={{borderBottom: "1px dashed gray",
                paddingBottom: "2rem",
                justifyContent: 'space-around', 
                alignItems: "center", 
                display: "flex", 
                flexDirection: "column", 
                gap: "1.5rem", 
                width: "100%"}} key={e._id}>

                    <img src={e.picture} alt="foto" width={410} height={350} />

                    <h3 style={{color: "whitesmoke"}}>Title: {e.title}</h3>
                    <p style={{maxWidth: "400px", color: "whitesmoke"}}>{e.description}</p>
                    <section style={{display: "flex", gap: "1.5rem"}}>
                    {   
                        user._id === e.owner && <Button variant='outline-danger' onClick={async ()=> deleteThePost(e)}>Delete your post</Button>
                    } 
                    {   
                        user._id === e.owner && <Link to={`/pokemon/${e._id}/news`}> <Button variant='outline-secondary'>Update your post</Button></Link>
                    }
                    </section>
                    <section>
                        {
                            e.comments.map((ej, i)=>{
                                return <div key={ej + i}>
                                    <p style={{color: "whitesmoke"}}>{ej.message}</p>
                                    {ej.owner === user._id && <Button variant='outline-warning' onClick={()=>deleteTheComment(ej, e._id)}>Delete comment</Button>}
                                </div>
                            })
                        }
                    </section>
                    
                    <CreateComments dataFunction={getData} postId={e._id}/>
                </article>
            })
        } 
        </div>
    </main>
  )
}

export default PokemonNews