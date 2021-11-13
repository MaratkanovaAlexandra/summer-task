import React from 'react';

type contextType = {
  f1: number[],
  f2: number[],
  points: number,
  submit: (x: number, y: number) => void
}

const Context = React.createContext<contextType>({
  f1: [1,1,1],
  f2: [1,1,1],
  points: 0,
  submit: (x: number, y: number) => {}
  }
);
export default Context;
