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
          src="https:"
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
