import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../images/icon-close.svg"
import { Animate } from "../utils/animation";

interface Modal{
    rules:string
}
export function ModalRules({rules}:Modal){
    const [show,setShow] = useState(false)

    const showModal = useCallback((e:React.MouseEvent)=>{
        e.preventDefault
        setShow(true)
    },[])
    const CloseModal = useCallback((e:React.MouseEvent)=>{
        e.preventDefault
        setShow(false)
    },[])

   
    return <footer >
    <button className="btn" id="rules" onClick={showModal}>Rules</button>
    { show? <Modal rules={rules} onClose={CloseModal} />:null}
    </footer>

    
}
interface ModalProps{
    onClose:(e:React.MouseEvent)=>void,
    rules:string
}
function Modal<T extends ModalProps>({onClose,rules}:T){
    
    return createPortal( <div className="modal">
    <h1>Rules</h1>
    <img  src={rules} alt="rules of the game"/>
    <img src={closeIcon}  alt="close button" onClick={onClose} /> 
    </div>,document.body)
}