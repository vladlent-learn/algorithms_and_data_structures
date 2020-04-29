const arr = [999, -1, -5, -3, 0, 1, 2, 6, 7456, 1233, 45];

export const getTestArray = () => arr.slice();

export const getRandomArray = (length = 1000) =>
  Array.from({ length }).map(() => {
    const n = Math.random();
    return Math.round(n > 0.3 ? n * 100 : n * -100);
  });

export const swap = (arr: any[], x: number, y: number) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
  return arr;
};

export const verifySort = (arr: number[]) =>
  arr.every((el, i, array) => (i === 0 ? true : el >= array[i - 1]));
