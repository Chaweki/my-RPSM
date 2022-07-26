import React, { useCallback, useState } from "react";
import { Item, PlayerChoice } from "./item";
import { Header } from "./Header";
import { ModalRules } from "./Modal-rules";
import { Duel, Verdict } from "./duel";
import { Action } from "../hooks/reducer";

type S = {
    rockScore: number,
    lizardScore: number
}

interface RockGameProps{
     onMenu?:React.Dispatch<Action>,

     onScore: (key:string,value:number)=>void,
     score:{
        rockScore: number;
        lizardScore: number;
    }

}
export function RockGame({onMenu,onScore,score}:RockGameProps){
    const listOfChoicesRock =['paper','scissors','rock']
    const winningRock = {
        'rock':['scissors'],
        'scissors':['paper'],
        'paper':['rock']
    }

    const [result,setResult] = useState('')

 

    const handleResult = useCallback(function(result:string){
        setResult(result)
        let num=0
        if(result!=undefined){
            if(!result){
                if(score.rockScore===0){
                    num=score.rockScore
                }else{
                    num=score.rockScore-1
                }

            }else{num=score.rockScore+1}
            
            onScore('rockScore',num)


        }

    },[])
 
    const [state,setState] = useState({
        duel:false,
        playerChoice:'',

    })
    const handleChoice = useCallback(function(e:React.MouseEvent){
        e.preventDefault()
        e.stopPropagation()
        const item = e.target as HTMLElement

        setState({
            duel:true,
            playerChoice:item.dataset.type as string
        })
    },[])
    return<>
     <div className="container">
        <Header logo="images/logo.svg" score={score.rockScore}></Header>
   { !state.duel? <PlayerChoice game="rock" types={listOfChoicesRock} onChoice={handleChoice} /> : <Duel game="rock" winningCases={winningRock} onResult={handleResult} listOfChoices={listOfChoicesRock} choice={state.playerChoice} />}
   {result?<Verdict result={result} onMenu={onMenu} ></Verdict>:null}
   
   <ModalRules rules="../../images/image-rules.svg"></ModalRules>
    </div>
    </> 
}

interface PlayerChoiceProps{
    onChoice:(e:React.MouseEvent)=>void,
}
