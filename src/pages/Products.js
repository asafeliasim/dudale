import React,{useEffect} from 'react'
import ProductList from '../components/products/ProductList';



const height = window.innerWidth > 960 ? '85rem' : '40rem'; 
const mobile = window.innerWidth <= 960 ? true : false;


const Chocolats = ({products,img,col}) => {
    const bgStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.2)),url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height:height,
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <section className="chocolats" id="products">  
        <div style={bgStyle}>
                
        </div>
        <div className="container mt-5">
        <div className={mobile ? "row pro-row py-5": "row py-5"}>
                <ProductList products={products } col={col}/>
            </div>
        </div>
        </section>
    )
}

export default Chocolats
