import React from 'react'

const firmaCard = ({firma}) => {
    
    const {img,index} = firma;
    console.log(img);
    return (
        <div id={`card-${index}`} className="firmacard"> 
            <img src={img} />
        </div>
    )
}

export default firmaCard
