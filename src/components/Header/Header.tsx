import React, { FC, useContext } from 'react';

import Contex from '../Contex';

import styles from './Header.module.css';

const Header: FC = () => {
  const { points, setPoints } = useContext(Contex);

  const reset = () => {
    setPoints(0);
  }

  return (
    <header className={styles.header}>
      <div className={styles.points}>
        Your Points: {points}
      </div>
      <button type='reset' className={styles.btn} onClick={reset}> Reset Points</button>
    </header>
  );
}
 
export default Header;
