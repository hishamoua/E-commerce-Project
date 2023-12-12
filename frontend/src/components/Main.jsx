import Roots from '../assets/images/ROOTS (1).png'
import { SliderData } from '../assets/Slidedata.js';
import video from '../assets/images/video.mp4'
import cuir from '../assets/images/cuir.jpg'
import { Link } from "react-router-dom";
import { Collection } from './Collection.jsx';

// import Carousel  from './Carousel.jsx'
import ImageSlider  from './ImageSlider'


export const Main = () => {
  return (
    <>
    <main className='home'>
     
     <ImageSlider slides={SliderData}/>

     <div className='section'>
     <img src={Roots} className="main-logo" alt="" />
      <h2 className='home-titles'>What We Do</h2>
      <p className='home-para'>
      Unique handcrafted leather goods for your everyday life We're Roots the brand and we make honest, 
      high quality, functional products to help you dress better. Our products are designed to reflect 
      our unique perspective and style, making the little things better, and we won't stop until we get
      it right. We combine incredible craftsmanship, a touch of heart and the finest materials.
       </p>
       <Link to='productPage'>
       <button className='product-btn'>Browse Product</button></Link>
     </div>
     <div className='section'>
      <div className="history">
      <div><img src={cuir} alt="" /></div>
      <div>
      <h2 className='home-titles'>History of leather</h2>
      <p className='home-para'>
      The leather we use in our Products is made of ﬁbre from the waste leaves of the pineapple plant.
      These leaves are a by-product from existing pineapple harvest,
      so the raw material requires no additional environmental resources to produce.
      </p>
      </div>
      </div>
     </div>
     <Collection />
     <div className="section">
      <h2 className="home-titles">Nos valeurs</h2>
      <div>
       <video src={video}  autoPlay loop muted></video>
      </div>
     </div>
     
    </main>
    </>
  )
}

export default Main;
