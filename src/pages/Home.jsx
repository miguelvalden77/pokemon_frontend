import bg1 from "../img/background-home-1.jpg" 
import bg2 from "../img/initials.jpg" 
import bg3 from "../img/pokeballs.jpg" 
import wp1 from "../img/wallpaper-1.jpg"
import wp2 from "../img/pokeball.jpg"
import wp3 from "../img/wallpaper-3.jpg"
import {Carousel} from "react-bootstrap"
import {useState, useEffect} from "react"
import { useMediaQuery } from 'react-responsive'

function Home() {

  const [isFecthing, setIsFetching] = useState(true)

  // Mediaquery
  const isBigScreen = useMediaQuery({query: "(min-width: 960px)"})
  // const isMediumScreen = useMediaQuery({query: "(min-width: px)"})

  useEffect(()=>{
    setIsFetching(false)
  }, [])

  if(isFecthing){
    return <h3 className='body dark p-6'>Cargando . . .</h3>
}

  return (

    <Carousel>
      <Carousel.Item>
          {
            isBigScreen 
            ?
            <img
              style={{backgroundSize: "cover", overflow: "hidden", maxHeight: "100vh"}}
              className="d-block w-100"
              src={bg1}
              alt="First slide"
              /> 
              :
              <img
              style={{backgroundSize: "cover", overflow: "hidden", maxHeight: "100vh"}}
              className="d-block w-100"
              src={wp2}
              alt="First slide"
              />
          }
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{backgroundSize: "cover", overflow: "hidden", maxHeight: "100vh"}}
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{backgroundSize: "cover", overflow: "hidden", maxHeight: "100vh"}}
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

//     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img style={{backgroundSize: "cover", overflow: "hidden", maxHeight: "100vh"}} src={bg1} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={bg2} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="..." className="d-block w-100" alt="..."/>
//     </div>
//   </div>
// </div>
  )
}

export default Home