import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdDetail } from "../services/products";
import "./ProdDetail.css";
export default function ProdDetail(props){
const [prodDetail, setProdDetail]=useState(null);
const {product}=useParams();
useEffect(() => {
    console.log(product)
    getProdDetail(product).then((prodDetail) => {
      setProdDetail(prodDetail);
    });
  }, [product]);
return(
    <>
    {prodDetail ? (
<div className="product__container">
    <p>{prodDetail.specs}</p>
    <p>{prodDetail.details}</p>
</div>
    ) : (
<p>Cargando informacion...</p>
    )}
    
    </>
)
}