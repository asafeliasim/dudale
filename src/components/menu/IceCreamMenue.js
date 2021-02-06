import React,{useState} from 'react'
import shtraws from '../../asserts/img/iceCreamsFirma/strauss.png';
import fldman from '../../asserts/img/iceCreamsFirma/fldman.png';
import motagim from '../../asserts/img/iceCreamsFirma/motagim.png';
import nestleIMG from '../../asserts/img/iceCreamsFirma/nestle.png';
import {shtrawsTypes,nestleTypes,feldmanTypes,modelsTypes} from '../../data/icecreamstype';
import IceCreamHeader from '../icecream/IceCreamHeader';


const models = [
    {
        id:1,
        img: shtraws
    },
    {
        id:2,
        img:fldman
    },
    {
        id:3,
        img:nestleIMG
    },
    {
        id:4,
        img:motagim
    }
]
        /*  <div className="d-flex justify-content-around ">
                <div className="icecreams_model shtraous">
                        <img src={shtraws} alt="" style={{width:'14rem',margin:'0 4rem'}}/>      
                        <div className="icecreams_model-items mt-5">
                           
                               
                                   {shtrawsTypes.map(type=> 
                                       <IceCreamHeader key={type.id} type={type} /> 
                                    )}
                                
                                
                        </div>
                </div>
                <div className="icecreams_model shtraous">
                    <img src={fldman} alt="" style={{width:'14rem',margin:'0 4rem'}}/>      
                    <div className="icecreams_model-items mt-5">                       
                        {feldmanTypes.map(type=> 
                            <IceCreamHeader key={type.id} type={type} /> 
                        )}                    
                    </div>
                </div>
                <div className="icecreams_model shtraous">
                    <img src={nestle} alt="" style={{width:'14rem',margin:'0 4rem'}}/>      
                    <div className="icecreams_model-items mt-5">                       
                        {nestleTypes.map(type=> 
                            <IceCreamHeader key={type.id} type={type} /> 
                        )}                    
                    </div>
                </div>
            <div className="icecreams_model shtraous">
                <img src={motagim} alt="" style={{width:'14rem',margin:'0 4rem'}}/>      
                <div className="icecreams_model-items mt-5">                       
                    {modelsTypes.map(type=> 
                        <IceCreamHeader key={type.id} type={type} /> 
                    )}                    
                </div>
            </div>       
              
             
            </div> */
const IceCreamMenue = () => {
    const [shtraus,setShtraus] = useState(false);
    const [feldman,setFeldman] = useState(false);
    const [nestle,setNestle] = useState(false);
    const [brands,setBrands] = useState(false);
    const shtrausClicked = () => setShtraus(!shtraus);
    const feldmanClicked = () => setFeldman(!feldman);
    const nestleClicked = () => setNestle(!nestle);
    const brandsClicked = () => setBrands(!brands);
    
    return (
        <>
        <div className="container mb-5 ice">
            <div className="row mx-auto ice_row mt-5">
                <div className="col-10 col-md-6 ice_row-col">
                    <div className={shtraus ? "icecreams_model shtraus" : "icecreams_model "}>
                        <div className="d-flex justify-content-center" onClick={shtrausClicked}> 
                            <img src={shtraws} alt="" style={{width:'20rem',margin:'0 4rem'}} className="icecream-img"/> 
                        </div>
                    <div className={shtraus ? "icecreams_model-items " : "shtraus_none"}>           
                        {shtrawsTypes.map(type=> 
                            <IceCreamHeader key={type.id} type={type} /> 
                        )}           
                    </div>
                    </div>
                </div>
                <div className="col-10 col-md-6 ice_row-col">
                    <div className={feldman ? "icecreams_model feldman": "icecreams_model"}>
                        <div className="d-flex justify-content-center" onClick={feldmanClicked}> 
                            <img src={fldman} alt="" style={{width:'20rem',margin:'0 4rem'}} className="icecream-img"/> 
                        </div>
                        <div className={feldman ? "icecreams_model-items mt-5": "feldman_none"}>           
                            {feldmanTypes.map(type=> 
                                <IceCreamHeader key={type.id} type={type} /> 
                            )}           
                        </div>
                    </div>
                </div>     
           </div> 
           <div className="row mx-auto ice_row">
                <div className="col-10 col-md-6 ice_row-col ">
                <div className={nestle ? "icecreams_model nestle" : "icecreams_model"}>
                        <div className="d-flex justify-content-center" onClick={nestleClicked}> 
                            <img src={nestleIMG} alt="" style={{width:'20rem',margin:'0 4rem'}} className="icecream-img"/> 
                        </div>
                        <div className={nestle ? "icecreams_model-items mt-5": "nestle_none"}>           
                            {nestleTypes.map(type=> 
                                <IceCreamHeader key={type.id} type={type} /> 
                            )}           
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-6 ice_row-col">
                    <div className={brands ? "icecreams_model brands":"icecreams_model"}>
                            <div className="d-flex justify-content-center" onClick={brandsClicked}> 
                                <img src={motagim} alt="" style={{width:'20rem',margin:'0 4rem'}} className="icecream-img"/> 
                            </div>
                            <div className={brands ? "icecreams_model-items mt-5": "brands_none"}>           
                                {modelsTypes.map(type=> 
                                    <IceCreamHeader key={type.id} type={type} /> 
                                )}           
                            </div>
                        </div>
                    </div>
           </div> 
            
        </div>
       
        </>
    )
}

export default IceCreamMenue
