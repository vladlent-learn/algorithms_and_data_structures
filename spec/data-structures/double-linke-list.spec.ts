import 'jasmine';
import { DoubleLinkedList, Node } from '../../data-structures/double-linked-list';
import { LinkedList } from '../../data-structures/linked-list';

describe('Node', () => {
  it('should create a new Node with provided value and next === null', () => {
    const value = 'value';
    const node = new Node(value);

    expect(node).toBeTruthy();
    expect(node.value).toBe(value);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });
});

describe('DoubleLinkedList', () => {
  let list: DoubleLinkedList;

  const firstValue = '123';
  const secondValue = ['big', 'array'];
  const thirdValue = { firstValue, secondValue };
  const addAllValuesToList = () => list.push(firstValue).push(secondValue).push(thirdValue);
  // const addAllValuesToList = () => list.addAll([firstValue, secondValue, thirdValue]);

  beforeEach(() => {
    list = new DoubleLinkedList();
  });

  it('should create', () => {
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  describe('push()', () => {
    it('should add new Nodes to the end of the list', () => {
      expect(list.length).toBe(0);
      list.push(firstValue);

      expect(list.head).toBe(list.tail);
      expect(list.tail.next).toBeNull();
      expect(list.tail.prev).toBeNull();
      expect(list.tail.value).toBe(firstValue);
      expect(list.head.value).toBe(firstValue);

      expect(list.length).toBe(1);

      list.push(secondValue);

      expect(list.head.value).toBe(firstValue);
      expect(list.head.next).toBe(list.tail);
      expect(list.head.prev).toBeNull();
      expect(list.tail.value).toBe(secondValue);
      expect(list.tail.next).toBeNull();
      expect(list.tail.prev).toBe(list.head);
      expect(list.length).toBe(2);

      list.push(thirdValue);

      expect(list.head.value).toBe(firstValue);
      expect(list.head.next.value).toBe(secondValue);
      expect(list.head.next.next).toBe(list.tail);
      expect(list.tail.value).toBe(thirdValue);
      expect(list.tail.prev.value).toBe(secondValue);
      expect(list.length).toBe(3);
    });

    it('should return this list', () => {
      expect(list.push(123)).toBe(list);
    });
  });

  describe('pop()', () => {
    it('should remove last element from the list and return it', () => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      const node = list.pop();

      expect(node.value).toBe(thirdValue);
      expect(list.tail.value).toBe(secondValue);
      expect(list.length).toBe(2);
    });

    it('should return undefined if list is empty', () => {
      expect(list.length).toBe(0);
      expect(list.pop()).toBeUndefined();
      expect(list.length).toBe(0);
    });
  });

  describe('unshift()', () => {
    it('should add new value to the start of the list and make it the new head', () => {
      expect(list.length).toBe(0);
      expect(list.unshift(firstValue)).toBe(list);
      expect(list.head.value).toBe(firstValue);
      expect(list.head).toBe(list.tail);
      expect(list.head.prev).toBeNull();
      expect(list.head.next).toBeNull();
      expect(list.length).toBe(1);

      list.unshift(secondValue);

      expect(list.head.value).toBe(secondValue);
      expect(list.head.next.value).toBe(firstValue);
      expect(list.tail.value).toBe(firstValue);
      expect(list.tail.prev.value).toBe(secondValue);
      expect(list.head.prev).toBeNull();
      expect(list.tail.next).toBeNull();
      expect(list.length).toBe(2);
    });

    it('should return this list', () => {
      expect(list.unshift(123)).toBe(list);
    });
  });

  describe('shift()', () => {
    it('should remove first node from the list and return it', () => {
      expect(list.length).toBe(0);
      addAllValuesToList();
      expect(list.length).toBe(3);

      expect(list.head.value).toBe(firstValue);
      expect(list.length).toBe(3);

      const shiftedNode = list.shift();

      expect(shiftedNode.value).toBe(firstValue);
      expect(shiftedNode.next).toBeNull();
      expect(shiftedNode.prev).toBeNull();

      expect(list.head.value).toBe(secondValue);
      expect(list.length).toBe(2);
    });

    it('should return undefined if the list is empty', () => {
      expect(list.length).toBe(0);
      expect(list.shift()).toBeUndefined();
    });

    it('should make list empty if list has only 1 item', () => {
      expect(list.length).toBe(0);

      list.unshift(firstValue);

      expect(list.length).toBe(1);
      expect(list.head.value).toBe(firstValue);
      expect(list.head).toBe(list.tail);
      expect(list.head.next).toBeNull();

      list.shift();

      expect(list.length).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });
});
