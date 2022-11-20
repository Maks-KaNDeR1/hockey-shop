import React from 'react';
import './App.scss';
import { Choice } from './Components/Choice/Choice';
import { Complementary } from './Components/Complementary/Complementary';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Slider } from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper-content">
        <Header />
        <Slider />
        <Choice />
        <Complementary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
