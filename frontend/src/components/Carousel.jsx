import HoverCarousel from "hover-carousel";
import img1 from '../assets/images/33.jpg'
import img2 from '../assets/images/cover.png'
import img3 from '../assets/images/31.jpg'
import img4 from '../assets/images/32 (1).jpg'

const Carousel = () => {
  const images = [
   img1,
   img2,
   img3,
   img4
  ]
  return (
   <div>
     <HoverCarousel images={images} />
   </div>
 );
}


export default Carousel;