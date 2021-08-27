import React, { useState } from 'react';


function FoodForm({ handleSubmit }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
  
    function onSubmit(e) {
      e.preventDefault();
  
      const newFood = {
        name,
        Image
      };
  
      handleSubmit(newFood);
      //window.location.reload()
    }
  
    return (
      <div className="container">
        <form className="add-newFood" onSubmit={onSubmit}>
          <h3>Add Asian Food</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a food's name..."
            className="input-text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          
          <input
            type="submit"
            name="submit"
            value="Add a New Asian food"
            className="submit"
          />
        </form>
      </div>
    );
  }

  export default FoodForm;





  