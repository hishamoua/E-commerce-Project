import collection1 from '../assets/images/collection1.png'
import collection2 from '../assets/images/collection2.png'
import collection3 from '../assets/images/collection3.png'
import collection4 from '../assets/images/collection4.png'

export const Collection = () => {
  return (
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
  )
}

export default Collection;
