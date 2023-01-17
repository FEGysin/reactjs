import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
// import isEmpty from "../utils/array"
import  Button  from "../../components/Button/Button";
import Card from "../../components/Cards/Card";
import "./Products.css"

export default function PorductList(props){
    const{brand}=props;
    const [productsByBrand, setProductsByBrand] =useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        const productCollection =collection(db,"tools");
         const q = query(productCollection, where("brand","==",`${brand}`))
        getDocs(q).then((querySnapshot)=>{
            const _productList=[]
           querySnapshot.forEach((product) => {
            let productData=product.data()
            productData={ ...productData,id:product.id}
            _productList.push(productData)
           }); 
           setProductsByBrand(_productList)
        })

    },[brand])
    return(
        <div className="product-list__container" area="content">
            {/* {isEmpty(productsByBrand) ? (<p>Cargando Productos, Por Favor Espere...</p>
            ):( */}
            <div className="products-ByBrand_list">
                {productsByBrand.map((product)=>(
                <Card key={product.id} data={product} path={product.id}/>
                ))}
            </div>
            <Button label="Regresar" onClick={() => navigate(-1)}/>
            {/* )}   */}
        </div>
    )
}
