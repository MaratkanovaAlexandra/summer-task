import React, { FC } from 'react';

import Rules from './Rules';
import Equations from './Equations';
import Answers from './Answers';

import styles from './Game.module.css';

const Game: FC = () => {  
  return (
    <div className={styles.container}>
      <Rules />
      <div className={styles.flexContainer}>
        <Equations />
        <Answers />
      </div>
    </div>
  );
}
 
export default Game;
