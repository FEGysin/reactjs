/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import CartWidget from"./CartWidget/CartWidget"
import Context from "../../../Context/context";
import "./NavBar.css"
import { useContext } from "react";
export default function NavBar (props){
const {Links}=props
const {store}=useContext(Context)
    return(
      <div>
        <nav className="nav-bar">
            <ul className="nav__list-items">
            {Links.map(({id,path, name}) => (
              <li key={`${id}-page`}>
            <NavLink
              to={id}
              className={({ isActive }) =>
                isActive ? "link is-active" : "link"
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
            </ul>
            <CartWidget path="myCart" />
        </nav>
        </div>
    )
}
