import React from 'react';
import { useDispatch } from 'react-redux';
import {addToCart, removeFromCart} from ''

const MyButton = () => {
  const dispatch = useDispatch()

  const buttonStyle = {
    backgroundColor: '#3498db',  // Example background color
    color: '#fff',              // Example text color
    padding: '10px 20px',       // Example padding
    borderRadius: '5px',        // Example border radius
    cursor: 'pointer',          // Example cursor style
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(addToCart())
  }


  const handleRemoveFromCart = (e) => {
    e.preventDefault()
    dispatch(removeFromCart())
  }


  return (
     <>
    <button onClick={handleAddToCart} style={buttonStyle}>
   +
    </button>
    <button onClick={handleRemoveFromCart} style={buttonStyle}>
     ---
    </button>
    <button onClick={handleRemoveFromCart} style={buttonStyle}>
     ---
    </button>
    </>
  );
};

export default MyButton;
