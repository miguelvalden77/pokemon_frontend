

function PhotoSection({photo_1, photo_2, photo_3}){

    return <section className='sprites_section'>
            <img src={photo_1} alt="foto" />
            <img className="main_photo" src={photo_2} alt="foto" />
            <img src={photo_3} alt="foto" />
           </section>
}

export default PhotoSection