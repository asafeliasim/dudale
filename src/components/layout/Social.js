import React from 'react'

const Social = () => {
    return (     
        <ul className="social_list">
            <li>
                <a href="#" className="sociallogo">
                    <span className="sociallogo_phone">
                        <i className="fas fa-phone-square"/>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/%D7%93%D7%95%D7%93%D7%90-%D7%9C--103380641398127/" target="_blank" className="sociallogo">
                    <span className="sociallogo_facebook">
                        <i className="fab fa-facebook-square" />
                    </span>          
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/dooda.le/" target="_blank" className="sociallogo">
                    <span className="sociallogo_instagram">
                        <i className="fab fa-instagram-square"/>
                    </span>
                </a>
                </li>
            <li>
                <a href="#" className="sociallogo">
                    <span className="sociallogo_whatsapp">
                        <i className="fab fa-whatsapp-square"/>
                    </span>
                </a>
            </li>
        </ul> 
    )
}

export default Social
 