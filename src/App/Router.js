import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWindget from "../components/CartWindget";
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
            <Route path="/cart" element={<CartWindget/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;