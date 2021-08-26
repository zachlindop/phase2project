import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import American from './components/American'
import Asian from './components/Asian'
import Italian from './components/Italian'
import Mexican from './components/Mexican'

function App() {
  


return (

<div>

  <NavBar />
  
  

    <Route exact path="/">
      <Home />
    </Route>


    <Route exact path="/American">
      <American />
    </Route>

    <Route exact path ="/Mexican">
      <Mexican />
    </Route>

    <Route exact path = "/Asian">
      <Asian />
    </Route>

    <Route exact path = "/Italian">
      <Italian />
    </Route>



</div>
);


}
export default App;