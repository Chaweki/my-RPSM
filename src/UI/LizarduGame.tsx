import React, { ReactElement, useCallback, useContext, useState } from "react";
import {PlayerChoice } from "./item";
import imageRules from'../../images/image-rules-bonus.svg';
import logo from "../../images/logo-bonus.svg";
import { Header } from "./Header";
import { ModalRules } from "./Modal-rules";
import { Duel, Verdict } from "./duel";
import { Action } from "../hooks/reducer";

type s = {
    rockScore: number;
    lizardScore: number;
}

interface LizardGameProps{
     onMenu?:React.Dispatch<Action>,
     onScore: (key:string,value:number)=>void,
     score:{
        rockScore: number;
        lizardScore: number;
    }
}
export function LizardGame({onMenu,onScore,score}:LizardGameProps){
    const listOfChoicesLizard = ['scissors','spock','paper','lizard','rock']

    const winningLizard = {
        'rock':['scissors','lizard'],
        'scissors':['paper','scissors'],
        'paper':['rock','spock'],
        'spock':['scissors','rock'],
        'lizard':['spock','paper'],
    }
    const [result,setResult] = useState('')
 

    const handleResult = useCallback(function(result:string){
        setResult(result)
        let num=0
        
        if(result!=undefined){
            if(!result){
                if(score.lizardScore===0){
                    num=score.lizardScore
                }else{
                    num=score.lizardScore-1
                }
            }else{num=score.lizardScore+1}
            
            onScore('lizardScore',num)

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
        <Header logo={logo} score={score.lizardScore}></Header>
   { !state.duel? <PlayerChoice game="lizard" types={listOfChoicesLizard} onChoice={handleChoice} /> : <Duel game="lizard" winningCases={winningLizard} onResult={handleResult} listOfChoices={listOfChoicesLizard} choice={state.playerChoice} />}
   {result?<Verdict result={result} onMenu={onMenu} ></Verdict>:null}
   
   <ModalRules rules={imageRules}></ModalRules>
    </div>
    </> 
}

