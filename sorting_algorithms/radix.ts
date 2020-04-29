import { getRandomArray, getTestArray, verifySort } from '../utils';

function getDigit(num: number, place: number) {
  return Math.floor((Math.abs(num) / 10 ** place) % 10);
}

function digitCount(num: number) {
  return Math.abs(num).toString().length;
}

function mostDigits(arr: number[]) {
  return arr.reduce((max, num) => Math.max(max, digitCount(num)), 0);
}

export function radixSort(arr: number[]) {
  const iterations = mostDigits(arr);

  for (let i = 0; i < iterations; i++) {
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    arr.forEach(e => {
      digitBuckets[getDigit(e, i)].push(e);
    });

    // arr = digitBuckets.flat();
    arr = [].concat(...digitBuckets);
  }

  return arr;
}

// const array = getRandomArray(50, [3, 6], 0);
// const sortedArray = radixSort(array);

// console.log(sortedArray);
// console.log(verifySort(sortedArray));
