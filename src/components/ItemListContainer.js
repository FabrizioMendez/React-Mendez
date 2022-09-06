import ItemList from "./ItemList"
const ItemListContainer = () => {
  const promesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve([
        {prodcuto: "mouse",
        precio: 1500,
        marca:"Logitec"},
        {prodcuto: "teclado",
        precio: 1000,
        marca:"Logitec"}
      ]);
    },2000)
  })
  promesa.then(res => console.log(res))
  return (
    <div>
        <ItemList list={[0,2,4,5,6,7]}/>
    </div>
  )
}

export default ItemListContainer 