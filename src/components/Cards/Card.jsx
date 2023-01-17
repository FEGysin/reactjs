import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
import Counter from "../Counter/Counter"
import Button from "../Button/Button"
import "./Card.css"
export default function Card(props){
    const {data,type='default',path}=props;
    const{
        id,
        category,
        details,
        model,
        price,
        specs,
        stock:prodStock,
        subcategory,
        brand,
        
    }=data;
    const {dispatch}=useContext(Context)
    const [stock, setStock]= useState(prodStock)
    const [itemsToCart, setItemsToCart]=useState(0)
    const navigate=useNavigate()

    const onClickHandler = ()=> navigate(path)


const onAdd =()=>{  
if(itemsToCart<prodStock && prodStock !==0){
    setItemsToCart(itemsToCart+1)
    setStock(prodStock-1)}
}

const onRemove =()=>{
if(itemsToCart>0){
    setItemsToCart(itemsToCart-1)
    setStock(prodStock+1)}
}
const onClickAddtoCart=()=>{
    dispatch({type:"Add-Item", payload:{id,brand,category,subcategory, model, amount:itemsToCart, price, total:itemsToCart*price}})
}
    if (type==="default"){
        return(
            <div className="card__container" onClick={onClickHandler}>
                <div className="prod__image"/>
                <div>
                     <div>
                        {/* <img src="" alt="" /> */}
                        <h3>{brand}</h3>
                    </div>
                    <h4 className={`link-to__${model}`} onClick={onClickHandler}>
                        {model}
                    </h4>
                   
                </div>
                <div className="prod-price">
                    <div className="prod-price__value">S {price}</div>
                </div>
            </div>
        )}
    if (type==="detailed"){
        const prodSpecs=Object.entries(specs)
                return(

                <div className="card__container detailed">
                    <div className="prod__image"/>
                        <div>
                            <h3>{brand}</h3>
                            <div>
                                {/* <img src="" alt="" /> */}
                                <h4>{model}</h4>
                            </div>
                        </div>    
                        <div className="specs-Container">
                            <span><strong>Especificaciones</strong></span>
                            {prodSpecs.map((item)=>{
                                const[name,value]=item
                                return(
                                    <div className="">
                                        <span>{name} :</span>
                                        <span><strong>{value}</strong></span>
                                    </div>
                                )
                            })}
                        <div/>
                        <h4>Detalles</h4>
                        <p>{details}</p>
                        <div className="stock">
                            <span>Stock: {prodStock}</span>
                        </div> 
                        <div>
                            <Counter initValue={itemsToCart}  
                            stock={prodStock}                        
                            onAdd={onAdd}
                            onRemove={onRemove}/>
                        </div>
                    </div>
                    <div className="prod-price">
                        <div className="prod-price__value">S {price}</div>
                    
                        <Button 
                        label= "Agregar al Carro"
                        onClick={onClickAddtoCart}
                        disabled={itemsToCart===0}
                        />
                    </div>
                </div>
    )}           
}