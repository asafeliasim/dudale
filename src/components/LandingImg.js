import React,{Fragment} from 'react';
import bgImg from '../asserts/img/productsbg4.jpg';
import iceCreamImg from '../asserts/img/bg.jpeg';
import Divider from '../components/layout/Divider';


const height = window.innerWidth > 960 ? '65rem' : '50rem'; 
const bgStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(255, 237, 207, 0.1),rgba(255, 237, 207, 0.2)),url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:height
}

const LandingImg = () => {
    return (
        <Fragment>
            <div style={bgStyle}>
                
            </div>
          
        </Fragment>
      
    )
}

export default LandingImg
