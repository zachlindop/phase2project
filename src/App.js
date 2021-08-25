import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import New from './New';

function App() {
  return (<>

  <BrowserRouter>
    
    <Route exact path="/new" component={New} />
  </BrowserRouter>
   
 </>);
}

export default App;
