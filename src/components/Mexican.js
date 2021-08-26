import { useEffect, useState } from 'react';

function Mexican() {
    const [mexican, setMexican] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Mexican")
            .then(r => r.json())
            .then(data => setMexican(data))
        }, []);

    return (<>

        <h2> Mexican Food </h2>
        {mexican.map(item => <div>{item.name}</div>)}

    </>)
}
export default Mexican;