import { useEffect, useState } from 'react';

function Mexican() {
    const [mexican, setMexican] = useState([]);
    const [toggleMexican, setToggleMexican] = useState(false);
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
            <h2>{item.name}</h2>
            <br/>
            <img class="image" src={item.image} alt="yummy foodie pic!"/>
            <br></br>
            <h3 onClick={() => setToggleMexican(!toggleMexican)}>{toggleMexican ? `Good For: ${item.good_for}` : `Ingredients: ${item.ingredients}`}</h3>
        </div>)}

    </div>)
}
export default Mexican;