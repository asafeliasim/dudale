import React, { useEffect,useState } from 'react'
import logo from '../../../asserts/img/dudalogo.png';
import {LinkContainer} from 'react-router-bootstrap';

const Navbar = () => {
    const [navbar,setNavbar] = useState(false);
    const [hamburgerClicked,setHamburgerClicked] = useState(false);

    useEffect(() => {
        setHamburgerClicked(false);

    }, [])
    const changeBackground = () => {
        console.log(window.scrollY);
       if(window.scrollY > 400){
           setNavbar(true)

       }else{
           setNavbar(false)
           console.log(navbar);
       }
    }
    const copyNumber = () => {
        var number = "0546384221";
       

        document.execCommand('מועתק');

    }
    const hamburgerClick = () => {
        console.log(hamburgerClicked);
        setHamburgerClicked(!hamburgerClicked)
    }
    const icons = [
        "fas fa-times",
        "fas fa-bars"
    ]
    window.addEventListener('scroll',changeBackground);
    return (
        <nav className={navbar? "nav white":"nav"}>
            <img className="nav_logo" src={logo} />   
                <div className="nav_icon" onClick={hamburgerClick}>
                 <i className={hamburgerClicked? icons[0]: icons[1]}  />
                </div>
        
               
                <ul className={!hamburgerClicked ?"nav_phoneItems":"nav_phoneItems-active"}>
                    <li className="nav_phoneItems-item">
                        <a className="nav_phoneLink" href="http://localhost:3000/">
                            ראשי
                        </a>
                    </li>
                    <li className="nav_phoneItems-item">
                        <a className="nav_phoneLink" href="#productsection">
                            המוצרים שלנו
                        </a>   
                    </li>
                    <li className="nav_phoneItems-item">
                        <a className="nav_phoneLink" href="#special">
                        המבצעים
                        </a>
                    </li>
                </ul>
                <ul className="nav_items">
                    <li className="nav_items-item">
                        <a className="nav_link"  href="http://localhost:3000">
                        ראשי
                        </a>
                        
                       
                    </li>
                    <li className="nav_items-item">
                        <a className="nav_link" href="#productsection">
                        המוצרים שלנו
                        </a>
                    </li>
                    <li  className="nav_items-item">
                        <a className="nav_link" href="#special">
                         המבצעים
                         </a>
                    </li>
                </ul>          
            <a href="#" className="nav_phone">
            <h2 className="phone" onClick={copyNumber}>
                <i className="fas fa-phone-square"/>{" "}
                050-638-4221
            </h2>
            </a>

            
           
        </nav>
    )
}
export default Navbar
 