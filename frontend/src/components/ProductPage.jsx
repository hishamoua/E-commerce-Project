import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.png'
import p5 from '../assets/images/p5.png'
import p6 from '../assets/images/p6.png'
import p7 from '../assets/images/p7.png'
import p8 from '../assets/images/p8.png'
import p9 from '../assets/images/p9.png'
// import p10 from '../assets/images/p10.png'
// import p11 from '../assets/images/p11.png'
// import p12 from '../assets/images/p12.png'
import { Header } from './Header'
import { Footer } from './Footer'
import { Contact } from './Contact'
import { Product } from './Product'

export const ProductPage = () => {
  return (
    <>
     <Header />
     <div className="product-page">
        <Product image1={p1} image2={p2} image3={p3}/>
        <Product image1={p4} image2={p5} image3={p6}/>
        <Product image1={p7} image2={p8} image3={p9}/>
      </div>
     <Contact />
     <Footer />
    </>
  )
}
