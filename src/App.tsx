import React from 'react';
import logo from './logo.svg';
import './App.css';
//--- carousel
import { Carousel, Layer } from './lib/carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <Layer layer={1} animation={undefined}>
          <img slide={0} src={logo} className="App-logo" alt="logo" />
          <img slide={1} src={logo} className="App-logo" alt="logo" />
          <img slide={2} src={logo} className="App-logo" alt="logo" />
        </Layer>
      </Carousel>
    </div>
  );
}

export default App;
