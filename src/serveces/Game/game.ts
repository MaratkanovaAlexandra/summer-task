import lineVariants from './lineVariants'

export const getRandomLine = () => lineVariants[Math.floor(Math.random()*lineVariants.length)];

export const  solve = (line1: number[], line2: number[]) => {
  const f1 = [...line1];
  const f2 = [...line2];
  f1[1] = - f1[1]/f1[0];
  f1[2] = - f1[2]/f1[0];
  const coefficient1 =  f2[0] * f1[1] + f2[1];
  const coefficient2 = f2[0] * f1[2] + f2[2];
  const Y = (-coefficient2)/coefficient1;
  const X =  (f1[1]*Y + f1[2]);
  return {x: X, y: Y}
}
