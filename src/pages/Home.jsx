import { useEffect,useState } from "react";
import {db} from "../firebase/config";
import { collection,getDocs } from "firebase/firestore";
import Card from "../components/Cards/Card"
import "./Home.css"
export default function Home(){

    const[prodList,setProdList]=useState([])
    
    useEffect(()=>{
    const prodCollectionRef=collection(db, 'tools')
    getDocs(prodCollectionRef).then((querySnapShot)=>{
const _prodList =[]
querySnapShot.forEach((product)=>{
    let prodData=product.data()
    prodData= Object.assign(prodData,{id:product.id})
    _prodList.push(prodData)
})
setProdList(_prodList)
    })

    },[])

    return (
    <div className="home-page__container">
        <div className="prod-list__container">
        {prodList.length ? (
            prodList.map((product)=>(
            <Card key={product.id}
            data={product}
            path={`${product.trend}/${product.id}`}
            />
            ))
            ):(<span>...Cargando la Informacion de Nuestros Productos</span>)}
        </div>
    </div>
    );
}