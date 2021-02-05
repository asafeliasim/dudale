import React from 'react'
import IceCreamMenue from '../components/menu/IceCreamMenue';
import icecreamsbg from '../asserts/img/icecreams/icecreamsbg.png';

const height = window.innerWidth > 960 ? '85rem' : '40rem'; 



const bgStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.1)),url(${icecreamsbg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:height
}
const IceCreamProducts = () => {
    return (
        <section className="chocolats" >
            
            <IceCreamMenue />  
        </section>
        
    )
}

export default IceCreamProducts;
