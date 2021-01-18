import React,{useState} from 'react'

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
    return (
        <section className="special py-5" id="special">
            <div className="special_headers">
                <div className={special ? "special_headers-header active" : "special_headers-header"} onClick={specialsClick}>
                <h4>מבצעים</h4>
                </div>
                <div  className={news ? "special_headers-header active" :"special_headers-header"} onClick={newsClick}>
                <h4>חדשים</h4>
                </div>
                <div  className={recomend? "special_headers-header active":"special_headers-header"} onClick={recomendClick}>
                <h4>מומלצים</h4>
                </div>   
            </div>
            <div className="special_container container mt-5">
                <h5 className={special?"present":"none"}>מבצעים</h5>
                <h5 className={news? "present": "none"}>חדשים</h5>
                <h5 className={recomend? "present": "none"}>מומלצים</h5>
            </div>
        </section>
    )
}

export default Special
