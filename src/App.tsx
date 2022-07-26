import { useState,useReducer, useCallback } from 'react'

import { Menu } from './UI/menu'
import {reducerHome} from './hooks/reducer'
import './App.css'



function App() {
  const[state,dispatch]= useReducer(reducerHome, {
    content:Menu
})
const [score,setScore] = useState({rockScore:0,lizardScore:0})
const handleScore = useCallback(function(key:string,value:number){
  setScore(s => ({...s,[key]:value}))
},[])
 const {content: Content} = state
  return <>
        

  <Content onMenu={dispatch} onScore={handleScore} score={score}></Content>
  
  </>
}

export default App
