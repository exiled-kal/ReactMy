import React from 'react';
import './SearchResult.css';
im

function SearchResult({img, location, title, description, star, price, total}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
    </div>
  );
}

export default SearchResult;
