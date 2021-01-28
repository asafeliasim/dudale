import React,{useState,useEffect} from 'react';

import Navbar from './components/layout/navbar/Navbar';
import Home from './pages/Home';
import Social from './components/layout/Social';
import Footer from './components/layout/footer/Footer';
import chocolateData from './pages/chocolateData';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import chocolateBG from './asserts/img/chocolatsbg.jpeg';
import Products from './pages/Products';
import IceCreamProducts from './pages/IceCreamProducts';
import IceCreamTypaPage from './pages/IceCreamTypaPage';

import fruits from './data/fruits';
import drinks from './data/drinks';
import creams from './data/creams';
import snacks from './data/snacks';


import snacksbg from './asserts/img/snacks/snacksbg.jpg';
import creamsbg from './asserts/img/creams/creams.png';
import fruitsbg from './asserts/img/fruits/fruitdrinks.png';

import drinksbg from './asserts/img/drinks/drinksbg.png';

const mobile = window.innerWidth <= 960 ? true : false;

const App = () => {
  const [scroll,setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  }, [])

  const handleScroll = () => {
    if(window.scrollY > 1){
      if(!scroll){
        setScroll(true)
      }else{
        if(scroll){
          setScroll(false);
        }
      }
    }
  }
  // {!mobile ? <Footer /> : null} 
  return (
      <>
      
      <div className="social">
      <Social />
      </div> 
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/chocolats" render={()=><Products products={chocolateData} img={chocolateBG}/>} />
          <Route path="/fruits" render={()=><Products products={fruits} img={fruitsbg}/>}/>
          <Route path="/drinks" render={()=><Products products={drinks} img={drinksbg}/>}/>
          <Route path="/snacks" render={()=><Products products={snacks} img={snacksbg} />}/>
          <Route path="/creams" render={()=><Products products={creams} img={creamsbg} col={4}/>}/>
          <Route path="/icecreams/:title" component={IceCreamTypaPage}/>
          <Route path="/icecreams" render={()=><IceCreamProducts />}/>
      </Switch>
      </Router>
      <Footer />
   
    </>
  
   
  );
}

export default App;
