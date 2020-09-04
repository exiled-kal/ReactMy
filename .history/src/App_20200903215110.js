import React from 'react';

import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        {/* / */}
        <Home />

        {/* /search */}
        <SearchPage />

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
