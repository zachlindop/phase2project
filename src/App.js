import { useState } from "react"
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import American from './components/American'
import Asian from './components/Asian'
import Italian from './components/Italian'
import Mexican from './components/Mexican'
import Indian from './components/Indian'
import FoodForm from './components/FoodForm';
import MexicanForm from './components/mexicanfoodForm'
import ItalianForm from './components/italianfoodForm'
import AsianForm from './components/AsianfoodForm'
import IndianForm from './components/IndianFoodForm'

const AmericanAPI = 'http://localhost:3005/American';
const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json',
};

const MexicanAPI = "http://localhost:3005/Mexican";
const ItalianAPI = "http://localhost:3005/Italian";
const AsianAPI = "http://localhost:3005/Asian";
const IndianAPI = "http://localhost:3005/Indian";


function App() {

 const [showAmericanForm, setShowAmericanForm] = useState(false);
 const [showMexicanForm, setShowMexicanForm] = useState(false);
 const [showItalianForm, setShowItalianForm] = useState(false);
 const [showAsianForm, setShowAsianForm] = useState(false);
 const [showIndianForm, setShowIndianForm] = useState(false);
  const [newPostReRender, setPostReRender]=useState(false)

  function handleClickAmerican() {
    setShowAmericanForm((showAmericanForm) => !showAmericanForm);
  }

  function handleClickMexican() {
    setShowMexicanForm((showMexicanForm) => !showMexicanForm);
  }

  function handleClickItalian() {
    setShowItalianForm((showItalianForm) => !showItalianForm);
  }

  function handleClickAsian() {
    setShowAsianForm((showAsianForm) => !showAsianForm);
  }

  function handleClickIndian() {
    setShowIndianForm((showIndianForm) => !showIndianForm)
  }

  function addAmericanFood(Meals) {
    fetch(AmericanAPI, {
      method: 'POST',
      body: JSON.stringify(Meals),
      headers,
    
    
    })
     setPostReRender(!newPostReRender)
  
  }
    
  function addMexicanFood(Meals) {
    fetch(MexicanAPI, {
      method: 'POST',
      body: JSON.stringify(Meals),
      headers,
    
    
    })
     setPostReRender(!newPostReRender)
  
  }


  function addItalianFood(Meals) {
    fetch(ItalianAPI, {
      method: 'POST',
      body: JSON.stringify(Meals),
      headers,
    
    
    })
     setPostReRender(!newPostReRender)
  
  }

  function addAsianFood(Meals) {
    fetch(AsianAPI, {
      method: 'POST',
      body: JSON.stringify(Meals),
      headers,
    
    
    })
     setPostReRender(!newPostReRender)
  
  }

  function addIndianFood(Meals) {
    fetch(IndianAPI, {
      method: 'POST',
      body: JSON.stringify(Meals),
      headers,
    
    
    })
     setPostReRender(!newPostReRender)
  
  }

return (

<div className="buttonContainer" >
  <div className="buttons">
    <div>
{showAmericanForm ? <FoodForm post={setPostReRender} handleSubmit={addAmericanFood}/> : null}
<button onClick={handleClickAmerican}>Add American Food</button>
</div>

<div>
{showMexicanForm ? <MexicanForm post={setPostReRender} handleSubmit={addMexicanFood}/> : null}
<button onClick={handleClickMexican}>Add Mexican Food</button>
</div>

<div>
{showItalianForm ? <ItalianForm post={setPostReRender} handleSubmit={addItalianFood}/> : null}
<button onClick={handleClickItalian}>Add Italian Food</button>
</div>

<div>
{showAsianForm ? <AsianForm post={setPostReRender} handleSubmit={addAsianFood}/> : null}
<button onClick={handleClickAsian}>Add Chinese Food</button>
</div>

<div>
{showIndianForm ? <IndianForm post={setPostReRender} handleSubmit={addIndianFood}/> : null}
<button onClick={handleClickIndian}>Add Indian Food</button>
</div>

</div>

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

    <Route exact path = "/Indian">
      <Indian />
    </Route>

    

</div>

);


}
export default App;