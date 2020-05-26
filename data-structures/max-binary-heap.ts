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

  extractMax(): number {
    swap(this.values, 0, this.values.length - 1);
    const root = this.values.pop();
    let parentIndex = 0;

    while (true) {
      let [leftChild, rightChild] = MaxBinaryHeap.getChildrenIndexes(parentIndex);

      if (
        this.values[parentIndex] < this.values[leftChild] &&
        this.values[parentIndex] < this.values[rightChild]
      ) {
        if (this.values[rightChild] > this.values[leftChild]) {
          swap(this.values, parentIndex, rightChild);
          parentIndex = rightChild;
          continue;
        } else {
          swap(this.values, parentIndex, leftChild);
          parentIndex = leftChild;
          continue;
        }
      }

      if (this.values[parentIndex] < this.values[leftChild]) {
        swap(this.values, parentIndex, leftChild);
        parentIndex = leftChild;
        continue;
      }
      if (this.values[parentIndex] < this.values[rightChild]) {
        swap(this.values, parentIndex, rightChild);
        parentIndex = rightChild;
        continue;
      }

      return root;
    }
  }
}
