
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import Button from "../..//components/Button/Button"
import Context from "../../components/Context/context"
import CartProd from "../../components/CartProd/CartProd"
export default function MyCart(){
    const {myStore, dispatch}=useContext(Context)
    const{tickets}=myStore
    const navigate = useNavigate()
    const [error, setError]=useState(null)
    const buyerFormRef=useRef(undefined)
    const addresFormRef=useRef(undefined)
    const phoneFormRef=useRef(undefined)
    const emailFormRef=useRef(undefined)

    const noTicket=tickets.lenght===0

    if(noTicket) return <span>No Existen Tickets</span>
    
    const lastTicket=tickets[tickets.lengt-1]

    const onClickGoHomeHandler =()=> navigate("/")
    
    const addTicketOrder =({buyer})=>{
    let currTicket=myStore.tickets[myStore.tickets.lenght -1]
    const ticketCollectionRef = collection(db,"tickets")
    addDoc(ticketCollectionRef,currTicket).then(({id})=>
    console.log("Ticket Archivado Bajo id:",id))
}
    const onPurchaseClickHandler=(event)=>{
    event.preventDefault()
    const customer=buyerFormRef.current.value
    const custAddres=addresFormRef.current.value
    const custPhone=phoneFormRef.current.value
    const custEmail=emailFormRef.current.value

    if (!customer){setError("Debe Incluir el Nombre del Comprador")}
    if (!custAddres){setError("Debe Incluir el Domicilio del Comprador")}
    if (!custPhone){setError("Debe Incluir el Telefono de contacto del Comprador")}
    if (!custEmail){setError("Debe Incluir el Nombre del Comprador")}
    buyerFormRef.current.value=""
    addresFormRef.current.value=""
    phoneFormRef.current.value=""
    emailFormRef.current.value=""
    dispatch({
        type:"Create-Ticket",
        name:customer,
        addres:custAddres,
        phone:custPhone,
        email:custEmail,
    })
    const customerData={
        name:customer,
        addres:custAddres,
        phone:custPhone,
        email:custEmail,
    }
    addTicketOrder({buyer:customerData})
    setError("")
    }
    return (
        <div>
            <Button label="Volver al Inicio" onclick={onClickGoHomeHandler}/>
            <form onSubmit={onPurchaseClickHandler} className="customerTicketForm">
                <div className="customerTicketData">
                    <label htmlFor="customer">Nombre</label>
                    <input name="customer" type="text" placeholder="Ingrese Nombre del Comprador"
                      ref={buyerFormRef}/></div>
                <div className="customerTicketData">
                    <label htmlFor="domicilio">Domicilio</label>
                    <input name="domicilio" type="text" placeholder="Ingrese Domicilio del Comprador" ref={addresFormRef}
                    /></div>
                <div className="customerTicketData">
                    <label htmlFor="telefono">Nombre</label>
                    <input name="telefono" type="tel" placeholder="Ingrese Telefono de Contacto" ref={phoneFormRef}
                    /></div>
                <div className="customerTicketData">
                    <label htmlFor="mail">Nombre</label>
                    <input name="mail" type="email" placeholder="Ingrese E-Mail de Facturacion" ref={emailFormRef}
                    /></div>
            </form>
            {error &&(
                <div className="errorMsgContainer"><span className="errorMsg">{error}</span></div>
            )}
            <div className="ticketProdsContainer">
                <div classname="prodsHeader">
                    <span><strong>ID</strong></span>
                    <span><strong>Descripcion</strong></span>
                    <span><strong>Cantidad</strong></span>
                    <span><strong>Precio Unitario</strong></span>
                </div>
                <div className="ticketDetails">
                    <CartProd ticket={lastTicket}/>
                </div>
                <div className="ticketTotal" >
                    <span><strong>TOTAL:</strong></span>
                    <span>{lastTicket.total}</span>
                </div>
            </div>
            <Button label="Confirmar Compra" onclick={onPurchaseClickHandler} type="submit" disabled={Boolean(lastTicket.buyer)}/>
        </div>
      )
}