import React,{useState,useEffect} from 'react';

import Navbar from './components/layout/navbar/Navbar';
import Home from './pages/Home';
import Social from './components/layout/Social';
import Footer from './components/layout/footer/Footer';
import chocolateData from './pages/chocolateData';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import chocolateBG from './asserts/img/chocolatsbg.jpeg';
import Products from './pages/Products';

import fruits from './data/fruits';
import drinks from './data/drinks';


import snacksbg from './asserts/img/snacks/snacksbg.jpeg';
import creamsbg from './asserts/img/creams/creams.jpeg';
import fruitsbg from './asserts/img/fruits/fruitsbg.jpeg';
import icecreamsbg from './asserts/img/icecreams/icecreamsbg.jpeg';
import drinksbg from './asserts/img/drinks/drinksbg.jpeg';

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
  return (
    <>
    <Navbar />
    <div className="social">
    <Social />
  </div>  
        <Router>
        <Route path="/" component={Home} exact />
        <Route path="/chocolats" render={()=><Products products={chocolateData} img={chocolateBG}/>} />
        <Route path="/fruits" render={()=><Products products={fruits} img={fruitsbg}/>}/>
        <Route path="/drinks" render={()=><Products products={drinks} img={drinksbg}/>}/>
        <Route path="/snacks" render={()=><Products img={snacksbg}/>}/>
        <Route path="/creams" render={()=><Products  img={creamsbg}/>}/>
        <Route path="/icecreams" render={()=><Products  img={icecreamsbg}/>}/>
        </Router>
        <Footer /> 
    </>
  
   
  );
}

export default App;
