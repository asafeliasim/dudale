import React from 'react'
import snacks from '../../asserts/img/snacks.png';
import nutela from '../../asserts/img/creams.png';
import iceCream from '../../asserts/img/icecreams2.jpeg';
import fruits from '../../asserts/img/fruits.png';
import candy from '../../asserts/img/chocolate.png';

import drinks from '../../asserts/img/drink.jpeg';
import productTitle from '../../asserts/img/producTitle.jpeg'
import {LinkContainer} from 'react-router-bootstrap';

const style = {
    textDecoration:'none',
    color: '#000'
}


const Menu = () => {
    return (
        <section className="menu" id="productsection">
            <div className="headline d-flex justify-content-center">
               <img src={productTitle} alt="" className="menu_title-img"/>
            </div>
            
            <div className="container products">
                <div className="row mx-auto">
                    <div className="col-12 col-md-4 my-5">
                        <LinkContainer to="/creams" style={style}>  
                            <div className="box">
                                <div className="box_img">
                                    <img  className="img" alt="" src={nutela}/>
                                </div>
                            </div> 
                        </LinkContainer>
                    </div>
                    <div className="col-12 col-md-4 my-5">
                    <LinkContainer to="/icecreams" style={style}>  
                    <div className="box">
                        <div className="box_img">
                            <img  className="img" alt="" src={iceCream}/>
                        </div>
                      
                    </div> 
                    </LinkContainer>
                    </div>
                    <div className="col-12 col-md-4 my-5">
                        <LinkContainer to="/snacks" >  
                            <div className="box">
                                <div className="box_img" style={{height:'24rem!important'}}>
                                    <img  className="img" alt="" src={snacks} />
                                </div>
                            </div> 
                        </LinkContainer>
                    </div>
                
                    <div className="col-12 col-md-4 my-5">
                    <LinkContainer to="/chocolats/#products" style={style}>  
                    <div className="box">
                        <div className="box_img">
                            <img  className="img" alt="" src={candy}/>
                        </div>
                      
                    </div> 
                    </LinkContainer>
                    </div>
                    <div className="col-12 col-md-4 my-5">
                    <LinkContainer to="/drinks" style={style}>  
                    <div className="box">
                        <div className="box_img">
                            <img  className="img" alt="" src={drinks}/>
                        </div>
                    </div> 
                    </LinkContainer>
                    </div>
                    <div className="col-12 col-md-4 my-5">
                        <LinkContainer to="/fruits" style={style}>  
                        <div className="box">
                            <div className="box_img">
                                <img  className="img" alt="" src={fruits}/>
                            </div>
                           
                        </div> 
                        </LinkContainer>
                    </div>
                   
                </div>
            
            </div>
           
           
        </section>
    )
}

export default Menu
