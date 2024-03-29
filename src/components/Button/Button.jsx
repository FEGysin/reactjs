import React from "react";

export default function Button(props) {
const{label, onClick, disabled=false, type="button"}=props;

return(
    <button 
    className="btn btn-default"
    onClick={onClick}
    disabled={disabled}
    type={type}>
        {label}
    </button>
)}
