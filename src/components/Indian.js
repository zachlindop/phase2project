import { useState, useEffect } from 'react';

function Indian(){
const [indian, setIndian] = useState([]);

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
            <img class="image" src={item.image} alt="yummy foodie pic!" />
            <br></br>
            <br></br>
            {item.name}
            <br></br>
            Good For: {item.good_for}
            </div>)}
    </div>
)

}
export default Indian;