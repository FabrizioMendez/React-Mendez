import "../src/style/style.css";
import CartWindget from "./components/CartWindget"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
const App = () => (
  <div>
    <CartWindget />
    <ItemListContainer/>
    <NavBar />
    <ItemCount/>
  </div>
)





export default App;
