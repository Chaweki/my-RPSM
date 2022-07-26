import React, { ReactElement, useCallback, useEffect, useReducer, useState } from "react";
import {Item} from './item'
import {Action,MenuAction} from '../hooks/reducer'
import { Animate } from "../utils/animation";

export interface ManuProps{
     onMenu?:React.Dispatch<Action>,
     Key?:string
     
}


export function Menu<T extends ManuProps>({onMenu}:T){
    const [show,setShow] = useState(true)
    const [lizard,setLizard] = useState(true)
    const [rock,setRock] = useState(true)
    const duration = 1000

    const hiddenRock=useCallback((e:React.MouseEvent)=>{
        e.preventDefault()
        e.stopPropagation()
        setShow(false)
        setRock(false)
    },[setShow])
    const hiddenLizard=useCallback((e:React.MouseEvent)=>{
        e.preventDefault()
        e.stopPropagation()
        setShow(false)
        setLizard(false)
    },[setShow])
    const HandleRock=  useEffect(()=>{
        
            if(onMenu && !rock ){

                const timer=setTimeout(() => {
                onMenu({type:MenuAction.rock})
                    
                }, duration);
            return ()=> clearTimeout(timer)}
           },[rock]) 

        

    const HandleLizard= useEffect(()=>{
        if(onMenu&& !lizard )
        {const timer=setTimeout(() => {
            onMenu({type:MenuAction.lizard})
                
            }, duration);
        return ()=> clearTimeout(timer)}
       },[lizard]) 

    return <div className="menu">
       <Animate visible={show} duration={duration} >
        <h1 className="welcome">Welcome choose your game!</h1>
         
        <div className="menu-choice">
            <Item type='rock-menu' onClick={hiddenRock} ></Item>
            <Item type='lizard-menu' onClick={hiddenLizard}></Item>
        </div>
    </Animate>
    </div>
}