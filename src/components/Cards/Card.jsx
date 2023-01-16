import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
import Counter from "../Counter/Counter"
// import btnAdd from "../Buttons/AddButton"
import "./Card.css"
export default function Card(props){
    const {data,type,path}=props;
    const{
        id,
        category,
        detais,
        model,
        price,
        specs,
        stock:prodStock,
        subcategory,
        trend,
        
    }=data;
    const {dispatch}=useContext(Context)
    const [stock, setStock]= useState(prodStock)
    const [itemsToCart, setItemsToCart]=useState(0)
    const navigate=useNavigate()

    const onClickHandler = ()=> navigate(path)    
const onAdd =()=>{
if(itemsToCart<prodStock && prodStock !==0){
    setItemsToCart(itemsToCart+1)
    setStock(stock-1)}
}

const onRemove =()=>{
if(itemsToCart>0){
    setItemsToCart(itemsToCart-1)
    setStock(stock+1)}
}
const onClickAddtoCart=()=>{
    dispatch({type:"Add-Item", payload:{id,trend,category,subcategory, model, amount:itemsToCart, price}})
}

    if (type==="default"){
        return(
            <div className="card__container" onClick={onClickHandler}>
                <div className="prod__image"/>
                <div>
                    <h3 className={`link-to__${model}`} onClick={onClickHandler}>
                        {model}
                    </h3>
                    <div>
                        {/* <img src="" alt="" /> */}
                        <h5>{`${trend}`}</h5>
                    </div>
                </div>
                <div className="prod-price">
                    <div className="prod-price__value">S {price}</div>
                </div>
            </div>
        )}
    if (type==="detailed"){
                return(

                    <div className="card__container" onClick={onClickHandler}>
                    <div className="prod__image"/>
                    <div>
                        <h3 className={`link-to__${model}`} onClick={onClickHandler}>
                            {model}
                        </h3>
                        <div>
                            {/* <img src="" alt="" /> */}
                            <h5>{`${trend}`}</h5>
                        </div>
                        <div>
                            <Counter initValue={itemsToCart}                            
                            onAdd={onAdd}
                            onRemove={onRemove}/>
                            stock={prodStock}
                        </div>
                    </div>
                    <div className="prod-price">
                        <div className="prod-price__value">S {price}</div>
                    </div>
                </div>
    )}           
}