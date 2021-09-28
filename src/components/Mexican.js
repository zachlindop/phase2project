import { useEffect, useState } from 'react';

function Mexican() {
    const [mexican, setMexican] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Mexican")
            .then(r => r.json())
            .then(data => setMexican(data))
        }, []);

    return (<div class="food">

        <h1> Mexican Food </h1>
        {mexican.map(item => 
        <div>
            <img class="image" src={item.image}/>
            <br></br>
            <br></br>
            {item.name}
        </div>)}

    </div>)
}
export default Mexican;