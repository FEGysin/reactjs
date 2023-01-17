import React from "react";
import Button from "../Button/Button.jsx"

export default function Counter(props){
    const{initValue, stock, onAdd, onRemove} =props
    return(
    <>
    <Button label="-" onClick={onRemove} disabled={initValue===0}/>
    <span>{initValue}</span>
     <Button label="+" onClick={onAdd} disabled={initValue===stock} />
</>
    )
}