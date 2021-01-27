import React from 'react'
import shtraws from '../../asserts/img/iceCreamsFirma/strauss.png';
import fldman from '../../asserts/img/iceCreamsFirma/fldman.png';
import motagim from '../../asserts/img/iceCreamsFirma/motagim.png';
import nestle from '../../asserts/img/iceCreamsFirma/nestle.png';
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
        img:nestle
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
    return (
        <div className="container py-2 ice py-auto">
            <div className="row mx-auto ice_row mt-5">
                <div className="col-12 col-md-6 ice_row-col ">
                    <div className="icecreams_model">
                        <div className="d-flex justify-content-center"> 
                            <img src={shtraws} alt="" style={{width:'20rem',margin:'0 4rem'}}/> 
                        </div>
                    <div className="icecreams_model-items mt-5">           
                        {shtrawsTypes.map(type=> 
                            <IceCreamHeader key={type.id} type={type} /> 
                        )}           
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ice_row-col ">
                    <div className="icecreams_model">
                        <div className="d-flex justify-content-center"> 
                            <img src={fldman} alt="" style={{width:'20rem',margin:'0 4rem'}}/> 
                        </div>
                        <div className="icecreams_model-items mt-5">           
                            {feldmanTypes.map(type=> 
                                <IceCreamHeader key={type.id} type={type} /> 
                            )}           
                        </div>
                    </div>
                </div>     
           </div> 
           <div className="row mx-auto ice_row">
                <div className="col-12 col-md-6 ice_row-col ">
                <div className="icecreams_model">
                        <div className="d-flex justify-content-center icecreams_model-img"> 
                            <img src={nestle} alt="" style={{width:'20rem',margin:'0 4rem'}}/> 
                        </div>
                        <div className="icecreams_model-items mt-5">           
                            {nestleTypes.map(type=> 
                                <IceCreamHeader key={type.id} type={type} /> 
                            )}           
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ice_row-col ">
                    <div className="icecreams_model">
                            <div className="d-flex justify-content-center"> 
                                <img src={motagim} alt="" style={{width:'20rem',margin:'0 4rem'}}/> 
                            </div>
                            <div className="icecreams_model-items mt-5">           
                                {modelsTypes.map(type=> 
                                    <IceCreamHeader key={type.id} type={type} /> 
                                )}           
                            </div>
                        </div>
                    </div>
           </div>
                
        </div>
    )
}

export default IceCreamMenue
