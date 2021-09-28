import { useEffect, useState } from 'react';

function Asian() {
    const [asian, setAsian] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Asian")
            .then(r => r.json())
            .then(data => setAsian(data))
        }, []);

    return (<div class="food">

        <h1> Chinese Food </h1>
        {asian.map(item => 
        <div>
            <img class="image" src={item.image} />
            <br></br>
            <br></br>
            {item.name}
        </div>)}

    </div>)
}
export default Asian;