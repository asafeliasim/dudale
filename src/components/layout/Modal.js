import React,{useState,useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import popupimg from '../../asserts/img/popupimg.jpeg';

const Modal = ({img,show}) => {
    const [modalIsOpen,setModalIsOpen] = useState(false);
   
    useEffect(()=>{
        setModalIsOpen(show)
    }
    ,[show])
    return (
        <CSSTransition>
            <div className={modalIsOpen ? "modal_open" : "modal_close"} onClick={()=>setModalIsOpen(false)}>
                <div >
                    <img src={popupimg} alt="Image pop up" className="modal_open-img" /> 
                </div>
            </div>
        </CSSTransition>  
    )
}

export default Modal
