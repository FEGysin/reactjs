import "./CartWidget.css"
import Icon from "./added.png"
import { useNavigate } from "react-router-dom";
// import bootstrap from "bootstrap"
function CartWidget(props){
    const path=props
    const Navigate = useNavigate()
const onClickHandler =()=> Navigate(path)

    return(
        <button className="btn-cart-widget" onClick={onClickHandler}>
        <img src={Icon} alt="added.png" />
        </button>

    )
}
export default CartWidget;