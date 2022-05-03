import React from 'react';
import './Card.css'
const Card=()=>{
    return(
      <div>
        <img src="./samp.png" alt="man" />
        <div className='card'>
         <h3>Card Title</h3>
         <p>Some Custom text one can write here</p>
         <button>Go somewhere</button>
        </div>
      </div>
    );
}
export default Card;