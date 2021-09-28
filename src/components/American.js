import { useEffect, useState } from 'react';

function American() {
    const [american, setAmerican] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/American")
            .then(r => r.json())
            .then(data => setAmerican(data))
    }, []);

    return (<div class="food">

        <h1> American Food </h1>
        {american.map(item => 
        <div>
            <img class="image" src={item.image}/>
            <br></br>
            <br></br>
            {item.name}
        </div>)}

    </div>)
}
export default American;