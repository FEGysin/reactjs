import React from "react";
import Button from "../Button/Button.jsx"

export default function Counter(props){
    const[initValue, onAdd, onRemove] =props
    return(
    <>
    <Button label="-" onclick={onRemove}/>
    <span>{initValue}</span>
     <Button label="+" onclick={onAdd} />
</>
    )
}