import React from 'react';
import './Cards.css';

function Cards({src, title, description, price}) {
  return (
    <div className="card">
      <img src={src} alt="" />
    </div>
  );
}

export default Cards;
