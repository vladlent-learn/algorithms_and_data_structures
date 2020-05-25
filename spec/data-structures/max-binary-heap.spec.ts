import { MaxBinaryHeap } from '../../data-structures/max-binary-heap';

describe('MaxBinaryHeap', () => {
  let heap: MaxBinaryHeap;
  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  describe('getParentIndex()', () => {
    it('should return parent of the provided node index', () => {
      expect(MaxBinaryHeap.getParentIndex(0)).toEqual(0);
      expect(MaxBinaryHeap.getParentIndex(5)).toEqual(2);
      expect(MaxBinaryHeap.getParentIndex(10)).toEqual(4);
      expect(MaxBinaryHeap.getParentIndex(9)).toEqual(4);
    });
  });

  describe('insert()', () => {
    it('should insert the value into correct spot', () => {
      heap.insert(10);
      expect(heap.values[0]).toBe(10);
      heap.insert(5);
      expect(heap.values[1]).toBe(5);
      heap.insert(6);
      expect(heap.values[2]).toBe(6);
      heap.insert(11);
      expect(heap.values).toEqual([11, 10, 6, 5]);

      heap.values = [41, 39, 33, 18, 27, 12];
      heap.insert(55);
      expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
      heap.insert(45);
      heap.insert(1);
      expect(heap.values).toEqual([55, 45, 41, 39, 27, 12, 33, 18, 1]);
      heap.insert(999);
      expect(heap.values).toEqual([999, 55, 41, 39, 45, 12, 33, 18, 1, 27]);
    });
  });
});
