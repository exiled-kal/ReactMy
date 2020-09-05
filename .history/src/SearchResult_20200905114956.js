import React from 'react';
import './SearchResult.css';

function SearchResult({img, location, title, description, star, price, total}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon
    </div>
  );
}

export default SearchResult;
