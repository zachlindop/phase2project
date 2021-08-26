import { useEffect, useState } from 'react';

function Asian() {
    const [asian, setAsian] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Asian")
            .then(r => r.json())
            .then(data => setAsian(data))
        }, []);

    return (<>

        <h2> Asian Food </h2>
        {asian.map(item => <div>{item.name}</div>)}

    </>)
}
export default Asian;