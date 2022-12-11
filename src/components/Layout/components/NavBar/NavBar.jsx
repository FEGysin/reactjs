/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import CartWidget from"./CartWidget/CartWidget"
import "./NavBar.css"
export default function NavBar (props){
const {Links}=props
    return(
        <nav className="nav-bar">
            <ul className="nav__list-items">
            {Links.map((page) => (
          <li key={`${page.id}-page`}>
            <NavLink
              to={page.id}
              className={({ isActive }) =>
                isActive ? "link is-active" : "link"
              }
            >
              {page.name}
            </NavLink>
          </li>
        ))}
            </ul>
            <CartWidget/>
        </nav>
        
    )
}
