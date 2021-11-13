import React, { FC, useContext, useState } from 'react';
import Contex from '../../Contex';
import styles from './Answers.module.css';

const Answers: FC = () => {
  const {  submit } = useContext(Contex);
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const changeX = (event: React.ChangeEvent<HTMLInputElement>) => {
    setX(event.target.value);
  }

  const changeY = (event: React.ChangeEvent<HTMLInputElement>) => {
    setY(event.target.value);
  }

  const ClickEvent = (x: number, y: number) => {
    submit(Number(x),Number(y));
    setX('');
    setY('');
  }

  return (
    <form>
        <p className={styles.title}>Your Answers</p>
        <div className={styles.container}>
          <div className={styles.answer}>
            <label className={styles.label} htmlFor='X'>X:</label>
            <input type='text' className={styles.input} name='X' id='X' value={x} onChange={changeX} />
          </div>
          <div className={styles.answer}>
            <label className={styles.label} htmlFor='Y'>Y:</label>
            <input type='text' className={styles.input} name='Y' id='Y' value={y} onChange={changeY} />
          </div>
        </div>
        <button type='button' className={styles.submit} onClick={() => ClickEvent(Number(x),Number(y))} >Submit</button>
      </form>
  );
}
 
export default Answers;
