import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Doubts from './components/FrequentDoubts';
import './App.scss';

import posts from './data/Posts';

const App = () => (
  <div className='App'>
    <Navbar />
    <Hero />

    <CreditCard />
    <CardList posts={posts} />
    <CenteredButton>Abra sua conta</CenteredButton>
    <Institutional />
    <Doubts/>
  </div>
);

export default App;