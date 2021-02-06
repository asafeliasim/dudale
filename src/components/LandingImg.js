import React,{Fragment} from 'react';
import mobilebg from '../asserts/img/mbg.png';
import bgImg2 from '../asserts/img/mainbackground2.png';




const height = window.innerWidth > 960 ? '85rem' : '50rem'; 
const mobile = window.innerWidth <= 960 ? true : false;
const bgStyle = {
    backgroundImage: `url(${bgImg2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:height
}
const mobileStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(255, 237, 207, 0.1),rgba(255, 237, 207, 0.2)),url(${bgImg2})`,
    backgroundPositionY: '10rem',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:'30rem'
} 
const LandingImg = () => {
    return (
        <Fragment>
            <div style={!mobile? bgStyle : mobileStyle }>
             
            </div>
          
        </Fragment>
      
    )
}

export default LandingImg
