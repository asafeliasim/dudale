import React from 'react'

const ProductList = ({products}) => {
 

    return (
            <>
                {
                    products && products.length > 0 && products.map((product)=> 
                   (
                        <div key={product.id} className="col-6 col-md-3 mx-auto">   
                            <img src={product.img} className="img-fluid" style={{height:'60%'}} />
                        </div>
                   )
                 
                ) 
                }
            </>    
        
        )
}

export default ProductList;
