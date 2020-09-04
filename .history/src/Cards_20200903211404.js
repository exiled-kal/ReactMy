import React from 'react';
import './Cards.css';

function Cards({src, title, description, price}) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
          <h2></h2>
      </div>
    </div>
  );
}

export default Cards;
