import React,{Fragment,useState,useEffect} from 'react'
import LandingImg from '../components/LandingImg';
import Menu from '../components/menu/Menu';

import Special from '../components/special/Special';
import Divider from '../components/layout/Divider';


import Modal from '../components/layout/Modal';
const mobile = window.innerWidth <= 960 ? true : false;


const Home = () => {
    const [popupOpen,setPopupOpen] = useState(false);
   

    const handlePopUpOpen = () => setPopupOpen(true);

    useEffect(() => {
        if(!mobile){
            setTimeout(()=> {
                handlePopUpOpen()
            },5000)
        }
      
      }, [])

    const popupCloseHandle = () => setPopupOpen(false);

  /*   const handleScroll = () => {
        if(window.scrollY > 120){
            setPopupOpen(true);
     }
    } */
 

    return (
        <Fragment>
        <Modal show={popupOpen} />
        <div className="homePage" id="head" onClick={popupCloseHandle}>
            <LandingImg />
            <Menu />
            <Divider />
            <Special />
           
        </div>
        </Fragment>
    )
}

export default Home
