import 'jasmine';
import { Node, LinkedList } from '../../data-structures/linked-list';

describe('Node', () => {
  it('should create a new Node with provided value and next === null', () => {
    const value = 'value';
    const node = new Node(value);

    expect(node).toBeTruthy();
    expect(node.value).toEqual(value);
    expect(node.next).toEqual(null);
  });
});

describe('LinkedList', () => {
  let list: LinkedList<any>;

  const firstValue = '123';
  const secondValue = ['big', 'array'];
  const thirdValue = { firstValue, secondValue };

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should create', () => {
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });

  describe('push()', () => {
    it('should add new Nodes to the end of the list', () => {
      expect(list.length).toEqual(0);
      list.push(firstValue);

      expect(list.head).toEqual(list.tail);
      expect(list.tail.next).toEqual(null);
      expect(list.tail.value).toEqual(firstValue);

      expect(list.length).toEqual(1);

      list.push(secondValue);

      expect(list.head.value).toEqual(firstValue);
      expect(list.head.next).toEqual(list.tail);
      expect(list.tail.value).toEqual(secondValue);
      expect(list.length).toEqual(2);

      list.push(thirdValue);

      expect(list.head.value).toEqual(firstValue);
      expect(list.head.next.value).toEqual(secondValue);
      expect(list.head.next.next).toEqual(list.tail);
      expect(list.tail.value).toEqual(thirdValue);
      expect(list.length).toEqual(3);
    });

    it('should return this list', () => {
      expect(list.push(123)).toEqual(list);
    });
  });

  describe('pop()', () => {
    it('should remove last element from the list and return it', () => {
      expect(list.length).toEqual(0);
      list.push(firstValue).push(secondValue).push(thirdValue);

      const node = list.pop();

      expect(node).toEqual(new Node(thirdValue));
      expect(list.tail.value).toEqual(secondValue);
      expect(list.length).toEqual(2);
    });

    it('should return undefined if list is empty', () => {
      expect(list.length).toEqual(0);
      expect(list.pop()).toEqual(undefined);
      expect(list.length).toEqual(0);
    });
  });

  describe('unshift()', () => {
    it('should take value and make it the new head', () => {
      expect(list.length).toEqual(0);
      expect(list.unshift(firstValue)).toEqual(list);
      expect(list.head.value).toEqual(firstValue);
      expect(list.head).toEqual(list.tail);
      expect(list.length).toEqual(1);

      list.unshift(secondValue);

      expect(list.head.value).toEqual(secondValue);
      expect(list.head.next.value).toEqual(firstValue);
      expect(list.tail.value).toEqual(firstValue);
      expect(list.length).toEqual(2);
    });
  });
});
