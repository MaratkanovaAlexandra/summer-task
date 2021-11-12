import React, { FC } from 'react';
import styles from './Answers.module.css';

interface AnswersProps {
  submit : () => void
}
 
const Answers: FC<AnswersProps> = () => {
  return (
    <form>
        <p className={styles.title}>Your Answers</p>
        <div className={styles.container}>
          <div className={styles.answer}>
            <label className={styles.label} htmlFor='X'>X:</label>
            <input type='number' className={styles.input} name='X' id='X' />
          </div>
          <div className={styles.answer}>
            <label className={styles.label} htmlFor='Y'>Y:</label>
            <input type='number' className={styles.input} name='Y' id='Y' />
          </div>
        </div>
        <button type='button' className={styles.submit}>Submit</button>
      </form>
  );
}
 
export default Answers;
