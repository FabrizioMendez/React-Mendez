import { Outlet } from "react-router-dom"
import CartWindget from "../components/CartWindget"
import NavBar from "../components/NavBar"
const Layout = () => {
  return (
    <div>
        <CartWindget/>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout