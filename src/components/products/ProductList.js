import React from 'react'

const ProductList = ({products,col}) => {
 

    return (
            <>
                {
                    products && products.length > 0 && products.map((product)=> 
                   (
                        <div key={product.id} className={col? `col-6 col-md-${col} mx-auto`:"col-6 col-md-3 mx-auto"}>   
                            <img src={product.img} className="img-fluid" style={{height:'60%'}} alt=""/>
                        </div>
                   )
                 
                ) 
                }
            </>    
        
        )
}

export default ProductList;
