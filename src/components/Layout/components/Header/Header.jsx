import HeaderImg from"./header.png"
import "./Header.css"
function Header (props){
    return(
<header>
    <div className="my-header">
        <img src={HeaderImg} alt="header.png"></img> 
        {/* <a ref="#"></a> */}
    </div>
    </header>
    )
}
export default Header;