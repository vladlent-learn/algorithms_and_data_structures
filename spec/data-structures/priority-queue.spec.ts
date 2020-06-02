import { PriorityQueue } from '../../data-structures/priority-queue';

describe('PriorityQueue', () => {
  let heap: PriorityQueue;

  beforeEach(() => {
    heap = new PriorityQueue();
  });

  describe('enqueue()', () => {
    it('should put the node into the right spot based off its priority', () => {
      heap.enqueue(5, 3);
      expect(heap.values[0].priority).toEqual(3);
      heap.enqueue(10, 2);
      expect(heap.values.map(n => n.priority)).toEqual([2, 3]);
      heap.enqueue(6, 4);
      expect(heap.values.map(n => n.priority)).toEqual([2, 3, 4]);
      heap.enqueue(20, 1);
      expect(heap.values.map(n => n.priority)).toEqual([1, 2, 4, 3]);
    });
  });

  describe('dequeue()', () => {
    beforeEach(() => {
      heap.enqueue(5, 3);
      heap.enqueue(10, 2);
      heap.enqueue(6, 4);
      heap.enqueue(20, 1);
      heap.enqueue(20, 5);
    });

    it('should remove root element and return it', () => {
      expect(heap.dequeue().priority).toEqual(1);
    });

    it('should rearrange heap using priority', () => {
      heap.dequeue();
      expect(heap.values.map(n => n.priority)).toEqual([2, 3, 4, 5]);
    });
  });
});
