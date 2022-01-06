import { useState, useEffect } from 'react';

function Indian(){
const [indian, setIndian] = useState([]);
const [toggleIndian, setToggleIndian] = useState([]);
useEffect(() =>{
    fetch("http://localhost:3005/Indian")
    .then(r => r.json())
    .then(data => setIndian(data))
}, []);
return(
    <div className = "food">
        <h1> Indian Food </h1>
        {indian.map(item => 
        <div>
            <h2>{item.name}</h2>
            <br/>
            <img class="image" src={item.image} alt="yummy foodie pic!" />
            <br/>
            <h3 onClick={() => setToggleIndian(!toggleIndian)}>{toggleIndian ? `Good For: ${item.good_for}` : `Ingredients: ${item.ingredients}`}</h3>
            </div>)}
    </div>
)

}
export default Indian;