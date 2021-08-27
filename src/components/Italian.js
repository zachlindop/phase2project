import { useEffect, useState } from 'react';

function Italian() {
    const [italian, setItalian] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Italian")
            .then(r => r.json())
            .then(data => setItalian(data))
        }, []);

    return (<>

        <h2> Italian Food </h2>
        {italian.map(item => <div>{item.name}{item.image}</div>)}

    </>)
}
export default Italian;