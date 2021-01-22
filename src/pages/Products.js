import React,{useEffect} from 'react'
import ProductList from '../components/products/ProductList';



const height = window.innerWidth > 960 ? '50rem' : '40rem'; 
const mobile = window.innerWidth <= 960 ? true : false;

const style = {
    background: 'linear-gradient(to bottom,rgba(248, 246, 233, 0.7),rgba(109, 55, 43, 1))'
}
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
        <section className="chocolats" id="products" style={style}>  
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
