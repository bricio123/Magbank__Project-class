import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Creditcard from './components/Creditcard';

import "./App.scss";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Creditcard/>
    </div>
  );
}

export default App;
