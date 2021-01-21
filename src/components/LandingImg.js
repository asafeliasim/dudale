import React,{Fragment} from 'react';
import mobilebg from '../asserts/img/mbg.png';
import bgImg2 from '../asserts/img/newHomeBg.png';

import iceCreamImg from '../asserts/img/bg.jpeg';
import Divider from '../components/layout/Divider';


const height = window.innerWidth > 960 ? '65rem' : '50rem'; 
const mobile = window.innerWidth <= 960 ? true : false;
const bgStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(255, 237, 207, 0.1),rgba(255, 237, 207, 0.2)),url(${bgImg2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:height
}
const mobileStyle = {
    backgroundImage: `linear-gradient(to bottom,rgba(255, 237, 207, 0.1),rgba(255, 237, 207, 0.2)),url(${mobilebg})`,
    backgroundPositionY: '10rem',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height:'30rem'
}
const LandingImg = () => {
    return (
        <Fragment>
            <div style={!mobile? bgStyle : null }>
                {mobile && <img src={mobilebg} style={{width:'100%',height:'30rem',marginTop:'10rem'}} alt="" />}
            </div>
          
        </Fragment>
      
    )
}

export default LandingImg
