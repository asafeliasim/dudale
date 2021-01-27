import React from 'react'
import Slider from "react-slick";
import {iceCreamsSalesData} from './salesData';
import Footer from '../layout/footer/Footer';

const mobile = window.innerWidth <= 960 ? true : false;
const rows = mobile ? 1 : 3;
const show = mobile ? 1 : 3;
const move = mobile ? 1 : 3;
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    
    return (
      <div
        className={className}
        style={{...style,display: "block",background:'#000'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
const Sales = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: move,
        rows:3,
     
        
      };
    return (
        
      <>
        
         <Slider {...settings}>
        {iceCreamsSalesData.map((sale)=> 
            <div key={sale.id}>
              <img src={sale.img} alt="" style={{width:'20rem'}}/>
            </div>
          )}
         
        </Slider>
      
      </> 
    )
}

export default Sales
