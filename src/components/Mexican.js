import { useEffect, useState } from 'react';

function Mexican() {
    const [mexican, setMexican] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/Mexican")
            .then(r => r.json())
            .then(data => setMexican(data))
        }, []);

        // fetch("http://localhost:9292/games", {
        //   method: "POST",
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(data)
        // })
        //   .then(response => response.json())
        //   .then(game => {
        //       console.log(`game created: ${JSON.stringify(game)}`);
        //        setNewGames([...newGames, game]);
        //       //setShowReviewForm(!showReviewForm);
        //   })

    return (<div class="food">

        <h1> Mexican Food </h1>
        {mexican.map(item => 
        <div>
            <img class="image" src={item.image}/>
            <br></br>
            <br></br>
            {item.name}
            <br></br>
            Good For: {item.good_for}
        </div>)}

    </div>)
}
export default Mexican;