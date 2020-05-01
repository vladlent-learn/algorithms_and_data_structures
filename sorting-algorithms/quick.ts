import { getRandomArray, swap, verifySort } from '../utils';

function pivot(arr: number[], start = 0, end = arr.length - 1): number {
  const pivot = arr[start];
  let indexToSwap = start;

  for (let i = indexToSwap + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      indexToSwap++;
      swap(arr, indexToSwap, i);
    }
  }

  swap(arr, start, indexToSwap);
  return indexToSwap;
}

// const arr = [26, 23, 17, 39, 1];
// console.log(pivot(arr)); // 3

export function quickSort(arr: number[]): number[] {
  const pivotHelper = (start = 0, end = arr.length - 1) => {
    if (end < start) return arr;

    const pivotPoint = pivot(arr, start, end);

    pivotHelper(start, pivotPoint - 1);
    pivotHelper(pivotPoint + 1, end);

    return arr;
  };

  return pivotHelper();
}

// const array = getRandomArray(100);
// console.log(quickSort(array));
// console.log(verifySort(array));
