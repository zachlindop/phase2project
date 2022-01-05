import { useEffect, useState } from 'react';

function American() {
    const [american, setAmerican] = useState([]);
    const [toggleAmerican, setToggleAmerican] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3005/American")
            .then(r => r.json())
            .then(data => setAmerican(data))
    }, []);

    return (<div className="food">

        <h1> American Food </h1>
        {american.map(item =>
         
        <div>
            <h2>{item.name}</h2>
            <br/>
            <img class="image" src={item.image} alt="yummy foodie pic!"/>
            <br/>
            <h3 onClick={() => setToggleAmerican(!toggleAmerican)}>{toggleAmerican ? `Good For: ${item.good_for}` : `Ingredients: ${item.ingredients}`}</h3>
        </div>)}

    </div>)
}
export default American;