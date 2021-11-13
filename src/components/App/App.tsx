import React, { useState, FC } from 'react';

import Header from '../Header';
import Game from '../Game';
import Footer from '../Footer';

import Context from '../Contex';
import { getRandomLine } from '../../serveces';

import './App.css';

const LINE = getRandomLine();
let ansX = LINE.x;
let ansY = LINE.y;

const App: FC = () => {
  const [ f1, setF1 ] = useState(LINE.f1);
  const [ f2, setF2 ] = useState(LINE.f2);
  const [ points, setPoints ] = useState(0);
  console.log(ansX, ansY);

  const submit = (x: number, y: number) => {    
    if ((ansX === x) && (ansY === y)) {
      setPoints(points + 1);
      const LINE = getRandomLine();
      setF1(LINE.f1);
      setF2(LINE.f2);
      ansX = LINE.x;
      ansY = LINE.y;
    }
  }

  return (
    <div className="App">
      <Context.Provider value={{ f1, f2, points, submit }}>
        <Header />
        <Game />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
