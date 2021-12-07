import { useEffect, useState } from 'react';

function Asian() {
    const [asian, setAsian] = useState([]);
    const [toggleAsian, setToggleAsian] = useState(false)
    useEffect(() => {
        fetch("http://localhost:3005/Asian")
            .then(r => r.json())
            .then(data => setAsian(data))
        }, []);

        return (<div class="food">

        <h1> Chinese Food </h1>
        {asian.map(item => 
        <div>
            <img class="image" src={item.image} alt="yummy foodie pic!" />
            <br></br>
            <br></br>
            {item.name}
            <br></br>
            <h3 onClick={() => setToggleAsian(!toggleAsian)}>{toggleAsian ? item.good_for : item.ingredients}</h3>
        </div>)}

    </div>)
}
export default Asian;