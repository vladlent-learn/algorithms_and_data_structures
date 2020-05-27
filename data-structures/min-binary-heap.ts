import { swap } from '../utils';
import { MaxBinaryHeap } from './max-binary-heap';

export class Node {
  constructor(public value: any, public priority: number) {}
}

export class MinBinaryHeap {
  values: Node[] = [];

  constructor() {}

  enqueue(value: any, priority: number) {
    const node = new Node(value, priority);
    this.values.push(node);

    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = MaxBinaryHeap.getParentIndex(index);
      const parent = this.values[parentIndex];
      const element = this.values[index];

      if (element.priority > parent.priority) return this;
      swap(this.values, index, parentIndex);
      index = parentIndex;
    }
    return this;
  }

  dequeue(): Node {
    swap(this.values, 0, this.values.length - 1);
    const root = this.values.pop();
    let parentIndex = 0;

    while (true) {
      const [leftChildIdx, rightChildIdx] = MaxBinaryHeap.getChildrenIndexes(parentIndex);
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      const parent = this.values[parentIndex];

      if (
        leftChild &&
        rightChild &&
        parent.priority > leftChild.priority &&
        parent.priority > rightChild.priority
      ) {
        if (rightChild.priority < leftChild.priority) {
          swap(this.values, parentIndex, rightChildIdx);
          parentIndex = rightChildIdx;
          continue;
        } else {
          swap(this.values, parentIndex, leftChildIdx);
          parentIndex = leftChildIdx;
          continue;
        }
      }

      if (leftChild && parent.priority > leftChild.priority) {
        swap(this.values, parentIndex, leftChildIdx);
        parentIndex = leftChildIdx;
        continue;
      }
      if (rightChild && parent.priority > rightChild.priority) {
        swap(this.values, parentIndex, rightChildIdx);
        parentIndex = rightChildIdx;
        continue;
      }

      return root;
    }
  }
}
