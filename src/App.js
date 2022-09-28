import "../src/style/style.css";
import Provider from "./App/Provider";
import Router from "./App/Router";




const App = () => {
return(
  <div>
    <Provider>
      <Router/>
    </Provider>
  </div>
);
};




export default App;
