import React, { Children, ReactElement, ReactNode, useEffect, useState } from "react";


interface AnimateProps  {
    children:ReactNode,
    onVisible?:()=>void,
    visible:boolean,
    duration?:number,
    EnterClass?:string,
    ExitClass?:string,

}
enum STATE{
    ENTERING,
    VISIBLE,
    LEAVING,
    HIDDEN

}
export function Animate({children,duration=1000,visible,EnterClass='fadein',ExitClass='fadeout' ,onVisible}:AnimateProps){
    const [state,setState] = useState(visible?STATE.VISIBLE:STATE.HIDDEN)
    const className=state=== STATE.VISIBLE?EnterClass:ExitClass
    useEffect(()=>{
        if(!visible){
            setState(STATE.LEAVING)
        }else{
            setState((s)=>s === STATE.HIDDEN? STATE.ENTERING : STATE.VISIBLE)
        }
    },[visible])
    useEffect(()=>{
        if(state === STATE.LEAVING){
            const timer=setTimeout(() => {
                setState(STATE.HIDDEN)
                
            }, duration);
            return ()=>{clearTimeout(timer)}
        }else if(state=== STATE.ENTERING){
                document.body.offsetHeight
                setState(STATE.VISIBLE)
           
        }
    },[state])
    if(state===STATE.HIDDEN){
       

        return null
    }
        return <>
        {
            React.Children.map(children,child=>{
                if(React.isValidElement(child)){
                return React.cloneElement(child, {...child.props,
                    className: `${child.props.className} ${className}`
                  })}
    
            })
        }
        </>
}