import React,{useState,useEffect} from 'react';
import benjerry from '../../../asserts/img/firmas/benandjerry.png';
import carbury from '../../../asserts/img/firmas/carbury.png';
import deepriver from '../../../asserts/img/firmas/deepriver.png';
import feldman from '../../../asserts/img/firmas/fledman.png';
import hdanzs from '../../../asserts/img/firmas/hdanzs.png';
import heidi from '../../../asserts/img/firmas/heidi.png';
import hosters from '../../../asserts/img/firmas/hosters.png';
import kinder from '../../../asserts/img/firmas/kinder.png';
import loacker from '../../../asserts/img/firmas/loacker.png';
import mam from '../../../asserts/img/firmas/m&m.png';
import magnum from '../../../asserts/img/firmas/magnum.png';
import mars from '../../../asserts/img/firmas/mars.png';
import milka from '../../../asserts/img/firmas/milka.jpg';
import nestle from '../../../asserts/img/firmas/nestle.png';
import nutella from '../../../asserts/img/firmas/nutella.png';
import oreo from '../../../asserts/img/firmas/oreo.png';
import pringles from '../../../asserts/img/firmas/pringles.png';
import resses from '../../../asserts/img/firmas/reeses.png';
import rigel from '../../../asserts/img/firmas/riegel.png';
import shtraous from '../../../asserts/img/firmas/shtraous.png';
import snickers from '../../../asserts/img/firmas/snickers.png';
import snyders from '../../../asserts/img/firmas/snyders.png';
import starbuks from '../../../asserts/img/firmas/starbuks.png';
import timtam from '../../../asserts/img/firmas/timtam.png';
import tobleron from '../../../asserts/img/firmas/tobleron.png';
import werthers from "../../../asserts/img/firmas/werther's.png";
import hersheys from '../../../asserts/img/firmas/hersheys.png'
import Slider from "react-slick";
import bgImg from '../../../asserts/img/footer.jpeg';
import bgMobileImg from '../../../asserts/img/backgroundfooter.png';


import FirmaCard from '../../firma/firmaCard';
import asafLogo from '../../../asserts/img/Logo.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const firmas = [
 
    {id:1,index:0,img: benjerry},{id:2,index:1,img: carbury},{id:3,index:2, img: `${deepriver}`},{id:4,index:3,img: `${feldman}`},{id:5,index:4,img: `${hdanzs}`},{id:6,index:5,img: `${heidi}`},
    {id:7,index:6,img: `${hosters}`},{id:8,index:7,img: `${kinder}`},{id:9,index:8,img: `${loacker}`},{id:10,index:9,img: `${mam}`},{id:11,index:10,img: `${magnum}`},{id:12,index:11,img: `${mars}`},
    {id:13,index:12,img: `${milka}`},{id:14,index:13,img: `${nestle}`},{id:15,index:14,img: `${nutella}`},{id:16,index:15,img: `${oreo}`},{id:17,index:16,img: `${pringles}`},{id:18,index:17,img: `${resses}`},
    {id:19,index:18,img: `${rigel}`},{id:20,index:19,img: `${shtraous}`},{id:21,index:20,img: `${snickers}`},{id:22,index:21,img:`${snyders}`},{id:23,index:22,img: `${starbuks}`},{id:24,index:23,img: `${timtam}`},
    {id:25,index:24,img: `${tobleron}`},{id:26,index:25,img: `${werthers}`},{id:27,index:26,img:hersheys}
]

const mobile = window.innerWidth <= 960 ? true : false;

const bgStyle = {
    backgroundImage: `url(${bgMobileImg})`,
    backgroundSize:'contain',
        //backgroundSize: '100rem'
}
const bgMobileStyle = {
    backgroundImage: `url(${bgMobileImg})`,
    backgroundSize:'cover',
    width: '100%',
    height: 'auto'

        //backgroundSize: '100rem'
}
const settingsThumbs = window.innerWidth > 960 ? {
    slidesToShow: 6,
    slidesToScroll:6,
    asNavFor: '.slider-for',
    //dots: true,
    centerMode: true,
    swipeToSlide: true,
    speed: 1800, 
    centerPadding: '10px'
  }: {
    slidesToShow: 2,
    slidesToScroll:6,
    asNavFor: '.slider-for',
    //dots: true,
    centerMode: true,
    swipeToSlide: true,
    speed: 1800, 
    centerPadding: '10px'
  }
 
const Footer = () => {
   
    
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    

    useEffect(()=>{      
        setNav1(slider1);
        setNav2(slider2);
    },[])
   
    

   

    return (
        <footer className="container-fluid footer" style={mobile? bgMobileStyle :bgStyle}>
            <div className="container py-5">
                <div className="mt-5">
                    <div className="slider-wrapper py-5">
                        <div className="thumbnail-slider-wrap mt-4">
                            <Slider
                                {...settingsThumbs}
                                asNavFor={nav1}
                                autoplay
                                infinite
                            
                                ref={firma => (setSlider2(firma))}>
                            
                                {firmas.map((firma) =>

                                <div className="slick-slide" key={firma.id}>
                                    <img className="slick-slide-image" src={firma.img} />
                                </div>

                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_asaf">
                <div className="d-flex justify-content-center">
                        <img src={asafLogo} alt="" className="footer_asaf-img"/>
                        <p className="footer_asaf-dsc">
                            
                        </p>
                </div>
            </div>
        </footer>
       
    )
}

export default Footer
