import React, { FC } from 'react';
import styles from './Rules.module.css';
 
const Rules: FC = () => {
  return (
    <>
    <div className={styles.title}>Intersection point of two straight lines on a plane</div>
    <div className={styles.rules}>
      Your task is to find intersection point of two straight lines on a plane.
      Your answer can not have any letters or other symbols. To submit answer click submit button. 
      Your points are shown on top on page. Click reset button to make your score 0 again.  
      Good luck!
    </div>
    </>
  );
}
 
export default Rules;
