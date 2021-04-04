export const randomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomNumbers = (count: number): number[] => {
  const randomArray: number[] = [];
  for (let i = 0; i < count; i++) {
    let ranNum: number = randomNumber(0, 100);
    while (randomArray.includes(ranNum)) {
      ranNum = randomNumber(0, 100);
    }
    randomArray.push(ranNum);
  }
  return randomArray;
};

export const shuffle = (source: any[]) => {
  const result = [...source].reverse();
  for (let i = result.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [result[i], result[rand]] = [result[rand], result[i]];
  }
  return result;
};

export * from './Card';
