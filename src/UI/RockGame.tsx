import React, { useCallback, useState } from "react";
import { Item, PlayerChoice } from "./item";
import { Header } from "./Header";
import { ModalRules } from "./Modal-rules";
import { Duel, Verdict } from "./duel";
import { Action } from "../hooks/reducer";

type s = {
    rockScore: number;
    lizardScore: number;
}

interface RockGameProps{
     onMenu?:React.Dispatch<Action>,
     onScore: React.Dispatch<s>,
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
    const [result,setResult] = useState(undefined)
 

    const handleResult = useCallback(function(result:boolean){
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
            
            onScore(s=>({...s,rockScore:num}))

        }

    },[])
 
    const [state,setState] = useState({
        duel:false,
        playerChoice:'',

    })
    const handleChoice = useCallback(function(e:React.MouseEvent){
        e.preventDefault()
        e.stopPropagation()
        
        setState({
            duel:true,
            playerChoice:e.target.dataset.type
        })
    },[])
    return<>
     <div className="container">
        <Header logo="images/logo.svg" score={score.rockScore}></Header>
   { !state.duel? <PlayerChoice game="rock" types={listOfChoicesRock} onChoice={handleChoice} /> : <Duel game="rock" winningCases={winningRock} onResult={handleResult} listOfChoices={listOfChoicesRock} choice={state.playerChoice} />}
   {result!=undefined?<Verdict result={result} onMenu={onMenu} ></Verdict>:null}
   
   <ModalRules rules="../../images/image-rules.svg"></ModalRules>
    </div>
    </> 
}

interface PlayerChoiceProps{
    onChoice:(e:React.MouseEvent)=>void,
}
