import Header from "./components/Header/Header";
// import Footer from"./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { LINKS } from "../../utils/project-link";
import "./Layout.css"
function Layout(props){
    const {children}=props
    return(
        <div>
        <Header/>
            <NavBar Links={LINKS} />
            {children}
          {/* <Footer/> */}
        </div>
    )
}
    export default Layout
