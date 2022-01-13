import React, { useState } from 'react';


function FoodForm({ handleSubmit }) {
    const [name, setName] = useState('');
    const [good_for, setGood_for] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
  
    function onSubmit(e) {
      e.preventDefault();
  
      const newFood = {
        name,
        good_for,
        image,
        ingredients
      };
  
      handleSubmit(newFood);
      
    }
  
    return (
      <div className="container">
        <form className="add-newFood" onSubmit={onSubmit}>
          <h3>Add Italian Food</h3>
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
            type="text"
            name="name"
            placeholder="Is Great for!"
            className="input-text"
            value={good_for}
            onChange={(e) => setGood_for(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="name"
            placeholder="Ingredients"
            className="input-text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <br />
          <input
          type="text"
          name="image"
          placeholder="Enter a food's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
          <br />
          <input
            type="submit"
            name="submit"
            value="Add New Food!"
            className="submit"
          />
        </form>
      </div>
    );
  }

  export default FoodForm;





  