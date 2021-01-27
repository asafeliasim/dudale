import React from 'react'


const IceCreamHeader = ({type}) => {
   
    return (
        <div className="icecreams_model-item d-flex justify-content-between">
            <a href={`/icecreams/${type.href}`} className="icecreams_model-link">
                <h2>{type.title}</h2>
            </a>
            <span className="icecreams_model-icon">
             <i class="fas fa-arrow-circle-left"/>
            
            </span> 
        </div>
    )
}

export default IceCreamHeader
