import { useState,useReducer } from 'react'

import { Menu } from './UI/menu'
import {reducerHome} from './hooks/reducer'
import './App.css'



function App() {
  const[state,dispatch]= useReducer(reducerHome, {
    content:Menu
})
const [score,setScore] = useState({rockScore:0,lizardScore:0})
 const {content: Content} = state
  return <>
        

  <Content onMenu={dispatch} onScore={setScore} score={score}></Content>
  
  </>
}

export default App
