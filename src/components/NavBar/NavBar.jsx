/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from"./CartWidget/CartWidget"
import "./NavBar.css"
function NavBar (props){

    return(
        <nav className="nav-bar">
            <ul>

                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Servicios</a>
                </li>
                <li>
                    <a href="#">Quienes Somos</a>
                </li>
                <li>
                    <a href="#"> Contactenos</a>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        
    )
}
export default NavBar;