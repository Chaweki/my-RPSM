import React, { useEffect, useState } from "react";
import { Action, MenuAction } from "../hooks/reducer";
import { Item } from "./item";


const choices = function(listOfChoices:readonly string[]): string{
    let index = Math.floor(Math.random() * listOfChoices.length)
    return listOfChoices[index]

}
export function duel(choice:string,house:string,winning:{[key:string]:string[]}){
    let result=null
    if(choice === house){
        result= true

    }else{
        result = winning[choice].includes(house)
    }
    return result

     
}
interface VerdictProps{
    result:boolean,
    onMenu?:React.Dispatch<Action>,
}
export function Verdict({result,onMenu}:VerdictProps){
    const handlePlayAgain = function(){
        if(onMenu){
            onMenu({type:MenuAction.home})
        }
                
    }
    return <div className="result ">
    <h1>{result? 'YOU WIN' : 'YOU LOSE'} </h1>
    <button onClick={handlePlayAgain}>PLAY AGAIN</button>
   </div>
}

interface DuelProps{
    choice:string
    listOfChoices:readonly string[],
    winningCases:{[key:string]:string[]},
    onResult:(result:boolean)=>void,
    game:string

}

export function Duel({game,choice,listOfChoices,winningCases,onResult}:DuelProps){
    const [house,sethouse]=useState('')
    
    useEffect(function(){

        const timer=setTimeout(()=>{
            const pick = choices(listOfChoices)
            sethouse(pick)
           const result=duel(choice,pick,winningCases)

           onResult(result)
           

        },1000)
        return ()=> clearTimeout(timer)
    },[])
    return <div className="duel"> 
        <Item type={`${game}-${choice} choice`} />
       {house? <Item  type={`${game}-${house} choice-house`} />: <div id="house" className="choice-house choice-house-empty "></div> } 
    </div>
}