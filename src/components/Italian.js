import { useEffect, useState } from 'react';

function Italian() {
    const [italian, setItalian] = useState([]);
    const [toggleItalian, setToggleItalian] = useState([])

    useEffect(() => {
        fetch("http://localhost:3005/Italian")
            .then(r => r.json())
            .then(data => setItalian(data))
        }, []);

    return (<div class="food">

        <h1> Italian Food </h1>
        {italian.map(item => 
        <div>
            <img class="image" src={item.image} alt="yummy foodie pic!" />
            <br></br>
            <br></br>
            {item.name}
            <br></br>
            <h3 onClick={() => setToggleItalian(!toggleItalian)}>{toggleItalian ?`Good For: ${item.good_for}` : `Ingredients: ${item.ingredients}`}</h3>

        </div>)
        }

    </div>)
}
export default Italian;
