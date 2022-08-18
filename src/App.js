import personas from './data/personas.json';
const App =() => {
  return (
    <div className="Box">
      <p>React-Mendez</p>
      {
        personas.map(personas =>(
          <div>
            <p>Nomre: {personas.nombre}</p>
            <p>Edad: {personas.edad}</p>
          <hr /> 
          </div>
        ))
      }
    </div>
  );
}

export default App;
