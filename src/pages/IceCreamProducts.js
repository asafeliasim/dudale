import React from 'react'
import IceCreamMenue from '../components/menu/IceCreamMenue';
import icecreamsbg from '../asserts/img/icecreams/icecreamsbg.jpeg';

const height = window.innerWidth > 960 ? '50rem' : '40rem'; 
const mobile = window.innerWidth <= 960 ? true : false;



const style = {
    background: 'linear-gradient(to bottom,rgba(248, 246, 233, 0.7),rgba(109, 55, 43, 1))'
}

const bgStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.1)),url(${icecreamsbg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:height
}
const IceCreamProducts = () => {
    return (
        <section className="chocolats" >
            <div style={bgStyle}>
       
            </div>
            <IceCreamMenue />  
        </section>
        
    )
}

export default IceCreamProducts;
