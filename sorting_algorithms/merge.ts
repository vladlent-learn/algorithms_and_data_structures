import { getTestArray } from '../utils';

/** Function to merge two SORTED arrays */
function merge(arr1: number[], arr2: number[]): number[] {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }

    if (i === arr1.length) {
      return result.concat(arr2.slice(j));
    }
    if (j === arr2.length) {
      return result.concat(arr1.slice(i));
    }
  }
}

// console.log(merge([1, 3, 5, 7], [-10, -5, -3, -1]));
// console.log(merge([1, 10, 50], [1, 2, 14, 99, 100]));

console.log('merge sort');

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middleIndex)), mergeSort(arr.slice(middleIndex)));
}

console.log(mergeSort(getTestArray()));
