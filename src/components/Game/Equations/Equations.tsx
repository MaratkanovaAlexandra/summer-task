import React, { FC, useContext } from 'react';
import Context from '../../Contex/Context';
import styles from './Equations.module.css';

type EquationsProps = {
}

const getEquations = (f: number[]) => {
  let result = ''
  if (f[0] > 0) result += f[0] === 1? 'x' : `${f[0]}x`
  else result += f[0] === -1? '-x' : `-${Math.abs(f[0])}x`;

  if (f[1] > 0) result += f[1] === 1? ' + y' : ` + ${f[1]}y`
  else result += f[1] === -1? ' - y' : ` - ${Math.abs(f[1])}y`; 

  if (f[2] > 0) result += ` + ${f[2]}`
  else  result += ` - ${Math.abs(f[2])}`

  return `${result} = 0`;
}

const Equations: FC<EquationsProps> = (props) => {
  const { f1, f2 } = useContext(Context);

  return (
    <div className={styles.contianer}>
      <p>Line Equations</p> 
      <div className={styles.equations}>{getEquations(f1)}</div>
      <div className={styles.equations}>{getEquations(f2)}</div>
    </div>
  );
}
 
export default Equations;
