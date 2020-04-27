const arr = [999, -1, -5, -3, 0, 1, 2, 6, 7456, 1233, 45];

const getArray = () => arr.slice();

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

console.log(bubbleSort(getArray()), 'bubble sort');

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
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort(getArray()), 'selection sort');

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

console.log(insertionSort(getArray()), 'insertion sort');

function merge(arr1, arr2) {}

console.log(merge([1, 3, 5, 7], [-10, -5, -3, -1]));
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
