import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetail from "../components/ItemDetail";
import Catalogo from "../pages/Catalogo";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Layout from "./Layout";
const Router = () =>(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
            <Route index element ={<Home/>}/>
            <Route path="/catalogo/" element={<Catalogo/>}/>
            <Route path="/contact/" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route  path="/detail/:producto" element={<ItemDetail/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;