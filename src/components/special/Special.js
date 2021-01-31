import React,{useState} from 'react'
import Sales from './Sales';

import {iceCreamsSalesData,recommendedItems,newItems} from './salesData';



const Special = () => {
    const [special,setSpecial] = useState(true);
    const [news,setNews] = useState(false);
    const [recomend,setRecomend] = useState(false);

    const specialsClick = () => {
        setSpecial(true);
        setNews(false);
        setRecomend(false);
    }
    const newsClick = () => {
        setNews(true);
        setSpecial(false);
        setRecomend(false);
    }
    const recomendClick = () => {
        setRecomend(true);
        setSpecial(false);
        setNews(false);
    } 
    // <img src={salePng} className="special-sale_icon" />
    return (
        <section className="special py-5" id="special" >
            <div className="special_headers">
                <div className={special ? "special_headers-header active special-sale" : "special_headers-header special-sale"} onClick={specialsClick}>
                    <div className="d-flex">
                        <h4>מבצעים</h4>
                      
                    </div>
                </div>
                <div  className={news ? "special_headers-header active" :"special_headers-header"} onClick={newsClick}>
                    <h4>חדשים</h4>
                </div>
                <div  className={recomend ? "special_headers-header active" :"special_headers-header"} onClick={recomendClick}>
                    <h4>מומלצים</h4>
                </div>
               
            </div>
            <div className={special? "special_container-sales mt-5" : "special_container container mt-5"}>
                <div className={special?"present container-fluid special_sales":"none"}>
                    <Sales  products={iceCreamsSalesData}/>
                </div>
                <div className={news?"present container-fluid special_sales":"none"}>
                <div className="row news">
                    {
                    newItems.map((item)=> 
                        <div className="col-6 col-md-4 mx-auto news_col" key={item.id}>
                            <img src={item.img} className="news_img" />
                        </div>
                    )}
                </div>
                </div>
                
                <div className={recomend?"present container-fluid special_recommended":"none"}>
                    <div className="row recomend">
                        {
                            recommendedItems.map((recommendedItem)=> 
                                <div className="col-6 col-md-4 mx-auto recomend_col" key={recommendedItem.id}>
                                    <img src={recommendedItem.img} className="recomend_img" />
                                </div>
                            )}
                    </div>
                </div>
              
            </div>
        </section>
    )
}

export default Special
