import React,{useState,useEffect} from 'react'



const ChocolateList = ({chocolats}) => {
   const [products,setProducts] = useState([]);

   useEffect(()=>{
    setProducts(chocolats);
   },[setProducts])
    return (
            <>
                {
                    chocolats && chocolats.length > 0 && chocolats.map((chocolate)=> 
                   (
                        <div key={chocolate.id} className="col-6 col-md-3 mx-auto">   
                            <img src={chocolate.img} className="img-fluid" style={{height:'60%'}} />
                        </div>
                   )
                 
                ) 
                }
            </>    
        
    )
}

export default ChocolateList
