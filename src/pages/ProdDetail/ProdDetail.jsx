import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
// import { getProdDetail } from "../services/products";
import { doc,getDoc } from "firebase/firestore";
import "./ProdDetail.css";
import Card from "../../components/Cards/Card";
const BASE_DATA={
brand:"none",
category:"",
details:"",
model:"",
price:0,
specs:{
batery:"False",
chargeSize:"",
height:0,
imp:0,
lenght:0,
power:0,
speed:"",
weight:0,
},
stock:0,
subCategory:"",
}
export default function ProdDetail(){
const {productId}=useParams();    
const [prodDetail, setProdDetail]=useState(BASE_DATA);
const navigate=useNavigate()

useEffect(() => {
 const productByRef=doc(db,"tools",productId)
 getDoc(productByRef).then((productSnapshot)=>{
    let productData=productSnapshot.data()
    productData={...productData,id:productSnapshot.id}
     setProdDetail(productData);
 })}, [productId]);
   const onClickHandler=()=>navigate(-1)

return(
    <>
    {prodDetail ? (
<div className="product__container">
<button onClick={onClickHandler}>Regresar</button>
<Card type="detailed" data={prodDetail}/>
</div>
    ) : (
<p>Cargando informacion...</p>
    )}
    
    </>
)
}