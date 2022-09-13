import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div>
            <ul>
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/catalogo/"}>Catalogo</Link></li>
                <li><Link to={"/contact/"}>Contact</Link></li>
                
            </ul>
        </div>
    )
}
export default NavBar