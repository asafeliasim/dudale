import React from 'react'

const mobile = window.innerWidth <= 960 ? true : false;
const ProductList = ({products,col}) => {
 

    return (
            <>
                {
                    products && products.length > 0 && products.map((product)=> 
                   (
                        <div key={product.id} className={mobile && col? `col-12 pro-col mx-auto col-md-${col}`: mobile ? "col-10 pro-col mx-auto col-md-3 " : col ? `col-12 mx-auto col-md-${col}`: "col-10 mx-auto col-md-3" }>   
                            <img src={product.img} className="img-fluid" style={{height:'60%'}} alt=""/>
                        </div>
                   )
                 
                ) 
                }
            </>    
        
        )
}

export default ProductList;
