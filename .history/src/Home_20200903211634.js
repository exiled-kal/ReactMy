import React from 'react';
import './Home.css';
import Banner from './Banner';
import Cards from './Cards';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Cards 
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w="
        />
        <Cards />
        <Cards />
      </div>
      <div className="home__section">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Home;
