import { useEffect, useState } from 'react';

function Asian() {
    const [chinese, setChinese] = useState([]);
    const [toggleChinese, setToggleChinese] = useState(false)
    useEffect(() => {
        fetch("http://localhost:3005/Asian")
            .then(r => r.json())
            .then(data => setChinese(data))
        }, []);

        return (<div class="food">

        <h1> Chinese Food </h1>
        {chinese.map(item => 
        <div>
            <h2>{item.name}</h2>
            <br/>
            <img class="image" src={item.image} alt="yummy foodie pic!" />
            <br/>
            <h3 onClick={() => setToggleChinese(!toggleChinese)}>{toggleChinese ? `Good For: ${item.good_for}` : `Ingredients: ${item.ingredients}`}</h3>
        </div>)}

    </div>)
}
export default Asian;