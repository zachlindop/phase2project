import { useEffect, useState } from 'react';

function Italian() {
    const [italian, setItalian] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Italian")
            .then(r => r.json())
            .then(data => setItalian(data))
        }, []);

    return (<div class="food">

        <h1> Italian Food </h1>
        {italian.map(item => 
        <div>
            <img class="image" src={item.image} />
            <br></br>
            <br></br>
            {item.name}
        </div>)
        }

    </div>)
}
export default Italian;
{/* <img src={game.game_image} /> */}