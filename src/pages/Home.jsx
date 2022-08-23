import bg1 from "../img/background-home-1.jpg" 
import bg2 from "../img/initials.jpg" 
import bg3 from "../img/pokeballs.jpg" 
import {Carousel} from "react-bootstrap"

function Home() {


  return (

    <Carousel>
      <Carousel.Item>
        <img
        style={{backgroundSize: "cover", overflow: "hidden", maxHeight: "100vh"}}
          className="d-block w-100"
          src={bg1}
          alt="First slide"
        />
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