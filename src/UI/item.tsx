import React, { ReactElement } from "react";
interface ItemProps{
    type: string,
    data?:string,
    onClick?:(e:React.MouseEvent)=>void
}

export function Item({type,onClick,data}:ItemProps){
  
    return <div className={type} onClick={onClick} data-type={data} ></div>
}
interface PlayerChoiceProps{
    onChoice:(e:React.MouseEvent)=>void,
    types:string[],
    game:string,
}
export function PlayerChoice({onChoice,types,game}:PlayerChoiceProps){
    let items:ReactElement[]=[]
    types.forEach(type=> items.push(<Item type={`${game}-${type}`} data={type} key={type} onClick={onChoice}></Item>))
    return<div className={`player-${game}`}>
        {items}

        </div>

}