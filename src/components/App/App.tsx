import React, { useState, FC } from 'react';

import Header from '../Header';
import Game from '../Game';
import Footer from '../Footer';

import Context from '../Contex';
import { getRandomLine, solve } from '../../serveces';

import './App.css';

const App: FC = () => {
  const LINE = getRandomLine();
  const [ f1, setF1 ] = useState(LINE.f1);
  const [ f2, setF2 ] = useState(LINE.f2);
  const [ points, setPoints ] = useState(0);

  const submit = (x: number, y: number) => {
    const correct = solve(f1,f2);
    
    if ((correct.x === x) && (correct.y === y)) {
      setPoints(points + 1);
      const LINE = getRandomLine();
      setF1(LINE.f1);
      setF2(LINE.f2);
    }
  }

  console.log(points);

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
