import carrito from "../img/carrito.png";
import logo from "../img/logo.jpeg";
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="barra">
            <div className="logoF">
                <img className="logo" src={logo} alt=""/>
            </div>
            <ul>
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/catalogo/"}>Catalogo</Link></li>
                <li><Link to={"/contact/"}>Contacto</Link></li>
                <li><Link to ={"/cart"}>Carrito</Link></li>
            </ul>
            <div className="carritoF">
                <img className="carrito" src={carrito} alt=""/>
            </div>
        </div>
    )
}
export default NavBar