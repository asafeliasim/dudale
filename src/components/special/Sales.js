import React from 'react'
import Slider from "react-slick";


const mobile = window.innerWidth <= 960 ? true : false;
const rows = mobile ? 3 :2;
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
  
const Sales = ({products}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: move,
        rows:rows
        
        
      };
    return (
        
      <div className="slick">
        
         <Slider {...settings}>
        {products.map((sale)=> 
            <div key={sale.id}>
              <img src={sale.img} alt="" className="special_sale-img"/>
            </div>
          )}
         
        </Slider>
      
      </div> 
    )
}

export default Sales
