import React from 'react'
import ProductList from '../components/products/ProductList';



const height = window.innerWidth > 960 ? '65rem' : '50rem'; 

const Chocolats = ({products,img}) => {
    const bgStyle = {
        backgroundImage: `linear-gradient(to bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.1)),url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height:height
    }
    return (
        <section className="chocolats">
        <div style={bgStyle}>
                
        </div>
        <div className="container mt-5">
        <div className="row py-5">
                <ProductList products={products}/>
            </div>
        </div>
        </section>
    )
}

export default Chocolats
