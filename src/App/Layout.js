import { Outlet } from "react-router-dom"
import CartWindget from "../components/CartWindget"
import NavBar from "../components/NavBar"
const Layout = () => {
  return (
    <div>
        <div>
          <h1 className="titulo">BIENVENIDO A MANGAMENDEZ </h1>
        </div>
        <CartWindget/>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout