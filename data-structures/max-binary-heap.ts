import { swap } from '../utils';

export class MaxBinaryHeap {
  static getParentIndex(index: number) {
    if (index <= 0) return 0;
    return Math.floor((index - 1) / 2);
  }

  static getChildrenIndexes(index: number) {
    if (index < 0) index = 0;
    return [2 * index + 1, 2 * index + 2];
  }

  values: number[] = [];

  constructor() {}

  insert(value: number) {
    this.values.push(value);

    let index = this.values.length - 1;
    let parentIndex = MaxBinaryHeap.getParentIndex(index);

    while (this.values[index] > this.values[parentIndex]) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = MaxBinaryHeap.getParentIndex(index);
    }
    return this;
  }
}
