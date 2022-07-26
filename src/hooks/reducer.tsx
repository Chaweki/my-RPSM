import React,{useReducer}from "react";
import { LizardGame } from "../UI/LizarduGame";
import {Menu, ManuProps} from '../UI/menu'
import { RockGame } from "../UI/RockGame";

type State={
    content:React.ElementType
}

export enum MenuAction{
    home='home',
    rock='rock',
    lizard='lizard'

}
export type Action = {
    type:MenuAction,
}

function useHome(){
    const[state,dispatch]= useReducer(reducerHome, {
        content:Menu
    })
    return{
        state:state,
        onMenu:dispatch
    }
}


export function reducerHome(state:State,action:Action):State{
    switch (action.type){
        case MenuAction.home:
            return {...state,content: Menu<ManuProps>}
        case MenuAction.rock:
            return {content: RockGame}
        case MenuAction.lizard:
            return {content: LizardGame }
        default:
            return state

    }

}