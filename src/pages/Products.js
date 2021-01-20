import React,{useEffect} from 'react'
import ProductList from '../components/products/ProductList';



const height = window.innerWidth > 960 ? '50rem' : '20rem'; 

const Chocolats = ({products,img,col}) => {
    const bgStyle = {
        backgroundImage: `linear-gradient(to bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.1)),url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height:height
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <section className="chocolats" id="products">
        <div style={bgStyle}>
                
        </div>
        <div className="container mt-5">
        <div className="row py-5">
                <ProductList products={products } col={col}/>
            </div>
        </div>
        </section>
    )
}

export default Chocolats
