import ItemCount from './ItemCount'
import { Link, useParams } from 'react-router-dom';
const ItemDetail = () => {
    const{producto} = useParams();
    const agregarAlCarrito = ()=>{
        alert(`agregaste al carrito ${producto}`);
}
  return (
    <div>
    <ItemCount  stock ={5} initial ={0} onAdd = {agregarAlCarrito}/>
    <Link to ={`/cart`}>Ir al carrito</Link>
    </div>
  )
}

export default ItemDetail