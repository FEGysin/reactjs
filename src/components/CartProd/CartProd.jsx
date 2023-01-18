import React,{useContext} from "react";
import Button from "../Button/Button"
import Context from "../Context/context";
import "./CartProd.css"
export default function CartProd(props){
    
    const {ticket}=props
    const {dispatch}=useContext(Context)

    const onClickDelProductHandler =(id)=>dispatch({
        type:"Del-Item",
        payload:{id,},
    })

    const ticketStatusClass=ticket.buyer ? "ticket-finished" : "ticket-standBy"
    return(
       
<div className={`ticketDetailContainer ${ticketStatusClass}`} >

    {ticket.products.map(({id, category, subCategory, model, amount, price})=>(
        <div className="ticketProductDetail" key={id}>
            <div className="ticketId">{id}</div>   
            <div className="ticketDetail">{`${category} ${subCategory} ${model}`}</div>
            <div className="tiketAmount">{amount}</div>
            <div className="ticketPrice">{price}</div>
            <div className="ticketValue">{amount * price}</div>
        
  {!ticket.buyer ? (
         <Button 
            label="Remover"
                onClick={()=>onClickDelProductHandler(id)}/>
            ):null} 
        </div>
        ))}
    
    {ticket.buyer && (
        
        <div className="ticketBuyerInformation">
            <div className="buyerInfo buyerName">
                <span>Nombre :</span>
                <span>{ticket.buyer.name}</span>
            </div>
            <div clasName="buyerInfo buyerAdress">
                <span>Domicilio Entrega :</span>
                <span>{ticket.buyer.addres}</span>
            </div>
            <div className="buyerInfo buyerPhone">
                <span>Telefono Contacto</span>
                <span>{ticket.buyer.phone}</span>
            </div>
            <div className="buyerInfo buyerEmail">
                <span>E-Mail</span>
                <input type="email" value={ticket.buyer.email}/>
            </div>
        </div>
    )

    }
</div>
    )
}