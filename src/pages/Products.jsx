import { useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom";
import Card from "../components/Cards/Card";
import { getAllProducts } from "../services/products";
import { isEmpty } from "../utils/array";
import "./Products.css"
export default function PorductList(){
    const [products, setProducts] =useState([]);
    useEffect(()=>{
        getAllProducts().then((products)=>setProducts(products));
    },[])
    return(
<div className="product-list__container" area="content">
{isEmpty(products) ? (<p>Cargando Productos, Por Favor Espere...</p>
):(
<div className="products-list">
{products.map((products)=>(
    <Card key={products.id}>
<NavLink className={({isActive})=>
isActive ? `Modelo - ${products.model}` : "product"}
to={`/products/${products.id}`}>
    {products.model}
</NavLink>
   {/* <Link to={`${products.id}`}>{products.model} </Link>  */}
    </Card>
))}
    </div>

)}  
<div className="project-detail">
<Outlet />
</div>
</div>
    )}
