import React from 'react'
import LandingImg from '../components/LandingImg';
import Menu from '../components/menu/Menu';
import bgImg from '../asserts/img/creanBg.jpeg';
import Special from '../components/special/Special';
import Divider from '../components/layout/Divider';




const Home = () => {
 
    return (
        <div className="homePage" id="head">
            <LandingImg />
            <Menu />
            <Divider />
            <Special />
        </div>
    )
}

export default Home
