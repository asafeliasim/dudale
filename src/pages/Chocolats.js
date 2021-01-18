import React from 'react'
import imgBG from '../asserts/img/chocolatsbg.jpeg';
import chocolateData from './chocolateData';
import ChocolateList from '../components/products/chocolats/ChocolateList';


const height = window.innerWidth > 960 ? '65rem' : '50rem'; 
const bgStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.1)),url(${imgBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:height
}
const Chocolats = () => {
    return (
        <section className="chocolats">
        <div style={bgStyle}>
                
        </div>
        <div className="container mt-5">
        <div className="row py-5">
                <ChocolateList chocolats={chocolateData}/>
            </div>
        </div>
        </section>
    )
}

export default Chocolats
