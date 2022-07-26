import React from "react";

interface HeaderProps{
    score:number,
    logo:string
}
export function Header({score,logo}:HeaderProps){
    return <header className="header">
    <div><img id='logo' src={logo} alt=""/></div>
    <p><span className="score-text">Score</span>  <span className="score" >{score}</span></p>
  </header>
    
}