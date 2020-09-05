import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarICon from @material

function SearchResult({img, location, title, description, star, price, total}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchPage__infoBottom">
          <div className="searchResult__stars">
            <StarICon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
