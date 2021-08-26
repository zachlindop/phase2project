import { useEffect, useState } from 'react';

function American() {
    const [american, setAmerican] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/American")
            .then(r => r.json())
            .then(data => setAmerican(data))
    }, []);

    return (<>

        <h2> American Food </h2>
        {american.map(item => <div>{item.name}</div>)}

    </>)
}
export default American;