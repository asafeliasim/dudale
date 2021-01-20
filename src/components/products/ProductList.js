import React from 'react'

const ProductList = ({products,col}) => {
 

    return (
            <>
                {
                    products && products.length > 0 && products.map((product)=> 
                   (
                        <div key={product.id} className={col? `col-12 mx-auto col-md-${col} `:"col-10  mx-auto col-md-3 "}>   
                            <img src={product.img} className="img-fluid" style={{height:'60%'}} alt=""/>
                        </div>
                   )
                 
                ) 
                }
            </>    
        
        )
}

export default ProductList;
