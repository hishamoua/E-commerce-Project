import collection1 from '../assets/images/collection1.png'
import collection2 from '../assets/images/collection2.png'
import collection3 from '../assets/images/collection3.png'
import collection4 from '../assets/images/collection4.png'
import Roots from '../assets/images/ROOTS (1).png'
import { SliderData } from '../assets/Slidedata.js';
import video from '../assets/images/video.mp4'
import cuir from '../assets/images/cuir.jpg'
import { Link } from "react-router-dom";

// import Carousel  from './Carousel.jsx'
import ImageSlider  from './ImageSlider'


export const Main = () => {
  return (
    <>
    <main className='home'>
     
     <ImageSlider slides={SliderData}/>

     <div className='section'>
     <img src={Roots} className="main-logo" alt="" />
      <h2 className='home-titles'>About Us</h2>
      <p className='home-para'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      </p>
      </div>
      </div>
     </div>
     <div className='section'>
      <h2 className='home-titles'>Collection</h2>
      <div className="images-collection">
       <div className='cell'>
       <img src={collection1} className='collection' alt="" />
       <a href='#'>SAC PRO</a>
       </div>
       <div className='cell'>
       <img src={collection2} className='collection' alt="" />
       <a href="#">SAC VOYAGE</a>
       </div>
       <div className='cell'>
       <img src={collection3} className='collection' alt="" />
       <a href="#">Sacs S-W</a>
       </div>
       <div className='cell'>
       <img src={collection4} className='collection' alt="" />
       <a href="#">ACCESSORIES</a>
       </div>
      </div>
     </div>
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
