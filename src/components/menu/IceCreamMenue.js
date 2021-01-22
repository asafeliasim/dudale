import React from 'react'
import shtraws from '../../asserts/img/iceCreamsFirma/strauss.png';
import fldman from '../../asserts/img/iceCreamsFirma/fldman.png';
import motagim from '../../asserts/img/iceCreamsFirma/motagim.png';
import nestle from '../../asserts/img/iceCreamsFirma/nestle.png';

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

const IceCreamMenue = () => {
    return (
        <div className="container py-5">
            <div className="d-flex justify-content-center">
                {models.map(model=> 
                    <a href="#" key={model.id} className="icecreams_model">
                        <img src={model.img} alt="" style={{width:'14rem',margin:'0 4rem'}}/>        
                    </a>
                )}
               
            </div>
        </div>
    )
}

export default IceCreamMenue
