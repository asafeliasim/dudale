import React,{useState,useEffect} from 'react'

import {shtrausMagnum,tilons,soleros,mezopeas,ices,kids,snacks,family,shocobo} from '../data/iceCreams/iceCreamTypes';
import {feldmanIces,feldmanSnacks,feldmanMazopa,feldmanTyopla,granitas,galits,glidals} from '../data/iceCreams/feldman';
import {benjerrys,milkas,cadubarys,oreos,haagens,kinders,mnms,brandSnacks} from '../data/iceCreams/brands';
import {crunches,lafrutas,nestleTilons,kuklidas,nestleIces,nestleKids} from '../data/iceCreams/nestle';


const IceCreamTypaPage = ({match}) => {
    console.log(match);
    const {title} = match.params;
    //const img = title === "shtrous-magnum" ? magnum  : tilon
    const bgStyle = {
       height:'20rem'
    }

    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=> {
        setProductsByType();
        setLoading(true);
         // eslint-disable-next-line 
    },[])
    console.log(products);
    const setProductsByType = () => {
        switch(title){
            case "shtrous-magnum":
                return setProducts([
                    ...shtrausMagnum
                ])
            case 'shtrous-tilon':
                return setProducts([
                   ...tilons
                ])
            case 'shtrous-solero':
                return setProducts([
                    ...soleros
                ]) 
            case 'shtrous-mezhope':
                return setProducts([
                    ...mezopeas
                ])
            case 'shtrous-ice':
                return setProducts([
                    ...ices
                ])
            case 'shtrous-kids':
                return setProducts([
                    ...kids
                ]) 
            case 'shtrous-snacks':
                return setProducts([
                    ...snacks
                ]) 
            case 'shtrous-fameliy':
                return setProducts([
                    ...family
                ])
            case 'shtrous-shocobo':
                return setProducts([
                    ...shocobo
                ]) 
                
            case 'feldman-ice': 
                return setProducts([
                    ...feldmanIces
                ])
            case 'feldman-matophe':
                return setProducts([
                    ...feldmanMazopa
                ])
            case 'feldman-yople':
                return setProducts([
                    ...feldmanTyopla
                ])     
    
            case 'feldman-snacks': 
                return setProducts([
                    ...feldmanSnacks
                ])
         
            case 'feldman-granita': 
                return setProducts([
                    ...granitas
                ])
        
            case 'feldman-galit': 
                return setProducts([
                    ...galits
                ])
      
            case 'feldman-glidal': 
                return setProducts([
                  ...glidals
            ])
            case 'brands-benjeery':
                return setProducts([
                    ...benjerrys
                ])
            case 'brands-milka':
                return setProducts([
                       ...milkas
                ]) 
            case 'brands-cadbury':
                return setProducts([
                     ...cadubarys 
                ])  
            case 'brands-oreo':
                return setProducts([
                    ...oreos
                ])
            case 'brands-haagen':
                return setProducts([
                    ...haagens
                ])
            case 'brands-kinder':
                return setProducts([
                    ...kinders
                ])
                
             case 'brands-m&m':
                return setProducts([
                    ...mnms
                ])
            
            case 'brands-creams':
                return setProducts([
                    ...brandSnacks
                ])
            case 'nestle-crunch':
                return setProducts([
                   ...crunches
                ])
            case 'nestle-lafrutta':
                return setProducts([
                   ...lafrutas
                ])
                
            case 'nestle-tilon':
                return setProducts([
                  ...nestleTilons
                ])

            case 'nestle-cookilda':
                return setProducts([
                  ...kuklidas
                ])
            case 'nestle-ices':
                return setProducts([
                    ...nestleIces
                ])
            case 'nestle-kids':
                return setProducts([
                    ...nestleKids
                ])                                      
            default:
                return products;

        }
    }
    const mobile = window.innerWidth <= 960 ? true : false;
    return (
        <section className="icecreamtype">
            <div style={bgStyle} />
            <div className="container mt-5">
            <div className="row">
                {!loading ? (
                    <h1>Loading</h1>
                )
                :
                (
                
                        products.map((product)=> 
                        <div key={product.id} className="col-12 pro-col col-md-3 mx-auto">   
                            <img src={product.img} className="img-fluid" style={{height:'60%'}} alt=""/>
                        </div>
                        )
                    
                
                )   
            }
            
            </div>
        
            </div>
        </section>
        
    )
}

export default IceCreamTypaPage
