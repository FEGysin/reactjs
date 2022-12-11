import "./CartWidget.css"
import Icon from "./added.png"
// import bootstrap from "bootstrap"
function CartWidget(props){

    return(
                <button className="btn-cart-widget">
<img src={Icon} alt="added.png" />
        </button>
    )
}
export default CartWidget;