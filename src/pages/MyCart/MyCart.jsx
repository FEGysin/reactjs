
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import Button from "../..//components/Button/Button"
import Context from "../../components/Context/context"
import CartProd from "../../components/CartProd/CartProd"
export default function MyCart(){
    return (
        <div>My Cart</div>
    )
}