const arr = [999, -1, -5, -3, 0, 1, 2, 6, 7456, 1233, 45];

export const getRandomNumberInRange = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max - min + 1));

export const getTestArray = () => arr.slice();

export const getRandomArray = (length = 1000, digitCount = [1, 3], partOfNegativeNumbers = 0.3) =>
  Array.from({ length }).map(() => {
    const n = Math.random();

    // We need to +1 to include range start/end itself
    const possibleDigits = Array.from({ length: digitCount[1] - digitCount[0] + 1 }).map(
      (_, i) => digitCount[0] + i,
    );

    const randomNumber =
      n * 10 ** possibleDigits[getRandomNumberInRange(0, possibleDigits.length - 1)];

    return Math.round(n > partOfNegativeNumbers ? randomNumber : -randomNumber);
  });

export const swap = (arr: any[], x: number, y: number) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
  return arr;
};

export const verifySort = (arr: number[]) =>
  arr.every((el, i, array) => (i === 0 ? true : el >= array[i - 1]));
