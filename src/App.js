import "../src/style/style.css";
import CartWindget from "./components/CartWindget"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";




const App = () => {
  const onAdd = () =>{
    console.log("se presiono el boton agregar al carrito");
  };

return(
  <div>
    <CartWindget />
    <ItemListContainer/>
    <NavBar />
    <ItemCount stock={5} initial={0} onAdd={onAdd}/>
  </div>
);
};




export default App;
