import { getTestArray, swap } from '../utils';

function bubbleSort(arr: number[]) {
  let noSwap;

  for (let i = arr.length - 1; i > 0; i--) {
    if (noSwap) return arr;

    noSwap = true;

    for (let j = 0; j < i; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      if (current > next) {
        arr[j + 1] = current;
        arr[j] = next;

        noSwap = false;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(getTestArray()), 'bubble sort');

function selectionSort(arr: number[]) {
  let noSwap;
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    if (noSwap) return arr;
    minIndex = i;
    noSwap = true;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        noSwap = false;
      }
    }

    if (!noSwap) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

console.log(selectionSort(getTestArray()), 'selection sort');

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];

    for (let j = 0; j < i; j++) {
      if (item < arr[j]) {
        const [smaller] = arr.splice(i, 1);
        arr.splice(j, 0, smaller);
        break;
      }
    }
  }

  return arr;
}

console.log(insertionSort(getTestArray()), 'insertion sort');
